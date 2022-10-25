// should just load modules
import Rat from "./imgs/little-chef.jpeg";
import Ambient from "./imgs/ambient.jpg";
import "./styles/reset.scss";
import "./styles/main.scss";

// Create image objects
const rat = new Image();
const ambient = new Image();

// Add src url
rat.src = Rat;
ambient.src = Ambient;

// Query selectors
const content = document.getElementById("content");
const containerHome = document.querySelector(".container__home");
const home = document.querySelector(".home");
const slogan = document.querySelector(".home__slogan");
const order = document.querySelector(".home__order");

// Add to page
home.append(slogan);
home.appendChild(rat);
home.append(order);

// Add classes(styling)
home.classList.add("home--shadow");
slogan.classList.add("home__slogan");
order.classList.add("home__order");

// Add text
slogan.textContent = "Little Chef is here to impress!";
order.innerHTML =
  'Order online for <br/> <span class="home__pick-up">pick-up</span> or <span class="home__delivery">delivery</span> today!';

rat.classList.add("home--img");

console.log("is running!");
