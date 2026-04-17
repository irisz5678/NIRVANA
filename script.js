/**
 * ================================
 * NIRVANA 中 / 英 语言切换（稳定版）
 * ================================
 */

/* 核心切换函数 */
function setLang(lang) {
  // 给 html 设置语义语言
  document.documentElement.lang = lang;

  // 找到中英文内容块
  const zhBlock = document.querySelector(".lang-zh");
  const enBlock = document.querySelector(".lang-en");

  // 如果页面结构不对，直接返回（防止报错）
  if (!zhBlock || !enBlock) {
    console.warn("⚠️ 没找到 .lang-zh 或 .lang-en");
    return;
  }

  // 控制显示
  if (lang === "en") {
    zhBlock.style.display = "none";
    enBlock.style.display = "block";
  } else {
    // 默认一律中文
    zhBlock.style.display = "block";
    enBlock.style.display = "none";
    lang = "zh";
  }

  // 保存语言状态（可选，但很实用）
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // 无痕模式下 localStorage 可能不可用，忽略即可
  }
}

/* 页面加载完成后执行 */
document.addEventListener("DOMContentLoaded", function () {
  let savedLang = "zh";

  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "zh") {
      savedLang = stored;
    }
  } catch (e) {

