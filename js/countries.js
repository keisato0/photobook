// 世界の国データ（コード・日本語名・英語名）。国コードは assets/world-map-source.svg 内の id と一致させる。
const COUNTRIES = [
  {
    "code": "_somaliland",
    "kanji": "ソマリランド",
    "english": "Somaliland"
  },
  {
    "code": "ae",
    "kanji": "アラブ首長国連邦",
    "english": "United Arab Emirates"
  },
  {
    "code": "af",
    "kanji": "アフガニスタン",
    "english": "Afghanistan"
  },
  {
    "code": "al",
    "kanji": "アルバニア",
    "english": "Albania"
  },
  {
    "code": "am",
    "kanji": "アルメニア",
    "english": "Armenia"
  },
  {
    "code": "ao",
    "kanji": "アンゴラ",
    "english": "Angola"
  },
  {
    "code": "ar",
    "kanji": "アルゼンチン",
    "english": "Argentina"
  },
  {
    "code": "at",
    "kanji": "オーストリア",
    "english": "Austria"
  },
  {
    "code": "au",
    "kanji": "オーストラリア",
    "english": "Australia"
  },
  {
    "code": "az",
    "kanji": "アゼルバイジャン",
    "english": "Azerbaijan"
  },
  {
    "code": "ba",
    "kanji": "ボスニア・ヘルツェゴビナ",
    "english": "Bosnia & Herzegovina"
  },
  {
    "code": "bd",
    "kanji": "バングラデシュ",
    "english": "Bangladesh"
  },
  {
    "code": "be",
    "kanji": "ベルギー",
    "english": "Belgium"
  },
  {
    "code": "bf",
    "kanji": "ブルキナファソ",
    "english": "Burkina Faso"
  },
  {
    "code": "bg",
    "kanji": "ブルガリア",
    "english": "Bulgaria"
  },
  {
    "code": "bi",
    "kanji": "ブルンジ",
    "english": "Burundi"
  },
  {
    "code": "bj",
    "kanji": "ベナン",
    "english": "Benin"
  },
  {
    "code": "bn",
    "kanji": "ブルネイ",
    "english": "Brunei"
  },
  {
    "code": "bo",
    "kanji": "ボリビア",
    "english": "Bolivia"
  },
  {
    "code": "br",
    "kanji": "ブラジル",
    "english": "Brazil"
  },
  {
    "code": "bs",
    "kanji": "バハマ",
    "english": "Bahamas"
  },
  {
    "code": "bt",
    "kanji": "ブータン",
    "english": "Bhutan"
  },
  {
    "code": "bw",
    "kanji": "ボツワナ",
    "english": "Botswana"
  },
  {
    "code": "by",
    "kanji": "ベラルーシ",
    "english": "Belarus"
  },
  {
    "code": "bz",
    "kanji": "ベリーズ",
    "english": "Belize"
  },
  {
    "code": "ca",
    "kanji": "カナダ",
    "english": "Canada"
  },
  {
    "code": "cd",
    "kanji": "コンゴ民主共和国(キンシャサ)",
    "english": "Congo - Kinshasa"
  },
  {
    "code": "cf",
    "kanji": "中央アフリカ共和国",
    "english": "Central African Republic"
  },
  {
    "code": "cg",
    "kanji": "コンゴ共和国(ブラザビル)",
    "english": "Congo - Brazzaville"
  },
  {
    "code": "ch",
    "kanji": "スイス",
    "english": "Switzerland"
  },
  {
    "code": "ci",
    "kanji": "コートジボワール",
    "english": "Côte d’Ivoire"
  },
  {
    "code": "cl",
    "kanji": "チリ",
    "english": "Chile"
  },
  {
    "code": "cm",
    "kanji": "カメルーン",
    "english": "Cameroon"
  },
  {
    "code": "cn",
    "kanji": "中国",
    "english": "China"
  },
  {
    "code": "co",
    "kanji": "コロンビア",
    "english": "Colombia"
  },
  {
    "code": "cr",
    "kanji": "コスタリカ",
    "english": "Costa Rica"
  },
  {
    "code": "cu",
    "kanji": "キューバ",
    "english": "Cuba"
  },
  {
    "code": "cv",
    "kanji": "カーボベルデ",
    "english": "Cape Verde"
  },
  {
    "code": "cy",
    "kanji": "キプロス",
    "english": "Cyprus"
  },
  {
    "code": "cz",
    "kanji": "チェコ",
    "english": "Czechia"
  },
  {
    "code": "de",
    "kanji": "ドイツ",
    "english": "Germany"
  },
  {
    "code": "dj",
    "kanji": "ジブチ",
    "english": "Djibouti"
  },
  {
    "code": "dk",
    "kanji": "デンマーク",
    "english": "Denmark"
  },
  {
    "code": "dm",
    "kanji": "ドミニカ国",
    "english": "Dominica"
  },
  {
    "code": "do",
    "kanji": "ドミニカ共和国",
    "english": "Dominican Republic"
  },
  {
    "code": "dz",
    "kanji": "アルジェリア",
    "english": "Algeria"
  },
  {
    "code": "ec",
    "kanji": "エクアドル",
    "english": "Ecuador"
  },
  {
    "code": "ee",
    "kanji": "エストニア",
    "english": "Estonia"
  },
  {
    "code": "eg",
    "kanji": "エジプト",
    "english": "Egypt"
  },
  {
    "code": "er",
    "kanji": "エリトリア",
    "english": "Eritrea"
  },
  {
    "code": "es",
    "kanji": "スペイン",
    "english": "Spain"
  },
  {
    "code": "et",
    "kanji": "エチオピア",
    "english": "Ethiopia"
  },
  {
    "code": "fi",
    "kanji": "フィンランド",
    "english": "Finland"
  },
  {
    "code": "fk",
    "kanji": "フォークランド諸島",
    "english": "Falkland Islands"
  },
  {
    "code": "fr",
    "kanji": "フランス",
    "english": "France"
  },
  {
    "code": "ga",
    "kanji": "ガボン",
    "english": "Gabon"
  },
  {
    "code": "gb",
    "kanji": "イギリス",
    "english": "United Kingdom"
  },
  {
    "code": "ge",
    "kanji": "ジョージア",
    "english": "Georgia"
  },
  {
    "code": "gh",
    "kanji": "ガーナ",
    "english": "Ghana"
  },
  {
    "code": "gl",
    "kanji": "グリーンランド",
    "english": "Greenland"
  },
  {
    "code": "gm",
    "kanji": "ガンビア",
    "english": "Gambia"
  },
  {
    "code": "gn",
    "kanji": "ギニア",
    "english": "Guinea"
  },
  {
    "code": "gq",
    "kanji": "赤道ギニア",
    "english": "Equatorial Guinea"
  },
  {
    "code": "gr",
    "kanji": "ギリシャ",
    "english": "Greece"
  },
  {
    "code": "gt",
    "kanji": "グアテマラ",
    "english": "Guatemala"
  },
  {
    "code": "gw",
    "kanji": "ギニアビサウ",
    "english": "Guinea-Bissau"
  },
  {
    "code": "gy",
    "kanji": "ガイアナ",
    "english": "Guyana"
  },
  {
    "code": "hn",
    "kanji": "ホンジュラス",
    "english": "Honduras"
  },
  {
    "code": "hr",
    "kanji": "クロアチア",
    "english": "Croatia"
  },
  {
    "code": "ht",
    "kanji": "ハイチ",
    "english": "Haiti"
  },
  {
    "code": "hu",
    "kanji": "ハンガリー",
    "english": "Hungary"
  },
  {
    "code": "id",
    "kanji": "インドネシア",
    "english": "Indonesia"
  },
  {
    "code": "ie",
    "kanji": "アイルランド",
    "english": "Ireland"
  },
  {
    "code": "il",
    "kanji": "イスラエル",
    "english": "Israel"
  },
  {
    "code": "in",
    "kanji": "インド",
    "english": "India"
  },
  {
    "code": "iq",
    "kanji": "イラク",
    "english": "Iraq"
  },
  {
    "code": "ir",
    "kanji": "イラン",
    "english": "Iran"
  },
  {
    "code": "is",
    "kanji": "アイスランド",
    "english": "Iceland"
  },
  {
    "code": "it",
    "kanji": "イタリア",
    "english": "Italy"
  },
  {
    "code": "jm",
    "kanji": "ジャマイカ",
    "english": "Jamaica"
  },
  {
    "code": "jo",
    "kanji": "ヨルダン",
    "english": "Jordan"
  },
  {
    "code": "jp",
    "kanji": "日本",
    "english": "Japan"
  },
  {
    "code": "ke",
    "kanji": "ケニア",
    "english": "Kenya"
  },
  {
    "code": "kg",
    "kanji": "キルギス",
    "english": "Kyrgyzstan"
  },
  {
    "code": "kh",
    "kanji": "カンボジア",
    "english": "Cambodia"
  },
  {
    "code": "km",
    "kanji": "コモロ",
    "english": "Comoros"
  },
  {
    "code": "kp",
    "kanji": "北朝鮮",
    "english": "North Korea"
  },
  {
    "code": "kr",
    "kanji": "韓国",
    "english": "South Korea"
  },
  {
    "code": "kw",
    "kanji": "クウェート",
    "english": "Kuwait"
  },
  {
    "code": "kz",
    "kanji": "カザフスタン",
    "english": "Kazakhstan"
  },
  {
    "code": "la",
    "kanji": "ラオス",
    "english": "Laos"
  },
  {
    "code": "lb",
    "kanji": "レバノン",
    "english": "Lebanon"
  },
  {
    "code": "lc",
    "kanji": "セントルシア",
    "english": "St. Lucia"
  },
  {
    "code": "lk",
    "kanji": "スリランカ",
    "english": "Sri Lanka"
  },
  {
    "code": "lr",
    "kanji": "リベリア",
    "english": "Liberia"
  },
  {
    "code": "ls",
    "kanji": "レソト",
    "english": "Lesotho"
  },
  {
    "code": "lt",
    "kanji": "リトアニア",
    "english": "Lithuania"
  },
  {
    "code": "lu",
    "kanji": "ルクセンブルク",
    "english": "Luxembourg"
  },
  {
    "code": "lv",
    "kanji": "ラトビア",
    "english": "Latvia"
  },
  {
    "code": "ly",
    "kanji": "リビア",
    "english": "Libya"
  },
  {
    "code": "ma",
    "kanji": "モロッコ",
    "english": "Morocco"
  },
  {
    "code": "md",
    "kanji": "モルドバ",
    "english": "Moldova"
  },
  {
    "code": "me",
    "kanji": "モンテネグロ",
    "english": "Montenegro"
  },
  {
    "code": "mg",
    "kanji": "マダガスカル",
    "english": "Madagascar"
  },
  {
    "code": "mk",
    "kanji": "北マケドニア",
    "english": "North Macedonia"
  },
  {
    "code": "ml",
    "kanji": "マリ",
    "english": "Mali"
  },
  {
    "code": "mm",
    "kanji": "ミャンマー (ビルマ)",
    "english": "Myanmar (Burma)"
  },
  {
    "code": "mn",
    "kanji": "モンゴル",
    "english": "Mongolia"
  },
  {
    "code": "mr",
    "kanji": "モーリタニア",
    "english": "Mauritania"
  },
  {
    "code": "mt",
    "kanji": "マルタ",
    "english": "Malta"
  },
  {
    "code": "mu",
    "kanji": "モーリシャス",
    "english": "Mauritius"
  },
  {
    "code": "mv",
    "kanji": "モルディブ",
    "english": "Maldives"
  },
  {
    "code": "mw",
    "kanji": "マラウイ",
    "english": "Malawi"
  },
  {
    "code": "mx",
    "kanji": "メキシコ",
    "english": "Mexico"
  },
  {
    "code": "my",
    "kanji": "マレーシア",
    "english": "Malaysia"
  },
  {
    "code": "mz",
    "kanji": "モザンビーク",
    "english": "Mozambique"
  },
  {
    "code": "na",
    "kanji": "ナミビア",
    "english": "Namibia"
  },
  {
    "code": "nc",
    "kanji": "ニューカレドニア",
    "english": "New Caledonia"
  },
  {
    "code": "ne",
    "kanji": "ニジェール",
    "english": "Niger"
  },
  {
    "code": "ng",
    "kanji": "ナイジェリア",
    "english": "Nigeria"
  },
  {
    "code": "ni",
    "kanji": "ニカラグア",
    "english": "Nicaragua"
  },
  {
    "code": "nl",
    "kanji": "オランダ",
    "english": "Netherlands"
  },
  {
    "code": "no",
    "kanji": "ノルウェー",
    "english": "Norway"
  },
  {
    "code": "np",
    "kanji": "ネパール",
    "english": "Nepal"
  },
  {
    "code": "nz",
    "kanji": "ニュージーランド",
    "english": "New Zealand"
  },
  {
    "code": "om",
    "kanji": "オマーン",
    "english": "Oman"
  },
  {
    "code": "pa",
    "kanji": "パナマ",
    "english": "Panama"
  },
  {
    "code": "pe",
    "kanji": "ペルー",
    "english": "Peru"
  },
  {
    "code": "pg",
    "kanji": "パプアニューギニア",
    "english": "Papua New Guinea"
  },
  {
    "code": "ph",
    "kanji": "フィリピン",
    "english": "Philippines"
  },
  {
    "code": "pk",
    "kanji": "パキスタン",
    "english": "Pakistan"
  },
  {
    "code": "pl",
    "kanji": "ポーランド",
    "english": "Poland"
  },
  {
    "code": "pr",
    "kanji": "プエルトリコ",
    "english": "Puerto Rico"
  },
  {
    "code": "pt",
    "kanji": "ポルトガル",
    "english": "Portugal"
  },
  {
    "code": "py",
    "kanji": "パラグアイ",
    "english": "Paraguay"
  },
  {
    "code": "qa",
    "kanji": "カタール",
    "english": "Qatar"
  },
  {
    "code": "ro",
    "kanji": "ルーマニア",
    "english": "Romania"
  },
  {
    "code": "rs",
    "kanji": "セルビア",
    "english": "Serbia"
  },
  {
    "code": "ru",
    "kanji": "ロシア",
    "english": "Russia"
  },
  {
    "code": "rw",
    "kanji": "ルワンダ",
    "english": "Rwanda"
  },
  {
    "code": "sa",
    "kanji": "サウジアラビア",
    "english": "Saudi Arabia"
  },
  {
    "code": "sb",
    "kanji": "ソロモン諸島",
    "english": "Solomon Islands"
  },
  {
    "code": "sc",
    "kanji": "セーシェル",
    "english": "Seychelles"
  },
  {
    "code": "sd",
    "kanji": "スーダン",
    "english": "Sudan"
  },
  {
    "code": "se",
    "kanji": "スウェーデン",
    "english": "Sweden"
  },
  {
    "code": "sg",
    "kanji": "シンガポール",
    "english": "Singapore"
  },
  {
    "code": "si",
    "kanji": "スロベニア",
    "english": "Slovenia"
  },
  {
    "code": "sk",
    "kanji": "スロバキア",
    "english": "Slovakia"
  },
  {
    "code": "sl",
    "kanji": "シエラレオネ",
    "english": "Sierra Leone"
  },
  {
    "code": "sn",
    "kanji": "セネガル",
    "english": "Senegal"
  },
  {
    "code": "so",
    "kanji": "ソマリア",
    "english": "Somalia"
  },
  {
    "code": "sr",
    "kanji": "スリナム",
    "english": "Suriname"
  },
  {
    "code": "ss",
    "kanji": "南スーダン",
    "english": "South Sudan"
  },
  {
    "code": "st",
    "kanji": "サントメ・プリンシペ",
    "english": "São Tomé & Príncipe"
  },
  {
    "code": "sv",
    "kanji": "エルサルバドル",
    "english": "El Salvador"
  },
  {
    "code": "sy",
    "kanji": "シリア",
    "english": "Syria"
  },
  {
    "code": "sz",
    "kanji": "エスワティニ",
    "english": "Eswatini"
  },
  {
    "code": "td",
    "kanji": "チャド",
    "english": "Chad"
  },
  {
    "code": "tg",
    "kanji": "トーゴ",
    "english": "Togo"
  },
  {
    "code": "th",
    "kanji": "タイ",
    "english": "Thailand"
  },
  {
    "code": "tj",
    "kanji": "タジキスタン",
    "english": "Tajikistan"
  },
  {
    "code": "tm",
    "kanji": "トルクメニスタン",
    "english": "Turkmenistan"
  },
  {
    "code": "tn",
    "kanji": "チュニジア",
    "english": "Tunisia"
  },
  {
    "code": "tr",
    "kanji": "トルコ",
    "english": "Türkiye"
  },
  {
    "code": "tt",
    "kanji": "トリニダード・トバゴ",
    "english": "Trinidad & Tobago"
  },
  {
    "code": "tw",
    "kanji": "台湾",
    "english": "Taiwan"
  },
  {
    "code": "tz",
    "kanji": "タンザニア",
    "english": "Tanzania"
  },
  {
    "code": "ua",
    "kanji": "ウクライナ",
    "english": "Ukraine"
  },
  {
    "code": "ug",
    "kanji": "ウガンダ",
    "english": "Uganda"
  },
  {
    "code": "us",
    "kanji": "アメリカ合衆国",
    "english": "United States"
  },
  {
    "code": "uy",
    "kanji": "ウルグアイ",
    "english": "Uruguay"
  },
  {
    "code": "uz",
    "kanji": "ウズベキスタン",
    "english": "Uzbekistan"
  },
  {
    "code": "vc",
    "kanji": "セントビンセント及びグレナディーン諸島",
    "english": "St. Vincent & Grenadines"
  },
  {
    "code": "ve",
    "kanji": "ベネズエラ",
    "english": "Venezuela"
  },
  {
    "code": "vn",
    "kanji": "ベトナム",
    "english": "Vietnam"
  },
  {
    "code": "vu",
    "kanji": "バヌアツ",
    "english": "Vanuatu"
  },
  {
    "code": "ye",
    "kanji": "イエメン",
    "english": "Yemen"
  },
  {
    "code": "za",
    "kanji": "南アフリカ",
    "english": "South Africa"
  },
  {
    "code": "zm",
    "kanji": "ザンビア",
    "english": "Zambia"
  },
  {
    "code": "zw",
    "kanji": "ジンバブエ",
    "english": "Zimbabwe"
  }
];
