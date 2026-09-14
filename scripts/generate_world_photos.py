#!/usr/bin/env python3
"""
world-photos/ フォルダの画像から js/world-photos.js を自動生成するスクリプト。
generate_photos.py の世界版。ファイル名の付け方や並び順のルールは同じ。

ファイル名の付け方:
  "<国名><場所><撮影時期>.拡張子"
  国名のあとの区切り文字は「、」「・」「,」「-」「_」「 」など何でもよい。

  例:
    エチオピア、ラリベラ、2019年3月.jpg → エチオピアのページに「ラリベラ、2019年3月」と表示

  各国のページ内での並び順は、キャプション末尾の撮影時期を読み取り、早い順（昇順）に並べる。
  時期が読み取れないファイルは末尾に置く。

使い方:
  python3 scripts/generate_world_photos.py

キャプションを自動生成された文言から変更したい場合は js/world-captions.js を編集する
（ファイル名をキーにした上書き用の辞書。このスクリプトは自動生成・自動編集しない）。

国名は js/countries.js の kanji（日本語の国名）と一致させる。
"""

import json
import sys
from datetime import date
from pathlib import Path

import _common

ROOT = Path(__file__).resolve().parent.parent
PHOTOS_DIR = ROOT / "world-photos"
COUNTRIES_JS = ROOT / "js" / "countries.js"
PHOTOS_JS = ROOT / "js" / "world-photos.js"
CAPTIONS_JS = ROOT / "js" / "world-captions.js"
LAST_UPDATED_JS = ROOT / "js" / "world-last-updated.js"


def main():
    countries = _common.load_js_object(COUNTRIES_JS, "COUNTRIES")
    # 国名の取り違えを避けるため、長い名前から先に判定する
    countries_by_len = sorted(countries, key=lambda c: len(c["kanji"]), reverse=True)

    overrides = {}
    if CAPTIONS_JS.exists():
        overrides = _common.load_js_object(CAPTIONS_JS, "WORLD_CAPTIONS") or {}

    by_code = {c["code"]: [] for c in countries}
    unknown = []

    for f in sorted(PHOTOS_DIR.iterdir()):
        if not f.is_file() or f.suffix.lower() not in _common.IMAGE_EXTS:
            continue
        code, auto_caption = _common.match_name(f.stem, countries_by_len, "kanji", "code")
        if code is None:
            unknown.append(f.name)
            continue
        caption = overrides[f.name] if f.name in overrides else auto_caption
        by_code[code].append((f.name, caption))

    if unknown:
        print("警告: ファイル名の先頭に国名が見つからず、スキップしました:")
        for name in unknown:
            print(f"  - {name}")

    no_date_total = []
    for code, files in by_code.items():
        sorted_files, no_date = _common.sort_by_date(files)
        by_code[code] = sorted_files
        no_date_total.extend(no_date)

    if no_date_total:
        print("警告: 撮影時期が読み取れず、末尾に配置しました:")
        for name in no_date_total:
            print(f"  - {name}")

    lines = []
    lines.append("// 国ごとの写真マニフェスト。")
    lines.append("// このファイルは scripts/generate_world_photos.py によって自動生成されます。手動で編集しないでください。")
    lines.append("// 写真を追加/削除したら python3 scripts/generate_world_photos.py を再実行してください。")
    lines.append("// キャプションはファイル名（国名のあとの部分）から自動生成されます。")
    lines.append("// 文言を変更したい場合は js/world-captions.js で上書きしてください。")
    lines.append("")
    lines.append("const WORLD_PHOTOS = {")
    for country in countries:
        code = country["code"]
        files = by_code.get(code, [])
        if not files:
            lines.append(f"  {code}: [],")
            continue
        lines.append(f"  {code}: [")
        for name, caption in files:
            lines.append(
                "    { src: %s, caption: %s },"
                % (json.dumps(f"world-photos/{name}", ensure_ascii=False), json.dumps(caption, ensure_ascii=False))
            )
        lines.append("  ],")
    lines.append("};")
    lines.append("")

    PHOTOS_JS.write_text("\n".join(lines), encoding="utf-8")

    today = date.today()
    last_updated = f"{today.year}年{today.month}月{today.day}日"
    LAST_UPDATED_JS.write_text(
        "// このファイルは scripts/generate_world_photos.py によって自動生成されます。\n"
        f'const WORLD_LAST_UPDATED = "{last_updated}";\n',
        encoding="utf-8",
    )

    total = sum(len(v) for v in by_code.values())
    visited = sum(1 for v in by_code.values() if v)
    print(f"js/world-photos.js を更新しました（写真 {total} 枚 / 訪問済み {visited} 国）")


if __name__ == "__main__":
    if not PHOTOS_DIR.exists():
        print("world-photos/ フォルダが見つかりません", file=sys.stderr)
        sys.exit(1)
    main()
