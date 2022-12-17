const numOfFields = 3;

const createField = function (form, name) {
  const fieldGroup = document.createElement("div");
  const label = document.createElement("label");
  const field = document.createElement("input");

  field.type = "text";
  field.name = name;
  field.id = name;
  field.required = true;

  fieldGroup.appendChild();
};

const loadContact = function () {
  // create elements
  const contact = document.createElement("main");
  const subtitle = document.createElement("h2");
  const address = document.createElement("p");
  const hours = document.createElement("p");
  const phone = document.createElement("p");
  const message = document.createElement("h3");
  const form = document.createElement("form");
  const nameField = document.createElement("input");
  const emailField = document.createElement("input");
  const messageField = document.createElement("input");
  const submitBtn = document.createElement("button");

  //append

  // style
  // text
};
