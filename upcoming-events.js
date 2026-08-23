// 出演予定データ
// 公開の許可が出た予定だけ、以下の配列に追加してください。
const upcomingEvents = [
  {
    date: "8月30日（日）",
    title: "イオンモール KAGOSHIMA BAY 水の広場",
    venue: "",
    time: "①13:00〜<br>②16:00〜"
  },
  {
    date: "10月上旬：(Sun)",
    title: "近日公開",
    venue: "",
    time: ""
  },
  {
    date: "10月中旬：(Sat)",
    title: "近日公開",
    venue: "",
    time: ""
  },
  {
    date: "10月下旬：(Sat)",
    title: "近日公開",
    venue: "",
    time: ""
  }
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
        「笑って。」「泣いて。」「踊って。」「歌って。」　音楽で、みんながひとつになる。<br>
        
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
