import "./style.scss";

export class Card {
  container;
  darkBG;
  petObj;
  popup;
  scroll;

  constructor(petObj) {
    this.container = document.createElement("div");
    this.container.classList.add("card");
    this.petObj = petObj;

    const cardImg = document.createElement("img");
    cardImg.classList.add("card__img");
    cardImg.setAttribute("src", this.petObj.img);
    cardImg.setAttribute("alt", this.petObj.name);
    const cardName = document.createElement("h4");
    cardName.classList.add("card__name");
    cardName.textContent = this.petObj.name;
    const cardButton = document.createElement("button");
    cardButton.classList.add("button");
    cardButton.textContent = "Learn more";

    this.container.append(cardImg, cardName, cardButton);
    this.container.addEventListener("click", () => this.openPopup());
  }

  createPopup() {
    this.popup = document.createElement("div");
    this.popup.classList.add("popup");

    const closeBttn = document.createElement("button");
    closeBttn.classList.add("button");
    closeBttn.addEventListener("click", () => this.closePopup());
    const title = document.createElement("h2");
    title.classList.add("popup__title");
    title.textContent = this.petObj.name;
    const subtitle = document.createElement("h3");
    subtitle.textContent = `${this.petObj.type} - ${this.petObj.breed}`;
    subtitle.classList.add("popup__subtitle");
    const text = document.createElement("p");
    text.classList.add("popup__text");
    text.textContent = this.petObj.description;
    const list = document.createElement("ul");
    list.classList.add("popup__list");
    const age = this.createListItem("Age", this.petObj.age);
    const inoculations = this.createListItem(
      "Inoculations",
      this.petObj.inoculations
    );
    const diseases = this.createListItem("Diseases", this.petObj.diseases);
    const parasites = this.createListItem("Parasites", this.petObj.parasites);
    list.append(age, inoculations, diseases, parasites);
    this.popup.append(title, subtitle, text, list, closeBttn);
    this.darkBG.append(this.popup);
  }

  openPopup() {
    console.log(1);
    this.darkBG = document.createElement("div");
    this.darkBG.classList.add("popup__bg");
    this.darkBG.addEventListener("click", () => this.closePopup());
    document.body.append(this.darkBG);
    console.log(2);
    this.scroll = window.scrollY;
    this.createPopup();
    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100vw";
    document.body.style.top = `-${this.scroll}px`;
  }

  closePopup() {
    this.darkBG.remove();
    document.body.style.position = "";
    document.body.style.overflow = "";
    document.body.style.top = "";
    document.children[0].style.scrollBehavior = "auto";
    window.scrollTo(0, this.scroll);
    document.children[0].style.scrollBehavior = "smooth";
  }

  createListItem(type, info) {
    const item = document.createElement("li");
    item.classList.add("popup__li");
    const text = document.createElement("span");
    const span = document.createElement("span");
    span.classList.add("popup__span");
    span.textContent = `${type}: `;
    Array.isArray(info)
      ? (text.textContent = info.join(", "))
      : (text.textContent = info);
    item.append(span, text);
    return item;
  }
}
