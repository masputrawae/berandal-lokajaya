// SIDEBAR FUNCTION
document.addEventListener("DOMContentLoaded", () => {
    const toggleActive = (element) => {
      element.classList.toggle("active");
    };
  
    const setupToggle = (toggleOpenId, toggleCloseId, sideSelector) => {
      const sideElement = document.querySelector(sideSelector);
      const openButton = document.getElementById(toggleOpenId);
      const closeButton = document.getElementById(toggleCloseId);
  
      openButton.addEventListener("click", () => toggleActive(sideElement));
      closeButton.addEventListener("click", () => toggleActive(sideElement));
  
      // Menambahkan event listener untuk klik di luar sidebar pada layar di bawah 768px
      document.addEventListener("click", (event) => {
        if (window.innerWidth < 768 && !sideElement.contains(event.target) && !openButton.contains(event.target)) {
          sideElement.classList.remove("active");
        }
      });
    };
  
    setupToggle("leftOpen", "leftClose", ".sidebar--left");
    setupToggle("rightOpen", "rightClose", ".sidebar--right");
  });
  
  // SWITCH THEMES
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
    const tabSelects = document.querySelectorAll(".tab-select");
    const tabLists = document.querySelectorAll(".nav__list-tab");
    
    tabSelects.forEach(tabSelect => {
        const tabGroup = tabSelect.dataset.tabGroup;
        const storageKey = `lastSelectedTab_${tabGroup}`;
  
        // Load last selected tab from session storage
        const lastSelectedTab = sessionStorage.getItem(storageKey);
        if (lastSelectedTab) {
            tabSelect.value = lastSelectedTab;
            updateTabs(lastSelectedTab, tabGroup);
        }
        
        tabSelect.addEventListener("change", function () {
            const selectedTab = this.value;
            
            // Save selected tab to session storage
            sessionStorage.setItem(storageKey, selectedTab);
            
            updateTabs(selectedTab, tabGroup);
        });
    });
    
    function updateTabs(selectedTab, tabGroup) {
        tabLists.forEach(tab => {
            if (tab.dataset.tabGroup === tabGroup) {
                tab.classList.toggle("nav__list-tabs--active", tab.dataset.tab === selectedTab);
            }
        });
    }
  });
  
  // COLLAPSE
  document.addEventListener("DOMContentLoaded", function () {
    const collapseButtons = document.querySelectorAll(".btn--collapse");
    const collapseAllButton = document.getElementById("collapseAll");
    let allCollapsed = false; // Track collapse state
    
    // Function to toggle icon class
    const toggleIcon = (icon, isCollapsed) => {
        if (icon) {
            icon.classList.replace(isCollapsed ? 'bi-folder2-open' : 'bi-folder2', isCollapsed ? 'bi-folder2' : 'bi-folder2-open');
        }
    };
    
    // Function to handle folder collapse toggle
    const toggleFolderCollapse = (folder, isCollapsed) => {
        const sublist = folder.querySelector(".nav__list--collapse");
        if (sublist) {
            sublist.classList.toggle("collapsed", isCollapsed);
            sessionStorage.setItem(`collapsed_${folder.dataset.id}`, isCollapsed);
            
            const icon = folder.querySelector(".btn--collapse i");
            toggleIcon(icon, isCollapsed);
        }
    };
  
    // Event listener for collapse buttons
    collapseButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parentItem = this.closest(".nav__item--folder");
            if (parentItem) {
                const sublist = parentItem.querySelector(".nav__list--collapse");
                const isCollapsed = sublist && sublist.classList.toggle("collapsed");
                sessionStorage.setItem(`collapsed_${parentItem.dataset.id}`, isCollapsed);
                
                const icon = this.querySelector("i");
                toggleIcon(icon, isCollapsed);
            }
        });
    });
    
    // Restore collapsed state from session storage
    document.querySelectorAll(".nav__item--folder").forEach(folder => {
        const sublist = folder.querySelector(".nav__list--collapse");
        if (sublist) {
            const isCollapsed = sessionStorage.getItem(`collapsed_${folder.dataset.id}`) === "true";
            sublist.classList.toggle("collapsed", isCollapsed);
            
            const icon = folder.querySelector(".btn--collapse i");
            toggleIcon(icon, isCollapsed);
        }
    });
    
    // Event listener for collapse all button
    if (collapseAllButton) {
        collapseAllButton.addEventListener("click", function () {
            allCollapsed = !allCollapsed;
            document.querySelectorAll(".nav__item--folder").forEach(folder => {
                toggleFolderCollapse(folder, allCollapsed);
            });
            
            const collapseAllIcon = collapseAllButton.querySelector("i");
            toggleIcon(collapseAllIcon, allCollapsed);
        });
    }
  });
  
  const fontSelect = document.getElementById("fontAdjustment");
  const defaultFontSize = "16"; // Ukuran default sesuai CSS
  
  // Cek apakah ada ukuran font yang disimpan di localStorage
  const savedFontSize = localStorage.getItem("fontSize") || defaultFontSize;
  
  // Atur nilai default ke root
  document.documentElement.style.setProperty('--fs-html', savedFontSize + 'px');
  fontSelect.value = savedFontSize; // Menampilkan pilihan yang sesuai
  
  // Menambahkan event listener ketika ukuran font diubah
  fontSelect.addEventListener("change", function () {
      const selectedFontSize = fontSelect.value;
      document.documentElement.style.setProperty('--fs-html', selectedFontSize + 'px');
      localStorage.setItem("fontSize", selectedFontSize);
  });