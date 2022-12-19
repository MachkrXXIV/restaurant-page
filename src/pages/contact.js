import capitalize from "./helpers/capitalize";
const numOfFields = 3;

const createField = function (name) {
  const fieldGroup = document.createElement("div");
  const label = document.createElement("label");
  const field = document.createElement("input");

  label.setAttribute("for", name);

  field.type = "text";
  field.name = name;
  field.id = name;
  field.required = true;
  field.placeholder = capitalize(name);
  field.classList.add("field");

  fieldGroup.appendChild(label);
  fieldGroup.appendChild(field);

  fieldGroup.classList.add("fieldGroup");

  return fieldGroup;
};

const loadContact = function () {
  // create elements
  const contact = document.createElement("main");
  const information = document.createElement("section");
  const subtitle = document.createElement("h2");
  const address = document.createElement("p");
  const hours = document.createElement("p");
  const phone = document.createElement("p");
  const form = document.createElement("form");
  const nameField = createField("name");
  const emailField = createField("email");
  const messageField = createField("message");
  const submitBtn = document.createElement("button");

  //append
  information.append(subtitle, address, hours, phone);
  contact.append(form, information);

  form.append(nameField, emailField, messageField, submitBtn);

  // style
  contact.classList.add("contact");
  subtitle.classList.add("contact__subtitle");
  form.classList.add("contact__form");

  // text
  submitBtn.textContent = "Submit";

  return contact;
};

export default loadContact;
