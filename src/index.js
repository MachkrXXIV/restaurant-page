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

rat.classList.add("home--img");

console.log("is running!");
