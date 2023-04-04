import "./style.scss";
import animals from "../../../../../shared_components/animals.json";
import { Card } from "../../../../../shared_components/card";
export class Slider {
  item;
  animalsArr;
  cards;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("slider");

    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider__container");
    this.item.appendChild(sliderContainer);
    const leftArrow = document.createElement("img");
    leftArrow.setAttribute(
      "src",
      require("../../../../../../assets/icons/arrow_left.svg")
    );
    leftArrow.classList.add("slider__arrow", "slider__arrow_left");
    this.cards = document.createElement("div");
    this.cards.classList.add("slider__cards");
    const rightArrow = document.createElement("img");
    rightArrow.setAttribute(
      "src",
      require("../../../../../../assets/icons/arrow_right.svg")
    );
    rightArrow.classList.add("slider__arrow", "slider__arrow_right");
    sliderContainer.append(leftArrow, this.cards, rightArrow);

    let id = 1;
    this.animalsArr = animals;
    this.animalsArr.forEach((e) => {
      e.id = id;
      id++;
    });
    const katrine = this.createCard("Katrine");
    const jennifer = this.createCard("Jennifer");
    const woody = this.createCard("Woody");

    this.setLayoutToWidth(katrine, jennifer, woody);
    window.addEventListener("resize", () => {
      this.cards.innerHTML = "";
      this.setLayoutToWidth(katrine, jennifer, woody);
    });
  }

  createCard(petName) {
    const pet = this.animalsArr.filter((e) => e.name === petName)[0];
    return new Card(pet.img, pet.name);
  }

  setLayoutToWidth(katrine, jennifer, woody) {
    const isMediumScreen = window.matchMedia("(max-width: 1050px)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    isSmallScreen
      ? this.cards.append(katrine.container)
      : isMediumScreen
      ? this.cards.append(katrine.container, jennifer.container)
      : this.cards.append(
          katrine.container,
          jennifer.container,
          woody.container
        );
  }
}
