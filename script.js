function setLang(lang) {
  const zhBlocks = document.querySelectorAll('.lang-zh');
  const enBlocks = document.querySelectorAll('.lang-en');

  if (lang === 'en') {
    zhBlocks.forEach(el => el.style.display = 'none');
    enBlocks.forEach(el => el.style.display = 'block');
    document.documentElement.lang = 'en';
  } else {
    zhBlocks.forEach(el => el.style.display = 'block');
    enBlocks.forEach(el => el.style.display = 'none');
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
