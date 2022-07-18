import allCharacters from "./components/personajes.js";
import Component from "./components/Component.js";
import Card from "./components/Card/Card.js";

new Component(document.body, "main-container", "div");
const mainDiv = document.querySelector(".main-container");

new Component(mainDiv, "mainList", "ul");
/* const cardList = document.querySelector(".mainList"); */

/* new Component(cardList, "cardList", "li"); */

new Card(mainDiv);
