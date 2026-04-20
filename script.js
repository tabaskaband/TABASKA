fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("history");

    data.forEach(section => {
      const card = document.createElement("div");
      card.className = "history-card";

      card.innerHTML = `
        <img src="${section.image}" alt="${section.category}">
        <div class="history-content">
          <h3>${section.category}</h3>
          <ul>
            ${section.items.map(item => `
              <li><strong>${item.name}</strong></li>
              ${item.detail.map(d => `<li class="no-bullet">${d}</li>`).join("")}
            `).join("")}
          </ul>
        </div>
      `;

      container.appendChild(card);
    });
  });
