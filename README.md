# 旅の記録

世界地図（トップページ）→ 各国の写真ギャラリー、というシンプルな静的サイトです。
日本だけは特別扱いで、世界地図で日本をクリックすると都道府県マップのページに飛び、
そこから各都道府県の写真ギャラリーに進めます。
ビルド不要。ブラウザで `index.html` を開くだけで動きます。

## ページ構成

```
index.html    世界地図（トップページ）。国をクリックすると gallery.html?country=<コード> へ。
              ただし日本だけは japan.html（都道府県マップ）へ飛ぶ。
japan.html    日本の都道府県マップ。都道府県をクリックすると gallery.html?pref=<slug> へ。
gallery.html  国／都道府県共通の写真一覧ページ（1つのテンプレートを共用）。
```

## ファイル構成

```
css/style.css                 デザイン（世界地図・日本地図・ギャラリー共通）

js/countries.js               世界の国データ（コード・日本語名・英語名）
js/world-photos.js            国ごとの写真マニフェスト（★自動生成、手動で編集しない）
js/world-captions.js          国の写真キャプションの上書き用ファイル（省略可、手動で編集する）
js/world-last-updated.js      世界側の最終更新日（★自動生成、手動で編集しない）
js/world-map.js               世界地図のマウスオーバー・クリック動作

js/prefectures.js             47都道府県のマスターデータ（コード・名前・地方区分）
js/photos.js                  都道府県ごとの写真マニフェスト（★自動生成、手動で編集しない）
js/captions.js                都道府県の写真キャプションの上書き用ファイル（省略可、手動で編集する）
js/last-updated.js            日本側の最終更新日（★自動生成、手動で編集しない）
js/map.js                     日本地図のマウスオーバー・クリック動作

js/gallery.js                 ギャラリー表示・拡大表示（ライトボックス）の動作（国・都道府県共通）

photos/                       日本の写真ファイルの置き場所（フォルダ分け不要、フラットに置く）
world-photos/                 世界（日本以外）の写真ファイルの置き場所（同上）

scripts/process_photos.py          photos/・world-photos/ の画像からメタデータを除去し、1MB超を縮小する
scripts/generate_photos.py         photos/ から js/photos.js を自動生成
scripts/generate_world_photos.py   world-photos/ から js/world-photos.js を自動生成
scripts/_common.py                 generate_photos.py / generate_world_photos.py が共有するロジック（直接実行しない）

写真を反映する.command        上記のスクリプトをまとめてダブルクリックで実行するファイル

assets/                       地図データの元ファイル（編集不要）
```

## 写真の追加方法

### 日本の写真

1. `photos/` フォルダに、画像ファイルをそのまま置く（都道府県ごとのフォルダ分けは不要）。
   ファイル名は `<都道府県名><場所><撮影時期>.拡張子` にする。
   都道府県名のあとの区切り文字は「、」「・」「,」「-」「_」「 」など何でもよい。

   ```
   photos/福岡、中洲、2026年8月.jpg
   photos/長崎・鍋冠山からの眺望、2026年9月.jpg
   ```

2. キャプションの文言を変えたい場合は `js/captions.js` にファイル名をキーにして書く（省略可）。

### 世界（日本以外）の写真

1. `world-photos/` フォルダに、画像ファイルをそのまま置く。
   ファイル名は `<国名><場所><撮影時期>.拡張子` にする（国名は日本語、`js/countries.js` の kanji と一致させる）。

   ```
   world-photos/エチオピア、ラリベラ、2019年3月.jpg
   world-photos/フランス、モンサンミッシェル、2018年7月.jpg
   ```

2. キャプションの文言を変えたい場合は `js/world-captions.js` にファイル名をキーにして書く（省略可）。

### 反映する

写真を置いたら、以下のどちらかで反映する。

- `写真を反映する.command` をダブルクリックする（ターミナルが開いて処理される）
- またはターミナルで以下を実行する

  ```bash
  python3 scripts/process_photos.py
  python3 scripts/generate_photos.py
  python3 scripts/generate_world_photos.py
  ```

このとき自動的に以下が行われる。

1. **メタデータ除去・サイズ縮小**（`process_photos.py`）: 新しく置いた画像から、撮影機種やGPS位置情報などのEXIF、ICCカラープロファイルを除去する。1MBを超えるファイルは、画質や解像度を落として1MB以下になるまで縮小する。既に処理済み（メタデータなし・1MB以下）のファイルはスキップするので、何度実行しても画質が劣化し続けることはない。
   - **事前に一度だけ `pip3 install Pillow` が必要**（画像処理に使うPythonライブラリ）。
2. **キャプション・並び順の反映**（`generate_photos.py` / `generate_world_photos.py`）: 国名／都道府県名のあとの部分（例: `ラリベラ、2019年3月`）が、そのままギャラリーページのキャプションとして表示される。各ページ内の並び順は、キャプション末尾の撮影時期を読み取って早い順（昇順）になる。

- 写真が1枚でもある国・都道府県は、地図上で色が変わり「写真あり」として表示される。
- 写真が0枚の国・都道府県はクリックしても「まだ写真はありません」というページが表示される。
- ファイル名の先頭に国名／都道府県名が見つからない場合はスキップされ、実行時に警告が出る。

## 世界地図で対応している国について

世界地図（`assets/world-map-source.svg`）は約180の国・地域を収録した簡易的な地図です。
ごく一部の小さな国・島嶼国（南太平洋やカリブ海の小国など）は地図上に個別の領域がなく、
クリックできません。該当する国の写真を載せたい場合は別途相談してください。

南米・アフリカも含めて、収録されている国は同じ仕組みで動きます（訪問の有無に関わらず表示上の特別扱いはありません）。

## 地図データについて

- 日本地図: [Geolonia の日本都道府県SVGマップ](https://github.com/geolonia/japanese-prefectures) を使用（`japan.html` 内に直接埋め込み済み）。`assets/japan-map-source.svg` は元データの控え。
- 世界地図: [flekschas/simple-world-map](https://github.com/flekschas/simple-world-map)（作者: Al MacDonald、編集: Fritz Lekschas、CC BY-SA 3.0）を使用（`index.html` 内に直接埋め込み済み）。`assets/world-map-source.svg` は元データの控え。
- どちらも通常は編集不要。
