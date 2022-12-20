import capitalize from "./helpers/capitalize";
import { Loader } from "@googlemaps/js-api-loader";
const numOfFields = 3;

const createField = function (name, isTextArea, type = "text") {
  const fieldGroup = document.createElement("div");
  const label = document.createElement("label");
  // const field = document.createElement("input");
  let field;

  if (isTextArea) {
    field = document.createElement("textarea");
    field.rows = 12;
    field.cols = 30;
  } else {
    field = document.createElement("input");
    field.type = type;
  }

  label.setAttribute("for", name);

  field.name = name;
  field.id = name;
  field.size = 15;
  field.required = true;
  field.placeholder = capitalize(name);
  field.classList.add("field");

  fieldGroup.appendChild(label);
  fieldGroup.appendChild(field);

  fieldGroup.classList.add("contact__field");

  return fieldGroup;
};

const loadContact = function () {
  // create elements
  const contact = document.createElement("main");
  const form = document.createElement("form");
  const map = document.createElement("iframe");
  const information = document.createElement("section");
  const subtitle = document.createElement("h2");
  const address = document.createElement("p");
  const hours = document.createElement("p");
  const phone = document.createElement("p");
  const nameField = createField("name");
  const emailField = createField("email", false, "email");
  const messageField = createField("message", true);
  const submitBtn = document.createElement("button");

  // append
  contact.append(form, information);
  form.append(subtitle, nameField, emailField, messageField, submitBtn);
  information.append(map, address, hours, phone);

  // style
  contact.classList.add("contact");
  subtitle.classList.add("contact__subtitle");
  form.classList.add("contact__form");
  information.classList.add("contact__information");
  submitBtn.classList.add("contact__submit");
  map.setAttribute("id", "map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2648.6496008191803!2d-94.15441461087083!3d36.09138171452749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1671485128309!5m2!1sen!2sus"
  );

  // text
  address.textContent = "2190 N College Avenue, Fayetteville, AR 72701";
  hours.textContent = "Mon-Thur 10:00am-10:00pm | Fri-Sun 11:00am-10:00pm";
  phone.textContent = "555-555-5555";
  subtitle.textContent = "Shoot the rat gang a message!";
  submitBtn.textContent = "Submit";

  return contact;
};

export default loadContact;
