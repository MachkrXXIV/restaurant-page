import "./styles/reset.scss";
import "./styles/main.scss";
import loadHome from "./pages/home";

/**
 * @desc On first load, creates container and start on home page
 */
function initializePage() {
  const content = document.querySelector(".content");
  const container = document.createElement("main");

  container.classList.add(".container__main");

  content.appendChild(container);
  loadHome();
}

initializePage();
