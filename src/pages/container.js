/**
 * @desc cleans container then adds content to it
 * @param {pageBlock} content
 */
const changeContent = function (container, content) {
  container.replaceChildren();
  container.appendChild(content);
};

export default changeContent;
