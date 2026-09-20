
// ========================================
// コンサート情報
// ========================================

const concertDate = "2026年10月04日（日）";
const concertTitle = "Mall de Music";
const concertVenue = "イオンモールKagoshima BAY";


// ステージ別 開演時間
const stage1Time = "15:30";
const stage2Time = "17:00";
const lyricsAvailableFrom = "2026-9-20";
const lyricsAvailableUntil = "2026-10-04";

// ========================================
// 曲一覧
// ========================================



    // ========================================
    // STAGE 1
    // ========================================

const songs = [

    {
        order: "0101",
        stage: "STAGE 1",
        title: "おジャ魔女カーニバル",
        artist: "MAHO堂",
        lyrics: "https://www.uta-net.com/song/14341/",
        medley: []
    },
    {
        order: "0102",
        stage: "STAGE 1",
        title: "勇気と冒険のメドレー",
        artist: "",
        lyrics: "",
        medley: [
            {
                title: "勇気100％ 『光GENJI』",
                lyrics: "https://www.uta-net.com/song/7263/"
            },
            {
                title: "Super Mario Wind Garden",
                lyrics: ""
            },
            {
                title: "虹 『菅田将暉』",
                lyrics: "https://www.uta-net.com/song/293474/"
            },
            {
                title: "紅蓮華 『LiSA』",
                lyrics: "https://www.uta-net.com/song/270036/"
            },
            {
                title: "1・2・3 『after the rain』",
                lyrics: "https://www.uta-net.com/song/279388/"
            }
        ]
    },
    {
        order: "0103",
        stage: "STAGE 1",
        title: "A Whole New World",
        artist: "",
        lyrics: "https://www.uta-net.com/movie/273558/",
        medley: []
    },
    {
        order: "0104",
        stage: "STAGE 1",
        title: "優しい彗星",
        artist: "YOASOBI",
        lyrics: "https://www.uta-net.com/song/296725/",
        medley: []
    },
    {
        order: "0105",
        stage: "STAGE 1",
        title: "逢いたくていま",
        artist: "MISIA",
        lyrics: "https://www.uta-net.com/song/85467/",
        medley: []
    },
    {
        order: "0106",
        stage: "STAGE 1",
        title: "情熱大陸",
        artist: "",
        lyrics: "",
        medley: []
    },
    {
        order: "0107",
        stage: "STAGE 1",
        title: "異邦人",
        artist: "久保田早紀",
        lyrics: "https://www.uta-net.com/movie/728/",
        medley: []
    },
    {
        order: "0108",
        stage: "STAGE 1",
        title: "夢をあきらめないで",
        artist: "岡村孝子",
        lyrics: "https://www.uta-net.com/song/4712/",
        medley: []
    },
    {
        order: "0109",
        stage: "STAGE 1",
        title: "ふるさと",
        artist: "嵐",
        lyrics: "https://www.uta-net.com/song/195976/",
        medley: []
    },
    {
        order: "0110",
        stage: "STAGE 1",
        title: "昭和歌謡曲メドレー",
        artist: "",
        lyrics: "",
        medley: [
            {
                title: "悲しみよこんにちは 『斉藤由貴』",
                lyrics: "https://www.uta-net.com/song/1355/"
            },
            {
                title: "真夜中のドア 〜 stay with me 『松原 みき』",
                lyrics: "https://www.uta-net.com/song/6321/"
            },
            {
                title: "悲しみがとまらない 『杏里』",
                lyrics: "https://www.uta-net.com/song/1341/"
            },
            {
                title: "アメリカン・フィーリング 『サーカス』",
                lyrics: "https://www.uta-net.com/song/400/"
            }
        ]
    },

    // ========================================
    // STAGE 2
    // ========================================


    {
        order: "0201",
        stage: "STAGE 2",
        title: "アンパンマンメドレー",
        artist: "ドリーミング",
        lyrics: "",
        medley: [
            {
                title: "アンパンマンのマーチ 『ドリーミング』",
                lyrics: "https://www.uta-net.com/song/7326/"
            },
            {
                title: "勇気りんりん 『ドリーミング』",
                lyrics: "https://www.uta-net.com/song/9054/"
            },
            {
                title: "アンパンマンたいそう 『ドリーミング』",
                lyrics: "https://www.uta-net.com/song/5508/"
            }
        ]
    },
    {
        order: "0202",
        stage: "STAGE 2",
        title: "パウ・パトロール_ジブリメドレー",
        artist: "",
        lyrics: "",
        medley: [
            {
                title: "パウ・パトロール",
                lyrics: "https://www.utatime.com/lyrics/paw-patrol/paw-patrol/"
            },
            {
                title: "さんぽ 『井上あずみ』",
                lyrics: "https://www.uta-net.com/movie/10772/"
            },
            {
                title: "ルージュの伝言 『松任谷由実』",
                lyrics: "https://www.uta-net.com/movie/4854/"
            },
            {
                title: "海の見える街",
                lyrics: ""
            },
            {
                title: "仕事はじめ",
                lyrics: ""
            },
            {
                title: "となりのトトロ 『井上あずみ』",
                lyrics: "https://www.uta-net.com/song/5064/"
            }
        ]
    },
    {
        order: "0203",
        stage: "STAGE 2",
        title: "もののけ姫",
        artist: "米良美一",
        lyrics: "https://www.uta-net.com/song/10104/",
        medley: []
    },
    {
        order: "0204",
        stage: "STAGE 2",
        title: "恋風",
        artist: "幾田りら",
        lyrics: "https://www.uta-net.com/song/371553/",
        medley: []
    },
    {
        order: "0205",
        stage: "STAGE 2",
        title: "元気を出して",
        artist: "竹内 まりや",
        lyrics: "https://www.uta-net.com/song/1769/",
        medley: []
    },
    {
        order: "0206",
        stage: "STAGE 2",
        title: "サザンメドレー",
        artist: "サザンオールスターズ",
        lyrics: "",
        medley: [
            {
                title: "TSUNAMI",
                lyrics: "https://www.uta-net.com/song/12255/"
            },
            {
                title: "いとしのエリー",
                lyrics: "https://www.uta-net.com/song/702/"
            },
            {
                title: "波乗りジョニー",
                lyrics: "https://www.uta-net.com/song/13297/"
            }
        ]
    },
    {
        order: "0207",
        stage: "STAGE 2",
        title: "川の流れのように",
        artist: "美空ひばり",
        lyrics: "https://www.uta-net.com/song/1420/",
        medley: []
    },
    {
        order: "0208",
        stage: "STAGE 2",
        title: "時代",
        artist: "中島みゆき",
        lyrics: "https://www.uta-net.com/song/2416/",
        medley: []
    },
    {
        order: "0209",
        stage: "STAGE 2",
        title: "昭和歌謡曲メドレー",
        artist: "",
        lyrics: "",
        medley: [
            {
                title: "勝手にしやがれ 『沢田研二』",
                lyrics: "https://www.uta-net.com/song/1311/"
            },
            {
                title: "飛んでイスタンブール 『庄野真代』",
                lyrics: "https://www.uta-net.com/song/3321/"
            },
            {
                title: "あずさ２号 『狩人』",
                lyrics: "https://www.uta-net.com/song/247/"
            },
            {
                title: "私鉄沿線 『野口五郎』",
                lyrics: "https://www.uta-net.com/song/2429/"
            },
            {
                title: "青いリンゴ 『野口五郎』",
                lyrics: "https://www.uta-net.com/song/178/"
            },
            {
                title: "時の流れに身をまかせ 『テレサ・テン』",
                lyrics: "https://www.uta-net.com/song/3251/"
            },
            {
                title: "かもめが翔んだ日 『渡辺真知子』",
                lyrics: "https://www.uta-net.com/song/1379/"
            },
        ]
      },
        {
            order: "0210",
            stage: "STAGE 2",
            title: "威風堂々",
            artist: "Edward Elgar",
            lyrics: ""
        }
    ]
