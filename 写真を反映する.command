#!/bin/bash
cd "$(dirname "$0")"

echo "写真のメタデータ除去・サイズ縮小をチェックしています..."
echo ""
python3 scripts/process_photos.py
echo ""

echo "[日本] 写真をチェックしています..."
echo ""
python3 scripts/generate_photos.py
echo ""

echo "[世界] 写真をチェックしています..."
echo ""
python3 scripts/generate_world_photos.py
echo ""

read -n 1 -s -r -p "何かキーを押すとこのウィンドウを閉じます..."
echo ""
