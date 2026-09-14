#!/usr/bin/env python3
"""
photos/ フォルダの画像から js/photos.js を自動生成するスクリプト。

ファイル名の付け方:
  "<都道府県名><場所><撮影時期>.拡張子"
  都道府県名のあとの区切り文字は「、」「・」「,」「-」「_」「 」など何でもよい。
  場所と撮影時期の部分（区切り文字も含む）が、そのままギャラリーページのキャプションになる。

  例:
    福岡、中洲、2026年8月.jpg        → 福岡県のページに「中洲、2026年8月」と表示
    長崎・鍋冠山からの眺望、2026年9月.jpg → 長崎県のページに「鍋冠山からの眺望、2026年9月」と表示

  各都道府県のページ内での並び順は、キャプション末尾の撮影時期（例: 2026年8月）を
  読み取り、早い順（昇順）に並べる。時期が読み取れないファイルは末尾に置く。

使い方:
  python3 scripts/generate_photos.py

キャプションを自動生成された文言から変更したい場合は js/captions.js を編集する
（ファイル名をキーにした上書き用の辞書。generate_photos.py は自動生成・自動編集しない）。
"""

import json
import sys
from datetime import date
from pathlib import Path

import _common

ROOT = Path(__file__).resolve().parent.parent
PHOTOS_DIR = ROOT / "photos"
PREFECTURES_JS = ROOT / "js" / "prefectures.js"
PHOTOS_JS = ROOT / "js" / "photos.js"
CAPTIONS_JS = ROOT / "js" / "captions.js"
LAST_UPDATED_JS = ROOT / "js" / "last-updated.js"


def main():
    prefectures = _common.load_js_object(PREFECTURES_JS, "PREFECTURES")
    # 都道府県名の取り違えを避けるため、長い名前から先に判定する
    prefectures_by_len = sorted(prefectures, key=lambda p: len(p["kanji"]), reverse=True)

    overrides = {}
    if CAPTIONS_JS.exists():
        overrides = _common.load_js_object(CAPTIONS_JS, "CAPTIONS") or {}

    by_slug = {p["slug"]: [] for p in prefectures}
    unknown = []

    for f in sorted(PHOTOS_DIR.iterdir()):
        if not f.is_file() or f.suffix.lower() not in _common.IMAGE_EXTS:
            continue
        slug, auto_caption = _common.match_name(
            f.stem, prefectures_by_len, "kanji", "slug", suffixes=("県", "府", "都")
        )
        if slug is None:
            unknown.append(f.name)
            continue
        caption = overrides[f.name] if f.name in overrides else auto_caption
        by_slug[slug].append((f.name, caption))

    if unknown:
        print("警告: ファイル名の先頭に都道府県名が見つからず、スキップしました:")
        for name in unknown:
            print(f"  - {name}")

    no_date_total = []
    for slug, files in by_slug.items():
        sorted_files, no_date = _common.sort_by_date(files)
        by_slug[slug] = sorted_files
        no_date_total.extend(no_date)

    if no_date_total:
        print("警告: 撮影時期が読み取れず、末尾に配置しました:")
        for name in no_date_total:
            print(f"  - {name}")

    lines = []
    lines.append("// 都道府県ごとの写真マニフェスト。")
    lines.append("// このファイルは scripts/generate_photos.py によって自動生成されます。手動で編集しないでください。")
    lines.append("// 写真を追加/削除したら python3 scripts/generate_photos.py を再実行してください。")
    lines.append("// キャプションはファイル名（都道府県名のあとの部分）から自動生成されます。")
    lines.append("// 文言を変更したい場合は js/captions.js で上書きしてください。")
    lines.append("")
    lines.append("const PHOTOS = {")
    for pref in prefectures:
        slug = pref["slug"]
        files = by_slug.get(slug, [])
        if not files:
            lines.append(f"  {slug}: [],")
            continue
        lines.append(f"  {slug}: [")
        for name, caption in files:
            lines.append(
                "    { src: %s, caption: %s },"
                % (json.dumps(f"photos/{name}", ensure_ascii=False), json.dumps(caption, ensure_ascii=False))
            )
        lines.append("  ],")
    lines.append("};")
    lines.append("")

    PHOTOS_JS.write_text("\n".join(lines), encoding="utf-8")

    today = date.today()
    last_updated = f"{today.year}年{today.month}月{today.day}日"
    LAST_UPDATED_JS.write_text(
        "// このファイルは scripts/generate_photos.py によって自動生成されます。\n"
        f'const LAST_UPDATED = "{last_updated}";\n',
        encoding="utf-8",
    )

    total = sum(len(v) for v in by_slug.values())
    visited = sum(1 for v in by_slug.values() if v)
    print(f"js/photos.js を更新しました（写真 {total} 枚 / 訪問済み {visited} 都道府県）")


if __name__ == "__main__":
    if not PHOTOS_DIR.exists():
        print("photos/ フォルダが見つかりません", file=sys.stderr)
        sys.exit(1)
    main()
