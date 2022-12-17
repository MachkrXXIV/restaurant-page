import Rat from "../imgs/little-chef.jpeg";
import changeContent from "./container.js";

const loadHome = function () {
  const home = document.createElement("main");
  const slogan = document.createElement("h1");
  const rat = document.createElement("img");
  const order = document.createElement("h2");

  // Add src url
  rat.src = Rat;

  // Add to page
  home.appendChild(slogan);
  home.appendChild(rat);
  home.appendChild(order);

  // Add classes(styling)
  home.classList.add("home");
  home.classList.add("home--shadow");
  slogan.classList.add("home__slogan");
  order.classList.add("home__order");
  rat.classList.add("home--img");

  // Add text
  slogan.textContent = "Little Chef is here to impress!";
  order.innerHTML =
    'Order online for <br/> <span class="home__pick-up">pick-up</span> or <span class="home__delivery">delivery</span> today!';

  return home;
};

export default loadHome;
