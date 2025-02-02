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

  setupToggle("leftOpen", "leftClose", ".sidebar--left");
  setupToggle("rightOpen", "rightClose", ".sidebar--right");
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

// TABS
document.addEventListener("DOMContentLoaded", function () {
  function setupTabs(group) {
    const selector = document.querySelector(`.tab-selector[data-tabs-group="${group}"]`);
    const tabContents = document.querySelectorAll(`.tab-area .tab-area__content[data-tab][data-tabs-group="${group}"]`);
    
    if (!selector) return;
    
    selector.addEventListener("change", function () {
      const selectedTab = this.value;
      
      tabContents.forEach((tab) => {
        if (tab.getAttribute("data-tab") === selectedTab) {
          tab.classList.add("tab-area__content--active");
        } else {
          tab.classList.remove("tab-area__content--active");
        }
      });
    });
  }

  // Temukan semua elemen selector yang memiliki atribut data-tabs-group
  const tabGroups = new Set(
    [...document.querySelectorAll(".tab-selector[data-tabs-group]")].map(el => el.getAttribute("data-tabs-group"))
  );
  
  // Pasang event listener untuk setiap grup tab
  tabGroups.forEach(group => setupTabs(group));
});
