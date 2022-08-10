import Rat from "./imgs/little-chef.jpeg";

const rat = new Image();
rat.src = Rat;
const content = document.getElementById("content");
content.appendChild(rat);
console.log("is running!");
