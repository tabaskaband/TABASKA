
// ========================================
// コンサート情報
// ========================================

const concertDate = "2026年10月04日（日）";
const concertTitle = "Mall de Music";
const concertVenue = "イオンモールKagoshima BAY";

// ステージ別 開演時間
const stage1Time = "15:30";
const stage2Time = "17:00";

// 歌詞リンク公開期間
const lyricsAvailableFrom = "2026-10-04";
const lyricsAvailableUntil = "2026-10-04";


// ========================================
// 曲一覧
// ========================================

const songs = [

    // ========================================
    // STAGE 1
    // ========================================

    {
        order: "0101",
        stage: "STAGE 1",
        title: "おジャ魔女カーニバル",
        artist: "MAHO堂",
        lyrics: "[https://www.uta-net.com/song/14341/](https://www.uta-net.com/song/14341/)",
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
                lyrics: "[https://www.uta-net.com/song/7263/](https://www.uta-net.com/song/7263/)"
            },
            {
                title: "Super Mario Wind Garden",
                lyrics: ""
            },
            {
                title: "虹 『菅田将暉』",
                lyrics: "[https://www.uta-net.com/song/293474/](https://www.uta-net.com/song/293474/)"
            },
            {
                title: "紅蓮華 『LiSA』",
                lyrics: "[https://www.uta-net.com/song/270036/](https://www.uta-net.com/song/270036/)"
            },
            {
                title: "1・2・3 『after the rain』",
                lyrics: "[https://www.uta-net.com/song/279388/](https://www.uta-net.com/song/279388/)"
            }
        ]
    },
    {
        order: "0103",
        stage: "STAGE 1",
        title: "A Whole New World",
        artist: "",
        lyrics: "[https://www.uta-net.com/movie/273558/](https://www.uta-net.com/movie/273558/)",
        medley: []
    },
    {
        order: "0104",
        stage: "STAGE 1",
        title: "優しい彗星",
        artist: "YOASOBI",
        lyrics: "[https://www.uta-net.com/song/296725/](https://www.uta-net.com/song/296725/)",
        medley: []
    },
    {
        order: "0105",
        stage: "STAGE 1",
        title: "逢いたくていま",
        artist: "MISIA",
        lyrics: "[https://www.uta-net.com/song/85467/](https://www.uta-net.com/song/85467/)",
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
        lyrics: "[https://www.uta-net.com/movie/728/](https://www.uta-net.com/movie/728/)",
        medley: []
    },
    {
        order: "0108",
        stage: "STAGE 1",
        title: "夢をあきらめないで",
        artist: "岡村孝子",
        lyrics: "[https://www.uta-net.com/song/4712/](https://www.uta-net.com/song/4712/)",
        medley: []
    },
    {
        order: "0109",
        stage: "STAGE 1",
        title: "ふるさと",
        artist: "嵐",
        lyrics: "[https://www.uta-net.com/song/195976/](https://www.uta-net.com/song/195976/)",
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
                lyrics: "[https://www.uta-net.com/song/1355/](https://www.uta-net.com/song/1355/)"
            },
            {
                title: "真夜中のドア 〜 stay with me 『松原 みき』",
                lyrics: "[https://www.uta-net.com/song/6321/](https://www.uta-net.com/song/6321/)"
            },
            {
                title: "悲しみがとまらない 『杏里』",
                lyrics: "[https://www.uta-net.com/song/1341/](https://www.uta-net.com/song/1341/)"
            },
            {
                title: "アメリカン・フィーリング 『サーカス』",
                lyrics: "[https://www.uta-net.com/song/400/](https://www.uta-net.com/song/400/)"
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
                title: "アンパンマンのマーチ",
                lyrics: "[https://www.uta-net.com/song/7326/](https://www.uta-net.com/song/7326/)"
            },
            {
                title: "勇気りんりん",
                lyrics: "[https://www.uta-net.com/song/9054/](https://www.uta-net.com/song/9054/)"
            },
            {
                title: "アンパンマンたいそう",
                lyrics: "[https://www.uta-net.com/song/5508/](https://www.uta-net.com/song/5508/)"
            }
        ]
    },
    {
        order: "0202",
        stage: "STAGE 2",
        title: "パウ・パトロール　ジブリメドレー",
        artist: "",
        lyrics: "",
        medley: [
            {
                title: "パウ・パトロール",
                lyrics: "[https://www.utatime.com/lyrics/paw-patrol/paw-patrol/](https://www.utatime.com/lyrics/paw-patrol/paw-patrol/)"
            },
            {
                title: "さんぽ 『井上あずみ』",
                lyrics: "[https://www.uta-net.com/movie/10772/](https://www.uta-net.com/movie/10772/)"
            },
            {
                title: "ルージュの伝言 『松任谷由実』",
                lyrics: "[https://www.uta-net.com/movie/4854/](https://www.uta-net.com/movie/4854/)"
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
                lyrics: "[https://www.uta-net.com/song/5064/](https://www.uta-net.com/song/5064/)"
            }
        ]
    },
    {
        order: "0203",
        stage: "STAGE 2",
        title: "もののけ姫",
        artist: "米良美一",
        lyrics: "[https://www.uta-net.com/song/10104/](https://www.uta-net.com/song/10104/)",
        medley: []
    },
    {
        order: "0204",
        stage: "STAGE 2",
        title: "恋風",
        artist: "幾田りら",
        lyrics: "[https://www.uta-net.com/song/371553/](https://www.uta-net.com/song/371553/)",
        medley: []
    },
    {
        order: "0205",
        stage: "STAGE 2",
        title: "元気を出して",
        artist: "竹内 まりや",
        lyrics: "[https://www.uta-net.com/song/1769/](https://www.uta-net.com/song/1769/)",
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
                lyrics: "[https://www.uta-net.com/song/12255/](https://www.uta-net.com/song/12255/)"
            },
            {
                title: "いとしのエリー",
                lyrics: "[https://www.uta-net.com/song/702/](https://www.uta-net.com/song/702/)"
            },
            {
                title: "波乗りジョニー",
                lyrics: "[https://www.uta-net.com/song/13297/](https://www.uta-net.com/song/13297/)"
            }
        ]
    },
    {
        order: "0207",
        stage: "STAGE 2",
        title: "川の流れのように",
        artist: "美空ひばり",
        lyrics: "[https://www.uta-net.com/song/1420/](https://www.uta-net.com/song/1420/)",
        medley: []
    },
    {
        order: "0208",
        stage: "STAGE 2",
        title: "時代",
        artist: "中島みゆき",
        lyrics: "[https://www.uta-net.com/song/2416/](https://www.uta-net.com/song/2416/)",
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
                lyrics: "[https://www.uta-net.com/song/1311/](https://www.uta-net.com/song/1311/)"
            },
            {
                title: "飛んでイスタンブール 『庄野真代』",
                lyrics: "[https://www.uta-net.com/song/3321/](https://www.uta-net.com/song/3321/)"
            },
            {
                title: "あずさ２号 『狩人』",
                lyrics: "[https://www.uta-net.com/song/247/](https://www.uta-net.com/song/247/)"
            },
            {
                title: "私鉄沿線 『野口五郎』",
                lyrics: "[https://www.uta-net.com/song/2429/](https://www.uta-net.com/song/2429/)"
            },
            {
                title: "青いリンゴ 『野口五郎』",
                lyrics: "[https://www.uta-net.com/song/178/](https://www.uta-net.com/song/178/)"
            },
            {
                title: "時の流れに身をまかせ 『テレサ・テン』",
                lyrics: "[https://www.uta-net.com/song/3251/](https://www.uta-net.com/song/3251/)"
            },
            {
                title: "かもめが翔んだ日 『渡辺真知子』",
                lyrics: "[https://www.uta-net.com/song/1379/](https://www.uta-net.com/song/1379/)"
            }
        ]
    },
    {
        order: "0210",
        stage: "STAGE 2",
        title: "威風堂々",
        artist: "Edward Elgar",
        lyrics: "",
        medley: []
    }
];


