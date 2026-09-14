#!/usr/bin/env python3
"""
photos/ と world-photos/ の画像から、プライバシーに関わるメタデータ
（撮影機種・GPS位置情報などのEXIF、ICCカラープロファイル）を除去し、
1MBを超えるファイルは1MB以下になるまで縮小する。

写真を反映する.command から自動的に呼び出される
（generate_photos.py / generate_world_photos.py より先に実行）。

既にメタデータが無く1MB以下のファイルはスキップするので、
同じ写真に対して複数回実行しても画質が劣化し続けることはない。

事前に Pillow のインストールが必要:
  pip3 install Pillow
"""

import io
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print(
        "エラー: Pillow がインストールされていません。次を実行してください: pip3 install Pillow",
        file=sys.stderr,
    )
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
IMAGE_EXTS = {".jpg", ".jpeg"}
LIMIT_BYTES = 1_000_000
MIN_QUALITY = 40
MIN_DIMENSION = 900


def encode(img, quality):
    buf = io.BytesIO()
    img.convert("RGB").save(buf, format="JPEG", quality=quality, optimize=True)
    return buf.getvalue()


def shrink_to_limit(img):
    quality = 92
    scale = 1.0
    while True:
        if scale < 1.0:
            w, h = img.size
            candidate = img.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
        else:
            candidate = img
        data = encode(candidate, quality)
        if len(data) <= LIMIT_BYTES:
            return data
        if quality > MIN_QUALITY:
            quality -= 5
        elif min(candidate.size) > MIN_DIMENSION:
            scale *= 0.85
            quality = 80
        else:
            return data  # これ以上は縮小しない（上限は超えるが妥当な下限とみなす）


def needs_processing(path):
    if path.stat().st_size > LIMIT_BYTES:
        return True
    img = Image.open(path)
    return len(img.getexif()) > 0 or "icc_profile" in img.info


def process_file(path):
    img = Image.open(path)
    img = ImageOps.exif_transpose(img)  # 向き情報を画素に焼き込んでからメタデータを捨てる
    if path.stat().st_size > LIMIT_BYTES:
        data = shrink_to_limit(img)
    else:
        data = encode(img, 95)
    path.write_bytes(data)


def process_dir(directory):
    directory = Path(directory)
    if not directory.exists():
        return 0
    processed = 0
    for f in sorted(directory.iterdir()):
        if not f.is_file() or f.suffix.lower() not in IMAGE_EXTS:
            continue
        if not needs_processing(f):
            continue
        before = f.stat().st_size
        process_file(f)
        after = f.stat().st_size
        print(f"  {f.name}: {before:,} -> {after:,} bytes")
        processed += 1
    return processed


def main():
    targets = sys.argv[1:] if len(sys.argv) > 1 else [ROOT / "photos", ROOT / "world-photos"]
    total = 0
    for d in targets:
        print(f"[{Path(d).name}] メタデータ除去・サイズ縮小をチェックしています...")
        n = process_dir(d)
        print("  対象なし" if n == 0 else f"  {n} 件処理しました")
        total += n
    print(f"\n合計 {total} 件のファイルを処理しました。")


if __name__ == "__main__":
    main()
