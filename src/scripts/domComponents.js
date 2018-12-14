const domComponents = {
  createDomElement({ elementType, content = null, cssClass = '', attributes = {} }) {
    const element = document.createElement(elementType);
    element.textContent = content;
    if (cssClass) {
      element.classList.add(cssClass);
    };
    if (elementType === "button" && content === "delete lego from json") {
      element.addEventListener("click", eventListeners.deleteButton)
    };
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    };
    console.log(elementType);
    return element;
  },
  
};