/**
 * @desc creates tabs
 * @param {listElement} list
 * @param {int} numTabs
 */
const createTabs = function (list, numTabs) {
  for (let i = 0; i < numTabs; i++) {
    let tab = document.createElement("li");
    list.appendChild(tab);
    tab.classList.add("nav__item");
  }
};

const loadHeader = function () {
  //create elements
  const header = document.createElement("nav");
  const nav__logo = document.createElement("div");
  const nav__tab = document.createElement("ul");
  createTabs(nav__tab, 3);

  //add to header
  header.appendChild(nav__logo);
  header.appendChild(nav__tab);

  //add style
  header.classList.add("nav", "nav--sticky");
  nav__logo.classList.add("nav__logo");
  nav__tab.classList.add("nav__tab");

  // add text
  nav__logo.textContent = "Little Chef's Cuisines";
  nav__tab.childNodes[0].textContent = "Home";
  nav__tab.childNodes[1].textContent = "Menu";
  nav__tab.childNodes[2].textContent = "Contact";

  return header;
};

export default loadHeader;
