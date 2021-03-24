import menu from "../menu.json"
import cards from "../template/card-menu.hbs"

const cardsList = document.querySelector(".js-menu")
const cardHTMLTemplate = cards(menu);
cardsList.insertAdjacentHTML("beforeend", cardHTMLTemplate)