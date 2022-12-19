import "./styles/reset.scss";
import "./styles/main.scss";
import Ambient from "./imgs/ambient.jpg";
import loadContact from "./pages/contact";
import loadHome from "./pages/home";
import loadHeader from "./pages/header";
import loadMenu from "./pages/menu";
import changeContent from "./pages/container";

/**
 * @desc On first load, creates container, nav, and start on home page
 */
function initializePage() {
  const content = document.querySelector(".content");
  const container = document.createElement("main");

  container.classList.add("container__main");

  content.appendChild(loadHeader());
  content.appendChild(container);
  changeContent(container, loadContact());
  // changeContent(container, loadMenu());
}

initializePage();
