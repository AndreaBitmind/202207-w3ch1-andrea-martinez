class Component {
  element;

  constructor(parent, className, tagName) {
    this.element = document.createElement(tagName);
    parent.appendChild(this.element);
    this.element.className = className;
  }
}

export default Component;