// ========================================
// コンサート情報を表示
// ========================================

document.getElementById("concert-date").textContent = concertDate;
document.getElementById("concert-title").textContent = concertTitle;
document.getElementById("concert-venue").textContent = concertVenue;

document.getElementById("concert-time").innerHTML = `
    <div class="stage-time">
        STAGE 1 開演 ${stage1Time}
    </div>
    ${
        typeof stage2Time !== "undefined"
            ? `
                <div class="stage-time">
                    STAGE 2 開演 ${stage2Time}
                </div>
              `
            : ""
    }
`;


// ========================================
// 歌詞リンク公開期間チェック
// ========================================

const today = new Date();

const fromDate = new Date(
    lyricsAvailableFrom + "T15:00:00"
);

const untilDate = new Date(
    lyricsAvailableUntil + "T19:00:00"
);

const lyricsAvailable =
    today >= fromDate && today <= untilDate;

const songList = document.getElementById("song-list");


// ========================================
// 期間外
// ========================================

if (!lyricsAvailable) {

    songList.innerHTML = `
        <div class="preparing-message">
            現在、未公開です
            <span>イベント開催時間中のみご覧いただけます。</span>
        </div>
    `;

}


// ========================================
// 期間内
// ========================================

else {

    if (
        typeof songs !== "undefined" &&
        Array.isArray(songs) &&
        songs.length > 0
    ) {

        let currentStage = "";
        let stageGroup = null;
        let stageSongs = null;
        let isOrangeStage = false;


        songs.forEach(song => {

            // ========================================
            // ステージが変わった場合
            // ========================================

            if (
                song.stage &&
                song.stage !== currentStage
            ) {

                currentStage = song.stage;

                isOrangeStage =
                    /STAGE\s[2-9]/i.test(currentStage);

                stageGroup =
                    document.createElement("div");

                stageGroup.className =
                    "stage-group";


                const stageTitle =
                    document.createElement("div");

                stageTitle.className =
                    isOrangeStage
                        ? "stage-title stage-orange"
                        : "stage-title";

                stageTitle.textContent =
                    currentStage;


                stageSongs =
                    document.createElement("div");

                stageSongs.className =
                    "stage-songs";


                stageGroup.appendChild(stageTitle);
                stageGroup.appendChild(stageSongs);

                songList.appendChild(stageGroup);
            }


            // ========================================
            // 曲カード
            // ========================================

            const card =
                document.createElement("div");

            card.className =
                isOrangeStage
                    ? "song-card card-orange"
                    : "song-card";


            // ========================================
            // 通常曲の歌詞リンク
            // ========================================

            const lyricsButton =
                song.lyrics
                    ? `
                        <a
                            href="${song.lyrics}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="song-link"
                        >
                            歌詞を見る
                        </a>
                      `
                    : "";


            // ========================================
            // メドレー
            // ========================================

            const medleyList =
                Array.isArray(song.medley) &&
                song.medley.length

                    ? `
                        <div class="medley-list">

                            ${song.medley.map(item => `

                                <div class="medley-item">

                                    <div class="medley-item-title">
                                        ・${item.title}
                                    </div>

                                    ${
                                        item.lyrics &&
                                        String(item.lyrics).trim() !== ""

                                            ? `
                                                <a
                                                    href="${item.lyrics}"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="medley-link"
                                                >
                                                    歌詞を見る
                                                </a>
                                              `

                                            : ""
                                    }

                                </div>

                            `).join("")}

                        </div>
                      `

                    : "";


            // ========================================
            // カードHTML
            // ========================================

            card.innerHTML = `

                <div class="song-info">

                    <div class="song-title">
                        ${song.title}
                    </div>

                    <div class="song-artist">
                        ${song.artist || ""}
                    </div>

                    ${medleyList}

                </div>

                ${lyricsButton}

            `;


            stageSongs.appendChild(card);

        });


    } else {

        // ========================================
        // 曲データがない場合
        // ========================================

        songList.innerHTML = `
            <div class="preparing-message">

                現在準備中です

                <span>
                    公開までしばらくお待ちください。
                </span>

            </div>
        `;

    }

}
```
