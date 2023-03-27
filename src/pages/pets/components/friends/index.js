import "./style.scss";
import { Card } from "../../../../shared_components/card";
import animals from "../../../../shared_components/animals.json";

export class FriendsPages {
  item;
  firstButton;
  prevButton;
  nextButton;
  lastButton;
  pageIndex;
  animalsArr;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("friends-page");

    const frContainer = document.createElement("div");
    frContainer.classList.add("friends-page__container");
    this.item.appendChild(frContainer);
    const frTitle = document.createElement("h3");
    frTitle.classList.add("friends-page__title");
    frTitle.innerHTML = "Our friends who<br>are looking for a house";
    const frPage = document.createElement("div");
    frPage.classList.add("friends-page__page");
    const frNav = document.createElement("div");
    frNav.classList.add("friends-page__nav");
    frContainer.append(frTitle, frPage, frNav);

    this.firstButton = this.createButton("<<");
    this.firstButton.setAttribute("disabled", true);
    this.prevButton = this.createButton("<");
    this.prevButton.setAttribute("disabled", true);
    this.nextButton = this.createButton(">");
    this.lastButton = this.createButton(">>");
    this.pageIndex = document.createElement("button");
    this.pageIndex.classList.add("friends-page__index");
    this.pageIndex.textContent = "1";
    frNav.append(
      this.firstButton,
      this.prevButton,
      this.pageIndex,
      this.nextButton,
      this.lastButton
    );

    this.animalsArr = animals;
    const katrine = this.createCard("Katrine");
    const jennifer = this.createCard("Jennifer");
    const woody = this.createCard("Woody");
    const sophia = this.createCard("Sophia");
    const timmy = this.createCard("Timmy");
    const charly = this.createCard("Charly");
    const scarlett = this.createCard("Scarlett");
    const freddie = this.createCard("Freddie");
    frPage.append(
      katrine.container,
      jennifer.container,
      woody.container,
      sophia.container,
      timmy.container,
      charly.container,
      scarlett.container,
      freddie.container
    );
  }

  createButton(name) {
    const bttn = document.createElement("button");
    bttn.classList.add("button", "friends-page__button");
    bttn.textContent = name;
    return bttn;
  }

  createCard(petName) {
    const pet = this.animalsArr.filter((e) => e.name === petName)[0];
    return new Card(pet.img, pet.name);
  }
}
