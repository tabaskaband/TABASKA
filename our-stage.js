/*
 * TABASKA OUR STAGE
 * 出演実績の表示内容は、このファイルのデータを編集してください。
 */

const ourStageCards = [
  {
    title: "商業施設",
    image: "images/20251005_IONMALL.jpg",
    alt: "TABASKA イオンモール鹿児島 MALL de Music",
    groups: [
      { name: "鹿児島中央駅前アミュ広場", details: ["桜島・錦江湾ジオパークイベント など"] },
      { name: "イオンモールKAGOSHIMA BAY", details: ["夏祭り",
                                               "Summer Stage",
                                               "MALL de Music"] },
      { name: "イオンタウン姶良", details: ["サマーコンサート",
                                    "浴衣祭りコンサート",
                                    "秋のコンサート",
                                    "イルミネーション点灯式",
                                    "クリスマスコンサート など"] },
      { name: "指宿フラワーパーク", details: ["イルミネーション点灯式",
                                     "ウインターフェスティバル",
                                     "夏の星座観察会",
                                     "冬の星座観察会",
                                     "新春コンサート"] },
      { name: "吹上浜フィールドホテル", details: ["サンセットライブ",
                                       "１周年アニバーサリーライブ"] },
      { name: "霧島国際ホテル", details: ["霧島まるしぇ"] },
      { name: "ウェルビュー鹿児島", details: ["キッズフェスタ など"] }
    ]
  },
  {
    title: "地域イベント出演・協力",
    image: "images/20201101_吉野地区合同コンサート.JPG",
    alt: "地域イベント出演",
    groups: [
      { name: "地域イベント出演", details: [
        "鹿児島マラソン",
        "鹿児島マラソン協働事業 「海辺deアンサンブル」",
        "ふれあいスポーツランドGWマルシェ",
        "吉野公園さくらまつり",
        "霧島国分夏まつり",
        "オロシティー夏祭り",
        "武岡ハイランド５０周年夏祭り",
        "鴨池ワールドフェス",
        "かもなかまつり",
        "鴨池地区夏まつり",
        "Silver Salon Music Concert"
      ] }
    ]
  },
  {
    title: "レストラン・貸切イベント演奏",
    image: "images/20170826_BigBand.JPG",
    alt: "TABASKA ポルトカーサビアライブ BIGBAND Live",
    groups: [
      { name: "ディナーライブ", details: [
        "Beer Bar YOKABITO ライブ",
        "ウェルビュー鹿児島クリスマスディナーライブ",
        "レンブラントホテル鹿児島ディナーライブ",
        "ポルトカーサビアライブ"
      ] },
      { name: "ランチタイムライブ", details: ["石窯cafe kunkun ライブ など"] },
      { name: "貸切イベント", details: ["桜島納涼観光船"] }
    ]
  }

  ,
  {
    title: "ブライダル・式典",
    image: "images/20250816_パーティー.jpg",
    alt: "ブライダル・式典・パーティー演奏",
    groups: [
      { name: "結婚式演奏", details: ["城山観光ホテル",
                                 "ザ・ピークプレミアムテラス",
                                 "THE GRAND HOUSE",
                                 "旧 ベイサイド迎賓館　など"] },
      { name: "パーティー・企業イベント演奏", details: ["おぎおんさぁ 六番神輿葵連 設立２０周年記念祝賀会",
                                          "濱田酒造１５０周年新酒まつり",
                                          "奄美の里サウスヴィラガーデン　など"] }
    ]
  },
  {
    title: "LIVE MUSIC CLUB",
    image: "images/20261031_LiveBar.jpg",
    alt: "Live Bar",
    groups: [
      { name: "ライブハウス", details: ["HALLOWEEN LIVE @ LIVE BAR SHELTER"] }
    ]
  },
  {
    title: "教育関連イベント",
    image: "images/20250307_キャリアデザイン専門学校.jpg",
    alt: "キャリアデザイン専門学校ライブ",
    groups: [
      { name: "学校コンサート", details: ["キャリアデザイン専門学校ライブ",
                                   "ユーススコラ鹿児島ライブ"] },
      { name: "子ども向けイベント", details: ["ファミリーサポートセンター全体交流会"] }
    ]
  },
  {
    title: "福祉関連イベント",
    image: "images/20191001_赤い羽根共同募金.jpg",
    alt: "赤い羽根共同募金セレモニー",
    groups: [
      { name: "福祉関係", details: ["赤い羽根共同募金セレモニー",
                                "鹿児島市制１３０周年記念 第８回わくわく福祉交流フェア",
                                "SMILE PROJECT", "福祉施設クリスマスコンサート",
                                "高齢者福祉施設慰問演奏",
                                "病院慰問演奏 など"] }
    ]
  },
  {
    title: "主催イベント開催",
    image: "images/20160617_キャンドルナイト.jpg",
    alt: "ドルフィンポート 海辺 de アンサンブル",
    groups: [
      { name: "主催・運営イベント", details: ["吉野地区小学校合同コンサート"] },

      { name: "音楽フェス・コンサート", details: ["海辺 de アンサンブル （全１０回：うち１回中止） 主催",
                                          "社会人吹奏楽団 宮之城吹奏楽団アンサンブルコンサート 主催"] },
      
      { name: "チャリティーコンサート", details: ["西日本豪雨災害支援 チャリティーコンサート 主催",
                                          "被災地支援 チャリティーコンサート 主催"] }      
    ]
  }
];

function escapeOurStageText(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderOurStage() {
  const container = document.getElementById("our-stage-dynamic");
  if (!container) return;

  container.innerHTML = ourStageCards.map(card => {
    const groupsHtml = card.groups.map(group => {
      const detailsHtml = (group.details || []).map(detail =>
        `<li class="no-bullet">${escapeOurStageText(detail)}</li>`
      ).join("");

      return `<li>${escapeOurStageText(group.name)}</li>${detailsHtml}`;
    }).join("");

    return `
      <div class="history-card">
        <img src="${escapeOurStageText(card.image)}" alt="${escapeOurStageText(card.alt)}">
        <div class="history-content">
          <h3>${escapeOurStageText(card.title)}</h3>
          <ul>${groupsHtml}</ul>
        </div>
      </div>
    `;
  }).join("");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderOurStage);
} else {
  renderOurStage();
}
