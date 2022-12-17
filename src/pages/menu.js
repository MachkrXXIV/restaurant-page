import Taco from "../imgs/food/food_italianTaco.jpg";
import Pasta from "../imgs/food/food_pasta.jpg";
import Pizza from "../imgs/food/food_pizza.jpg";
import Ratatouille from "../imgs/food/food_ratatouille.jpg";
import Sandwich from "../imgs/food/food_sandwich.jpg";
import Specialty from "../imgs/food/food_specialty.jpg";

/**
 *
 * @param {string} name
 * @param {imgPath} fileName
 * @param {string} description
 * @returns menuItemElement
 */
const createMenuItem = function (name, fileName, description) {
  const menuItem = document.createElement("article");
  const foodImg = document.createElement("img");
  const foodName = document.createElement("h2");
  const foodDescription = document.createElement("p");

  // Add classes
  menuItem.classList.add("menu__item");
  foodImg.classList.add("menu__itemImg");
  foodName.classList.add("menu__itemName");
  foodDescription.classList.add("menu__itemDesc");

  // Create text
  foodName.textContent = name;
  foodDescription.textContent = description;

  // foodImg.src = `../imgs/food/food_${fileName.toLowerCase()}.jpg`;
  foodImg.src = fileName;

  // Add to menuItem
  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
};

const loadMenu = function () {
  // Create elements
  const menu = document.createElement("main");
  const menu__gallery = document.createElement("div");

  menu__gallery.appendChild(
    createMenuItem("Rat tail", Specialty, "This is little chef's signature")
  );
  menu__gallery.appendChild(
    createMenuItem(
      "Linguine",
      Pasta,
      "Pasta | Olives | Special-Tomato Sauce | Famous Meatballs"
    )
  );
  menu__gallery.appendChild(
    createMenuItem("Pilla Pizza", Pizza, "Pinapple | Eggs | Onions | Cilantro")
  );
  menu__gallery.appendChild(
    createMenuItem("Ratatouille", Ratatouille, "Honestly idk whats in this")
  );
  menu__gallery.appendChild(
    createMenuItem(
      "Sosa Sandwich",
      Sandwich,
      "Toasted 5-spice bread | Chili | Mushrooms | Turkey | Chef's Sauce"
    )
  );
  menu__gallery.appendChild(
    createMenuItem(
      "Les Taco Bout This",
      Taco,
      "Roma Tomatoes | Baguette | Cream | Meat | Pate"
    )
  );

  // Add to page
  menu.appendChild(menu__gallery);

  //Add classes(styling)
  menu.classList.add("menu");
  menu__gallery.classList.add("menu__gallery");

  return menu;
};

export default loadMenu;
