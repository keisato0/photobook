// 47都道府県のマスターデータ（コード・スラッグ・名称・地方区分）
const PREFECTURES = [
  {
    "code": 1,
    "slug": "hokkaido",
    "kanji": "北海道",
    "romaji": "Hokkaido",
    "region": "北海道"
  },
  {
    "code": 2,
    "slug": "aomori",
    "kanji": "青森",
    "romaji": "Aomori",
    "region": "東北"
  },
  {
    "code": 3,
    "slug": "iwate",
    "kanji": "岩手",
    "romaji": "Iwate",
    "region": "東北"
  },
  {
    "code": 4,
    "slug": "miyagi",
    "kanji": "宮城",
    "romaji": "Miyagi",
    "region": "東北"
  },
  {
    "code": 5,
    "slug": "akita",
    "kanji": "秋田",
    "romaji": "Akita",
    "region": "東北"
  },
  {
    "code": 6,
    "slug": "yamagata",
    "kanji": "山形",
    "romaji": "Yamagata",
    "region": "東北"
  },
  {
    "code": 7,
    "slug": "fukushima",
    "kanji": "福島",
    "romaji": "Fukushima",
    "region": "東北"
  },
  {
    "code": 8,
    "slug": "ibaraki",
    "kanji": "茨城",
    "romaji": "Ibaraki",
    "region": "関東"
  },
  {
    "code": 9,
    "slug": "tochigi",
    "kanji": "栃木",
    "romaji": "Tochigi",
    "region": "関東"
  },
  {
    "code": 10,
    "slug": "gunma",
    "kanji": "群馬",
    "romaji": "Gunma",
    "region": "関東"
  },
  {
    "code": 11,
    "slug": "saitama",
    "kanji": "埼玉",
    "romaji": "Saitama",
    "region": "関東"
  },
  {
    "code": 12,
    "slug": "chiba",
    "kanji": "千葉",
    "romaji": "Chiba",
    "region": "関東"
  },
  {
    "code": 13,
    "slug": "tokyo",
    "kanji": "東京",
    "romaji": "Tokyo",
    "region": "関東"
  },
  {
    "code": 14,
    "slug": "kanagawa",
    "kanji": "神奈川",
    "romaji": "Kanagawa",
    "region": "関東"
  },
  {
    "code": 15,
    "slug": "niigata",
    "kanji": "新潟",
    "romaji": "Niigata",
    "region": "中部"
  },
  {
    "code": 16,
    "slug": "toyama",
    "kanji": "富山",
    "romaji": "Toyama",
    "region": "中部"
  },
  {
    "code": 17,
    "slug": "ishikawa",
    "kanji": "石川",
    "romaji": "Ishikawa",
    "region": "中部"
  },
  {
    "code": 18,
    "slug": "fukui",
    "kanji": "福井",
    "romaji": "Fukui",
    "region": "中部"
  },
  {
    "code": 19,
    "slug": "yamanashi",
    "kanji": "山梨",
    "romaji": "Yamanashi",
    "region": "中部"
  },
  {
    "code": 20,
    "slug": "nagano",
    "kanji": "長野",
    "romaji": "Nagano",
    "region": "中部"
  },
  {
    "code": 21,
    "slug": "gifu",
    "kanji": "岐阜",
    "romaji": "Gifu",
    "region": "中部"
  },
  {
    "code": 22,
    "slug": "shizuoka",
    "kanji": "静岡",
    "romaji": "Shizuoka",
    "region": "中部"
  },
  {
    "code": 23,
    "slug": "aichi",
    "kanji": "愛知",
    "romaji": "Aichi",
    "region": "中部"
  },
  {
    "code": 24,
    "slug": "mie",
    "kanji": "三重",
    "romaji": "Mie",
    "region": "近畿"
  },
  {
    "code": 25,
    "slug": "shiga",
    "kanji": "滋賀",
    "romaji": "Shiga",
    "region": "近畿"
  },
  {
    "code": 26,
    "slug": "kyoto",
    "kanji": "京都",
    "romaji": "Kyoto",
    "region": "近畿"
  },
  {
    "code": 27,
    "slug": "osaka",
    "kanji": "大阪",
    "romaji": "Osaka",
    "region": "近畿"
  },
  {
    "code": 28,
    "slug": "hyogo",
    "kanji": "兵庫",
    "romaji": "Hyogo",
    "region": "近畿"
  },
  {
    "code": 29,
    "slug": "nara",
    "kanji": "奈良",
    "romaji": "Nara",
    "region": "近畿"
  },
  {
    "code": 30,
    "slug": "wakayama",
    "kanji": "和歌山",
    "romaji": "Wakayama",
    "region": "近畿"
  },
  {
    "code": 31,
    "slug": "tottori",
    "kanji": "鳥取",
    "romaji": "Tottori",
    "region": "中国"
  },
  {
    "code": 32,
    "slug": "shimane",
    "kanji": "島根",
    "romaji": "Shimane",
    "region": "中国"
  },
  {
    "code": 33,
    "slug": "okayama",
    "kanji": "岡山",
    "romaji": "Okayama",
    "region": "中国"
  },
  {
    "code": 34,
    "slug": "hiroshima",
    "kanji": "広島",
    "romaji": "Hiroshima",
    "region": "中国"
  },
  {
    "code": 35,
    "slug": "yamaguchi",
    "kanji": "山口",
    "romaji": "Yamaguchi",
    "region": "中国"
  },
  {
    "code": 36,
    "slug": "tokushima",
    "kanji": "徳島",
    "romaji": "Tokushima",
    "region": "四国"
  },
  {
    "code": 37,
    "slug": "kagawa",
    "kanji": "香川",
    "romaji": "Kagawa",
    "region": "四国"
  },
  {
    "code": 38,
    "slug": "ehime",
    "kanji": "愛媛",
    "romaji": "Ehime",
    "region": "四国"
  },
  {
    "code": 39,
    "slug": "kochi",
    "kanji": "高知",
    "romaji": "Kochi",
    "region": "四国"
  },
  {
    "code": 40,
    "slug": "fukuoka",
    "kanji": "福岡",
    "romaji": "Fukuoka",
    "region": "九州・沖縄"
  },
  {
    "code": 41,
    "slug": "saga",
    "kanji": "佐賀",
    "romaji": "Saga",
    "region": "九州・沖縄"
  },
  {
    "code": 42,
    "slug": "nagasaki",
    "kanji": "長崎",
    "romaji": "Nagasaki",
    "region": "九州・沖縄"
  },
  {
    "code": 43,
    "slug": "kumamoto",
    "kanji": "熊本",
    "romaji": "kumamoto",
    "region": "九州・沖縄"
  },
  {
    "code": 44,
    "slug": "oita",
    "kanji": "大分",
    "romaji": "Oita",
    "region": "九州・沖縄"
  },
  {
    "code": 45,
    "slug": "miyazaki",
    "kanji": "宮崎",
    "romaji": "Miyazaki",
    "region": "九州・沖縄"
  },
  {
    "code": 46,
    "slug": "kagoshima",
    "kanji": "鹿児島",
    "romaji": "Kagoshima",
    "region": "九州・沖縄"
  },
  {
    "code": 47,
    "slug": "okinawa",
    "kanji": "沖縄",
    "romaji": "Okinawa",
    "region": "九州・沖縄"
  }
];
