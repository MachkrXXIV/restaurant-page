import "./styles/reset.scss";
import "./styles/main.scss";
import Ambient from "./imgs/ambient.jpg";
import loadContact from "./pages/contact";
import loadHome from "./pages/home";
import loadHeader from "./pages/header";
import loadMenu from "./pages/menu";
import changeContent from "./pages/container";

function setupPageSwitch(container) {
  const home = document.querySelector(".nav__home");
  const menu = document.querySelector(".nav__menu");
  const contact = document.querySelector(".nav__contact");

  home.addEventListener("click", () => changeContent(container, loadHome()));
  contact.addEventListener("click", () =>
    changeContent(container, loadContact())
  );
  menu.addEventListener("click", () => changeContent(container, loadMenu()));
  console.log("is working");
}

/**
 * @desc On first load, creates container, nav, and start on home page
 */
function initializePage() {
  const content = document.querySelector(".content");
  const container = document.createElement("main");

  container.classList.add("container__main");

  content.appendChild(loadHeader());
  content.appendChild(container);
  changeContent(container, loadHome());
  setupPageSwitch(container);
}

initializePage();
