import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDarkTheme = ref<boolean>(false);

  const toggleTheme = (): void => {
    isDarkTheme.value = !isDarkTheme.value;
    const newTheme = isDarkTheme.value ? "dark" : "light";

    // 使用requestAnimationFrame确保在下一个渲染帧开始时执行DOM更新
    // 这可以减少重排和重绘带来的性能问题
    requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  };

  const initTheme = (): void => {
    // 检查系统偏好
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    // 优先使用本地主题
    const savedTheme =
      localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    isDarkTheme.value = savedTheme === "dark";

    // 使用requestAnimationFrame设置初始主题
    requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-theme", savedTheme);
    });
  };

  return {
    isDarkTheme,
    toggleTheme,
    initTheme,
  };
});
