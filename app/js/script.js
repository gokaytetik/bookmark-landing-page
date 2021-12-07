// Tab Section

const tabButtons = document.querySelectorAll(
  ".features__tabs .features__buttons .features__btn"
);

const tabPanels = document.querySelectorAll(
  ".features__tabs .features__tab-panel"
);

const showPanel = (panelIndex) => {
  tabButtons.forEach((item) => {
    item.style.color = "";
    item.style.borderBottom = "";
  });

  tabButtons[panelIndex].style.color = "hsl(229, 31%, 21%)";
  tabButtons[panelIndex].style.borderBottom = "2.9px solid hsl(0, 94%, 66%)";

  tabPanels.forEach((item) => {
    item.style.width = "0";
    item.style.height = "0";
  });
  tabPanels[panelIndex].style.width = "100%";
  tabPanels[panelIndex].style.height = "100%";
};

tabButtons[0].style.color = "hsl(229, 31%, 21%)";
tabButtons[0].style.borderBottom = "2.9px solid hsl(0, 94%, 66%)";
tabPanels[0].style.width = "100%";
tabPanels[0].style.height = "100%";

// Accordion Section

const contents = document.querySelectorAll(".questions__content");
const panels = document.querySelectorAll(".questions__panel");
const openIcons = document.querySelectorAll(".questions__icon-open");
const closeIcons = document.querySelectorAll(".questions__icon-close");

const showContent = (contentIndex) => {
  contents[contentIndex].classList.toggle("active");
  panels[contentIndex].classList.toggle("active-color");
  openIcons[contentIndex].classList.toggle("icon-toggle");
  closeIcons[contentIndex].classList.toggle("active-icon");
};
