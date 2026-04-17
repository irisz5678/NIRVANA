function setLang(lang) {
  const zh = document.querySelectorAll('.lang-zh');
  const en = document.querySelectorAll('.lang-en');

  if (lang === 'en') {
    zh.forEach(el => el.style.display = 'none');
    en.forEach(el => el.style.display = 'block');
    document.documentElement.lang = 'en';
  } else {
    zh.forEach(el => el.style.display = 'block');
    en.forEach(el => el.style.display = 'none');
    document.documentElement.lang = 'zh';
    lang = 'zh';
  }

  try {
    localStorage.setItem('lang', lang);
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'zh';
  try {
    const l = localStorage.getItem('lang');
    if (l === 'en' || l === 'zh') saved = l;
  } catch (e) {}

  setLang(saved);
});
``
