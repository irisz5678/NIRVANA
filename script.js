function setLang(lang) {
  const zh = document.querySelector('.lang-zh');
  const en = document.querySelector('.lang-en');

  if (!zh || !en) {
    console.error('找不到 lang-zh 或 lang-en');
    return;
  }

  if (lang === 'en') {
    zh.style.display = 'none';
    en.style.display = 'block';
  } else {
    zh.style.display = 'block';
    en.style.display = 'none';
  }
}

// ✅ 页面加载完成后，强制默认中文
document.addEventListener('DOMContentLoaded', function () {
  setLang('zh');
});
