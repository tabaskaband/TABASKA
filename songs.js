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
      { title: "悲しみよこんにちは", lyrics: "https://www.uta-net.com/song/1355/" },
      { title: "Stay With Me", lyrics: "https://www.uta-net.com/song/6321/" },
      { title: "悲しみがとまらない", lyrics: "https://www.uta-net.com/song/1341/" },
      { title: "アメリカン・フィーリング", lyrics: "https://www.uta-net.com/song/400/" }
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
      { title: "アンパンマンのマーチ", lyrics: "https://www.uta-net.com/song/7326/" },
      { title: "勇気りんりん", lyrics: "https://www.uta-net.com/song/9054/" },
      { title: "アンパンマンたいそう", lyrics: "https://www.uta-net.com/song/5508/" }
    ]
  },
  {
    stage: "STAGE 2",
    title: "パウ・パトロール／ジブリメドレー",
    artist: "パウ・パトロール／ジブリ",
    lyrics: "",
    medley: [
      { title: "パウ・パトロール", lyrics: "https://www.lyrical-nonsense.com/lyrics/paw-patrol/paw-patrol/" },
      { title: "さんぽ", lyrics: "https://www.uta-net.com/song/10772/" },
      { title: "ルージュの伝言", lyrics: "https://www.uta-net.com/song/4854/" },
      { title: "めぐる季節", lyrics: "https://www.uta-net.com/song/7525/" },
      { title: "となりのトトロ", lyrics: "https://www.uta-net.com/song/5064/" }
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
      { title: "TSUNAMI", lyrics: "https://www.uta-net.com/song/12255/" },
      { title: "いとしのエリー", lyrics: "https://www.uta-net.com/song/702/" },
      { title: "波乗りジョニー", lyrics: "https://www.uta-net.com/song/13297/" }
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
      { title: "勝手にしやがれ", lyrics: "https://www.uta-net.com/song/1311/" },
      { title: "飛んでイスタンブール", lyrics: "https://www.uta-net.com/song/3321/" },
      { title: "あずさ2号", lyrics: "https://www.uta-net.com/song/247/" },
      { title: "私鉄沿線", lyrics: "https://www.uta-net.com/song/2429/" },
      { title: "青いリンゴ", lyrics: "https://www.uta-net.com/song/178/" },
      { title: "時の流れに身をまかせ", lyrics: "https://www.uta-net.com/song/3251/" },
      { title: "かもめが翔んだ日", lyrics: "https://www.uta-net.com/song/1379/" }
    ]
  }
];
