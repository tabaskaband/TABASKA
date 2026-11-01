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
      { name: "イオンモールKAGOSHIMA BAY", details: ["夏祭り", "Summer Stage", "MALL de Music"] },
      { name: "イオンタウン姶良", details: ["サマーコンサート", "浴衣祭りコンサート", "秋のコンサート", "イルミネーション点灯式", "クリスマスコンサート など"] },
      { name: "指宿フラワーパーク", details: ["イルミネーション点灯式", "ウインターフェスティバル", "夏の星座観察会", "新春コンサート"] },
      { name: "吹上浜フィールドホテル", details: ["サンセットライブ", "１周年アニバーサリーライブ"] },
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
        "武岡ハイランド50周年夏祭り",
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
