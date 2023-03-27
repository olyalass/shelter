import "./style.scss";

export class Card {
  container;

  constructor(imgLink, name) {
    this.container = document.createElement("div");
    this.container.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card__img");
    cardImg.setAttribute("src", imgLink);
    cardImg.setAttribute("alt", name);
    const cardName = document.createElement("h4");
    cardName.classList.add("card__name");
    cardName.textContent = name;
    const cardButton = document.createElement("button");
    cardButton.classList.add("button");
    cardButton.textContent = "Learn more";

    this.container.append(cardImg, cardName, cardButton);
  }
}
