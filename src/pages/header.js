/**
 * @desc creates tabs
 * @param {listElement} list
 * @param {int} numTabs
 */
const createTabs = function (list, numTabs) {
  let tabs = [];

  for (let i = 0; i < numTabs; i++) {
    let tab = document.createElement("li");
    list.appendChild(tab);
    tab.classList.add("nav__item");
    tabs.push(tab);
  }
  return tabs;
};

const setTabEndpoint = function (tabsList) {
  tabsList.foreach((tab) => {
    let name = tab.textContent.toLowerCase();
    tab.classList.add(`${name}`);
  });
};

const loadHeader = function () {
  //create elements
  const header = document.createElement("nav");
  const nav__logo = document.createElement("div");
  const nav__tab = document.createElement("ul");
  const tabs = createTabs(nav__tab, 3);

  //add to header
  header.appendChild(nav__logo);
  header.appendChild(nav__tab);

  //add style
  header.classList.add("nav", "nav--sticky");
  nav__logo.classList.add("nav__logo");
  nav__tab.classList.add("nav__tab");
  tabs[0].classList.add("nav__home");
  tabs[1].classList.add("nav__menu");
  tabs[2].classList.add("nav__contact");

  // add text
  nav__logo.textContent = "Little Chef's Cuisines";
  nav__tab.childNodes[0].textContent = "Home";
  nav__tab.childNodes[1].textContent = "Menu";
  nav__tab.childNodes[2].textContent = "Contact";

  return header;
};

export default loadHeader;
