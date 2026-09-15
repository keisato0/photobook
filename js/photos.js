// 都道府県ごとの写真マニフェスト。
// このファイルは scripts/generate_photos.py によって自動生成されます。手動で編集しないでください。
// 写真を追加/削除したら python3 scripts/generate_photos.py を再実行してください。
// キャプションはファイル名（都道府県名のあとの部分）から自動生成されます。
// 文言を変更したい場合は js/captions.js で上書きしてください。

const PHOTOS = {
  hokkaido: [],
  aomori: [],
  iwate: [],
  miyagi: [],
  akita: [],
  yamagata: [],
  fukushima: [
    { src: "photos/福島、南相馬、2018年3月.jpg", caption: "南相馬、2018年3月" },
  ],
  ibaraki: [],
  tochigi: [],
  gunma: [],
  saitama: [],
  chiba: [],
  tokyo: [
    { src: "photos/東京、赤羽、2019年3月.jpg", caption: "赤羽、2019年3月" },
  ],
  kanagawa: [],
  niigata: [
    { src: "photos/新潟、高田市街、2019年12月.jpg", caption: "高田市街、2019年12月" },
  ],
  toyama: [],
  ishikawa: [
    { src: "photos/石川、兼六園、2018年9月.jpg", caption: "兼六園、2018年9月" },
    { src: "photos/石川、金沢、2018年9月.jpg", caption: "金沢、2018年9月" },
  ],
  fukui: [
    { src: "photos/福井、高浜、2017年12月.jpg", caption: "高浜、2017年12月" },
  ],
  yamanashi: [],
  nagano: [
    { src: "photos/長野、長野駅、2019年12月.jpg", caption: "長野駅、2019年12月" },
  ],
  gifu: [],
  shizuoka: [],
  aichi: [],
  mie: [
    { src: "photos/三重、伊勢、2018年3月.jpg", caption: "伊勢、2018年3月" },
    { src: "photos/三重、熊野灘、2018年8月.jpg", caption: "熊野灘、2018年8月" },
    { src: "photos/三重、瀞峡、2018年11月.jpg", caption: "瀞峡、2018年11月" },
  ],
  shiga: [
    { src: "photos/滋賀、長等公園下、2018年11月.jpg", caption: "長等公園下、2018年11月" },
    { src: "photos/滋賀、奥琵琶湖、2019年10月.jpg", caption: "奥琵琶湖、2019年10月" },
  ],
  kyoto: [
    { src: "photos/京都、地蔵、2016年4月.jpg", caption: "地蔵、2016年4月" },
    { src: "photos/京都、哲学の道、2016年11月.jpg", caption: "哲学の道、2016年11月" },
    { src: "photos/京都、新京極の猿回し、2017年2月.jpg", caption: "新京極の猿回し、2017年2月" },
    { src: "photos/京都、先斗町、2019年4月.jpg", caption: "先斗町、2019年4月" },
    { src: "photos/京都、鴨川、2020年4月.jpg", caption: "鴨川、2020年4月" },
    { src: "photos/京都、上京区某所、2020年5月.jpg", caption: "上京区某所、2020年5月" },
    { src: "photos/京都、賀茂川、2020年11月.jpg", caption: "賀茂川、2020年11月" },
    { src: "photos/京都、上御霊神社、2021年1月.jpg", caption: "上御霊神社、2021年1月" },
    { src: "photos/京都、京都駅前、2021年2月.jpg", caption: "京都駅前、2021年2月" },
    { src: "photos/京都、賀茂川、2021年4月.jpg", caption: "賀茂川、2021年4月" },
  ],
  osaka: [
    { src: "photos/大阪、万博記念公園、2016年10月.jpg", caption: "万博記念公園、2016年10月" },
    { src: "photos/大阪、阿倍野、2016年10月.jpg", caption: "阿倍野、2016年10月" },
    { src: "photos/大阪、汐見橋、2019年10月.jpg", caption: "汐見橋、2019年10月" },
  ],
  hyogo: [
    { src: "photos/兵庫、姫路城、2017年8月.jpg", caption: "姫路城、2017年8月" },
    { src: "photos/兵庫、高砂、2018年8月.jpg", caption: "高砂、2018年8月" },
  ],
  nara: [],
  wakayama: [
    { src: "photos/和歌山、湯の峰温泉、2018年2月.jpg", caption: "湯の峰温泉、2018年2月" },
    { src: "photos/和歌山、高野山、2018年2月.jpg", caption: "高野山、2018年2月" },
  ],
  tottori: [],
  shimane: [],
  okayama: [],
  hiroshima: [
    { src: "photos/広島、尾道、2018年3月.jpg", caption: "尾道、2018年3月" },
  ],
  yamaguchi: [],
  tokushima: [],
  kagawa: [
    { src: "photos/香川、琴平、2017年12月.jpg", caption: "琴平、2017年12月" },
  ],
  ehime: [],
  kochi: [],
  fukuoka: [
    { src: "photos/福岡、門司港駅、2018年3月.jpg", caption: "門司港駅、2018年3月" },
    { src: "photos/福岡、中洲、2026年8月.jpg", caption: "中洲、2026年8月" },
  ],
  saga: [
    { src: "photos/佐賀、吉野ケ里、2018年3月.jpg", caption: "吉野ケ里、2018年3月" },
  ],
  nagasaki: [
    { src: "photos/長崎、鍋冠山からの眺望、2026年9月.jpg", caption: "鍋冠山からの眺望、2026年9月" },
  ],
  kumamoto: [],
  oita: [
    { src: "photos/大分、佐賀関、2018年8月.jpg", caption: "佐賀関、2018年8月" },
  ],
  miyazaki: [],
  kagoshima: [],
  okinawa: [],
};
