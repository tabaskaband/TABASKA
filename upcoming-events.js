// 出演予定データ
// 公開の許可が出た予定だけ、以下の配列に追加してください。
const upcomingEvents = [
  
  {
    date: "11月14日：(Sat)",
    title: "AIRARIE点灯式",
    venue: "イオンタウン姶良　東街区屋外さくらの広場",
    time: "16：00～18：00　【TABASKA 16:00～】"
  },
  {
    date: "11月15日：(Sun)",
    title: "～西郷隆盛生誕200年・没後150年カウントダウン記念～第13回わくわく福祉交流フェア",
    venue: "かんまちあ",
    time: "10:00～15:00 【TABASK 12:35～】"
  },
  {
    date: "12月5日：(Sat)",
    title: "冬の星座観察会 Wellcome 演奏",
    venue: "指宿フラワーパーク ",
    time: "①15:45〜 ②17:45〜 ※変更する場合がありますので、予めご了承ください。"
  },
  {
    date: "12月12日：(Sat)",
    title: "クリスマスコンサート（シークレットライブ）",
    venue: "姶良市内",
    time: "14:00～"
  },
  {
    date: "12月19日：(Sat)",
    title: "クリスマスコンサート（シークレットライブ）",
    venue: "鹿児島市内",
    time: "①15:00〜　②16:00～"
  },
  {
    date: "12月24日：(Thu)",
    title: "近日公開",
    venue: "",
    time: ""
  },

  
];

document.addEventListener("DOMContentLoaded", () => {
  // Aboutの直後にTABASKA紹介動画を追加
  const aboutSection = document.getElementById("about");
  if (aboutSection && !document.getElementById("tabaska-intro-video")) {
    const videoSection = document.createElement("section");
    videoSection.id = "tabaska-intro-video";
    videoSection.innerHTML = `
      <h2>TABASKAを動画で紹介</h2>
      <p style="text-align:center; margin-bottom:20px; color:#94a3b8;">
        音楽で、みんながひとつになる。<br>
        
      </p>
      <style>
        #tabaska-intro-video .tabaska-intro-video-container {
          width: 70%;
          margin: 0 auto;
        }
        #tabaska-intro-video .tabaska-intro-video-player {
          display: block;
          width: 100%;
          height: auto;
          max-height: 75vh;
          border-radius: 12px;
          background: #000;
          box-shadow: 0 0 20px rgba(56,189,248,.25);
        }
        @media (max-width: 768px) {
          #tabaska-intro-video .tabaska-intro-video-container {
            width: 96%;
          }
        }
      </style>
      <div class="tabaska-intro-video-container">
        <video
          controls
          playsinline
          preload="metadata"
          class="tabaska-intro-video-player"
          aria-label="TABASKA紹介動画"
        >
          <source src="videos/tabaska-intro.mp4" type="video/mp4">
          お使いのブラウザでは動画を再生できません。
        </video>
      </div>
    `;
    aboutSection.insertAdjacentElement("afterend", videoSection);
  }

  const container = document.getElementById("upcoming-events");
  if (!container) return;

  if (upcomingEvents.length === 0) {
    container.innerHTML = '<div class="upcoming-placeholder">出演予定のイベントは、決まり次第お知らせします。</div>';
    return;
  }

  container.innerHTML = upcomingEvents.map(event => `
    <article class="upcoming-card">
      <div class="upcoming-date">${event.date}</div>
      <div class="upcoming-title">${event.title}</div>
      <div class="upcoming-meta">${event.venue || ""}</div>
      <div class="upcoming-meta">${event.time || ""}</div>
    </article>
  `).join("");
});
