// 出演予定データ
// 公開の許可が出た予定だけ、以下の配列に追加してください。
const upcomingEvents = [];

document.addEventListener("DOMContentLoaded", () => {
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
