import "./styles/reset.scss";
import "./styles/main.scss";
import Ambient from "./imgs/ambient.jpg";
import loadHome from "./pages/home";
import loadHeader from "./pages/header";
import changeContent from "./pages/container";
import loadMenu from "./pages/menu";

/**
 * @desc On first load, creates container, nav, and start on home page
 */
function initializePage() {
  const content = document.querySelector(".content");
  const container = document.createElement("main");

  container.classList.add("container__main");

  content.appendChild(loadHeader());
  content.appendChild(container);
  // changeContent(container, loadHome());
  changeContent(container, loadMenu());
}

initializePage();
