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

    const image = document.createElement("img");
    image.className = "character__picture card-img-top";
    image.alt = "Nombre y familia del personaje";
    image.src = "../../img/bronn.jpg";
    characterDiv.appendChild(image);

    const divTitle = document.createElement("div");
    divTitle.className = "card-body";
    characterDiv.appendChild(divTitle);

    const characterTitle = document.createElement("h2");
    characterTitle.className = "character__name card-title h4";
    characterTitle.textContent = "Nombre y familia";
    divTitle.appendChild(characterTitle);

    const characterInfo = document.createElement("div");
    characterInfo.className = "character-info";
    divTitle.appendChild(characterInfo);
  }
}

export default Card;
