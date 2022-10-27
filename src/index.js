import "./styles/reset.scss";
import "./styles/main.scss";
import loadHome from "./pages/home";
import loadHeader from "./pages/header";

/**
 * @desc On first load, creates container, nav, and start on home page
 */
function initializePage() {
  const content = document.querySelector(".content");
  const container = document.createElement("main");

  container.classList.add(".container__main");

  content.appendChild(container);
  content.appendChild(loadHeader());
  loadHome();
}

initializePage();
