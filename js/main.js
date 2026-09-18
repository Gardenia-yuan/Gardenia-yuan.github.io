// 主题选择保存在本地，所有页面共用；默认使用浅色。
const themeButton = document.querySelector(".theme-toggle");
let theme = "light";

try {
  if (localStorage.getItem("theme") === "dark") {
    theme = "dark";
  }
} catch {
  // 浏览器禁用存储时，仍然允许在当前页面切换主题。
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  if (themeButton) {
    themeButton.textContent = theme === "dark" ? "浅色模式" : "深色模式";
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    themeButton.setAttribute("aria-label", theme === "dark" ? "切换到浅色模式" : "切换到深色模式");
  }
}

applyTheme();

if (themeButton) {
  themeButton.hidden = false;
  themeButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // 存储不可用不影响本次切换。
    }
  });
}
