import Component from "../Component.js";

class Card extends Component {
  constructor(parent) {
    super(parent, "characterCol", "li");

    this.render();
  }

  render() {
    const characterDiv = document.createElement("div");
    characterDiv.className = "card character__card";

    this.element.appendChild(characterDiv);
  }
}

export default Card;
