(() => {
  const d = window.TABASKA_DATA;
  if (!d) return;

  const $ = (selector) => document.querySelector(selector);
  const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };

  $('#heroImage').src = d.images.hero;
  setText('#heroTitle', d.org.tagline);
  setText('#heroLead', d.org.lead);
  setText('#aboutLead', d.org.lead);
  setText('#orgEstablished', d.org.established);
  setText('#orgArea', d.org.area);
  $('#juniorImage').src = d.images.junior;
  setText('#juniorEyebrow', d.junior.eyebrow);
  setText('#juniorTitle', d.junior.title);
  setText('#juniorText', d.junior.text);
  setText('#footerType', d.org.legalType);
  setText('#year', new Date().getFullYear());

  $('#navLinks').innerHTML = d.nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('');
  $('#activityGrid').innerHTML = d.activities.map(item => `<article class="activity-card reveal"><span class="activity-number">${item.number}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join('');
  $('#juniorPoints').innerHTML = d.junior.points.map(point => `<li>${point}</li>`).join('');
  $('#timeline').innerHTML = d.history.map(item => `<article class="timeline-item reveal"><div class="timeline-year">${item.year}</div><div class="timeline-title">${item.title}</div><div class="timeline-text">${item.text}</div></article>`).join('');
  $('#supportGrid').innerHTML = d.support.map(item => `<article class="support-card reveal"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('');

  const email = $('#emailLink');
  email.href = `mailto:${d.org.email}`;
  email.textContent = d.org.email;
  $('#instagram').href = d.social.instagram;
  $('#youtube').href = d.social.youtube;
  $('#dtm').href = d.social.dtm;

  const menuButton = $('.menu-toggle');
  const nav = $('.nav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !menuButton.contains(event.target)) nav.classList.remove('open');
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) nav.classList.remove('open'); });

  const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // キーボード操作時にもフォーカス位置が分かるようにする
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
  });
})();
