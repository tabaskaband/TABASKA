// ========================================
// コンサート情報
// ========================================
const concertDate = "2026年◯◯月◯◯日（土）";
const concertTitle = "TABASKA LIVE";
const concertVenue = "○○○○";

// ステージ別 開演時間
const stage1Time = "00:00";
const stage2Time = "00:00";

// ========================================
// 曲一覧
// ========================================
const songs = [
  // ========================================
  // STAGE 1
  // ========================================
  {
    stage: "STAGE 1",
    title: "おジャ魔女カーニバル!!",
    artist: "MAHO堂",
    lyrics: "https://www.uta-net.com/song/14341/"
  },
  {
    stage: "STAGE 1",
    title: "勇気と冒険のメドレー",
    artist: "",
    lyrics: "",
    medley: [
      {
        title: "勇気100%",
        lyrics: "https://www.uta-net.com/song/7263/"
      },
      {
        title: "Super Mario Wind Garden",
        lyrics: ""
      },
      {
        title: "「虹」菅田将暉",
        lyrics: "https://www.uta-net.com/song/293474/"
      },
      {
        title: "『紅蓮華』LiSA",
        lyrics: "https://www.uta-net.com/song/270036/"
      },
      {
        title: "「1・2・3」After the Rain",
        lyrics: "https://www.uta-net.com/song/279388/"
      }
    ]
  },
  {
    stage: "STAGE 1",
    title: "A Whole New World",
    artist: "Disney",
    lyrics: "https://www.uta-net.com/song/76296/"
  },
  {
    stage: "STAGE 1",
    title: "優しい彗星",
    artist: "YOASOBI",
    lyrics: "https://www.uta-net.com/song/296725/"
  },
  {
    stage: "STAGE 1",
    title: "逢いたくていま",
    artist: "MISIA",
    lyrics: "https://www.oricon.co.jp/prof/17265/lyrics/171078/"
  },
  {
    stage: "STAGE 1",
    title: "夢をあきらめないで",
    artist: "岡村孝子",
    lyrics: "https://www.uta-net.com/song/4712/"
  },
  {
    stage: "STAGE 1",
    title: "情熱大陸",
    artist: "葉加瀬太郎",
    lyrics: ""
  },
  {
    stage: "STAGE 1",
    title: "ふるさと",
    artist: "嵐",
    lyrics: "https://www.uta-net.com/song/195976/"
  },
  {
    stage: "STAGE 1",
    title: "昭和歌謡曲メドレー",
    artist: "昭和歌謡",
    lyrics: "",
    medley: [
      { title: "悲しみよこんにちは", lyrics: "" },
      { title: "Stay With Me", lyrics: "" },
      { title: "悲しみがとまらない", lyrics: "" },
      { title: "アメリカン・フィーリング", lyrics: "" }
    ]
  },

  // ========================================
  // STAGE 2
  // ========================================
  {
    stage: "STAGE 2",
    title: "アンパンマンメドレー",
    artist: "アンパンマン",
    lyrics: "",
    medley: [
      { title: "アンパンマンのマーチ", lyrics: "" },
      { title: "勇気りんりん", lyrics: "" },
      { title: "アンパンマンたいそう", lyrics: "" }
    ]
  },
  {
    stage: "STAGE 2",
    title: "パウ・パトロール／ジブリメドレー",
    artist: "パウ・パトロール／ジブリ",
    lyrics: "",
    medley: [
      { title: "パウ・パトロール", lyrics: "" },
      { title: "さんぽ", lyrics: "" },
      { title: "ルージュの伝言", lyrics: "" },
      { title: "めぐる季節", lyrics: "" },
      { title: "となりのトトロ", lyrics: "" }
    ]
  },
  {
    stage: "STAGE 2",
    title: "もののけ姫",
    artist: "米良美一",
    lyrics: "https://www.uta-net.com/song/10104/"
  },
  {
    stage: "STAGE 2",
    title: "恋風",
    artist: "幾田りら",
    lyrics: "https://www.uta-net.com/song/371553/"
  },
  {
    stage: "STAGE 2",
    title: "威風堂々 Brass Rock",
    artist: "Edward Elgar",
    lyrics: ""
  },
  {
    stage: "STAGE 2",
    title: "元気を出して",
    artist: "竹内まりや",
    lyrics: "https://www.uta-net.com/song/1769/"
  },
  {
    stage: "STAGE 2",
    title: "サザンメドレー",
    artist: "サザンオールスターズ",
    lyrics: "",
    medley: [
      { title: "TSUNAMI", lyrics: "" },
      { title: "いとしのエリー", lyrics: "" },
      { title: "波乗りジョニー", lyrics: "" }
    ]
  },
  {
    stage: "STAGE 2",
    title: "時代",
    artist: "中島みゆき",
    lyrics: "https://www.uta-net.com/song/2416/"
  },
  {
    stage: "STAGE 2",
    title: "昭和歌謡曲メドレー",
    artist: "昭和歌謡",
    lyrics: "",
    medley: [
      { title: "勝手にしやがれ", lyrics: "" },
      { title: "飛んでイスタンブール", lyrics: "" },
      { title: "あずさ2号", lyrics: "" },
      { title: "私鉄沿線", lyrics: "" },
      { title: "青いリンゴ", lyrics: "" },
      { title: "時の流れに身をまかせ", lyrics: "" },
      { title: "かもめが翔んだ日", lyrics: "" }
    ]
  }
];
