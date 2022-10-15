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

// Add images to
home.appendChild(rat);

rat.classList.add("home--img");

console.log("is running!");
