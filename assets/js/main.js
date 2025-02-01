document.addEventListener("DOMContentLoaded", () => {
  const toggleActive = (element) => {
    element.classList.toggle("active");
  };

  const setupToggle = (toggleOpenId, toggleCloseId, sideSelector) => {
    const sideElement = document.querySelector(sideSelector);
    document
      .getElementById(toggleOpenId)
      .addEventListener("click", () => toggleActive(sideElement));
    document
      .getElementById(toggleCloseId)
      .addEventListener("click", () => toggleActive(sideElement));
  };

  setupToggle("leftOpen", "leftClose", ".layout__left");
  setupToggle("rightOpen", "rightClose", ".layout__right");

  // Add swipe functionality for screens below 992px
  if (window.innerWidth < 992) {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleGesture = () => {
      if (touchEndX < touchStartX) {
        document.querySelector(".layout__left").classList.remove("active");
        document.querySelector(".layout__right").classList.add("active");
      }
      if (touchEndX > touchStartX) {
        document.querySelector(".layout__left").classList.add("active");
        document.querySelector(".layout__right").classList.remove("active");
      }
    };

    document.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    });
  }
});

const switchTheme = document.getElementById("switchTheme");
const updateThemeIcon = (theme) => {
  const themeIcon = switchTheme.querySelector("i");
  if (theme === "dark") {
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon");
  } else {
    themeIcon.classList.remove("bi-moon");
    themeIcon.classList.add("bi-sun");
  }
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
  sessionStorage.setItem("theme", theme);
};

const detectSystemTheme = () => {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDarkScheme ? "dark" : "light";
};

const savedTheme = sessionStorage.getItem("theme") || detectSystemTheme();
applyTheme(savedTheme);

switchTheme.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});