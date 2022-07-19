import Component from "../Component.js";
class Card extends Component {
  constructor(parent, name, family, image, age) {
    super(parent, "character col", "li");
    this.name = name;
    this.family = family;
    this.image = image;
    this.age = age;
    this.state;

    this.render();
  }

  render() {
    const characterDiv = document.createElement("div");
    characterDiv.className = "card character__card";
    this.element.appendChild(characterDiv);

    const img = document.createElement("img");
    img.className = "characterpicture card-img-top";
    img.alt = `${this.name} ${this.family}`;
    img.src = `img/${this.image}`;
    characterDiv.appendChild(img);

    const divTitle = document.createElement("div");
    divTitle.className = "card-body";
    characterDiv.appendChild(divTitle);

    const characterTitle = document.createElement("h2");
    characterTitle.className = "charactername card-title h4";
    characterTitle.textContent = `${this.name} ${this.family}`;
    divTitle.appendChild(characterTitle);

    const characterInfo = document.createElement("div");
    characterInfo.className = "characterinfo";
    divTitle.appendChild(characterInfo);

    const infoList = document.createElement("ul");
    infoList.className = "list-unstyled";
    characterInfo.appendChild(infoList);

    const listElementAge = document.createElement("li");
    listElementAge.textContent = `Edad: ${this.age} años`;
    infoList.appendChild(listElementAge);

    const listElementState = document.createElement("li");
    listElementState.textContent = "Estado:";
    infoList.appendChild(listElementState);

    const listElementThumbsDown = document.createElement("i");
    listElementThumbsDown.className = "fas fa-thumbs-down";
    infoList.appendChild(listElementThumbsDown);

    const listElementThumbsUp = document.createElement("i");
    listElementThumbsUp.className = "fas fa-thumbs-up";
    infoList.appendChild(listElementThumbsUp);
  }
}

export default Card;
