import Component from "../Component.js";

class Button extends Component {
  constructor(parent, text) {
    super(parent, "character__action btn", "button");
    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}

export default Button;
