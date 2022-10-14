// should just load modules
import Rat from "./imgs/little-chef.jpeg";
import "./styles/reset.scss";
import "./styles/main.scss";

const rat = new Image();
rat.src = Rat;
const content = document.getElementById("content");
content.appendChild(rat);
console.log("is running!");
console.log("run this shit");
