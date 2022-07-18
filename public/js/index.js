import allCharacters from "./components/personajes.js";
import Component from "./components/Component.js";
import Card from "./components/Card/Card.js";

new Component(document.body, "app container", "div");
const mainDiv = document.querySelector(".app.container");

new Component(mainDiv, "characters-list row list-unstyled", "ul");
const cardList = document.querySelector(".characters-list.row.list-unstyled");

/* new Component(cardList, "cardList", "li"); */

new Card(cardList);
