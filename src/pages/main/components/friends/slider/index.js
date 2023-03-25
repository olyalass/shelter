import "./style.scss";
import animals from "../../../../../shared_components/animals.json";
import { Card } from "../../../../../shared_components/card";
import "../../../../../../assets/icons/arrow_left.svg";
import "../../../../../../assets/icons/arrow_right.svg";
export class Slider {
  item;
  animalsArr;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("slider");

    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider__container");
    this.item.appendChild(sliderContainer);
    const leftArrow = document.createElement("img");
    leftArrow.setAttribute(
      "src",
      "../../../../../../assets/icons/arrow_left.svg"
    );
    leftArrow.classList.add("slider__arrow", "slider__arrow_left");
    const cards = document.createElement("div");
    cards.classList.add("slider__cards");
    const rightArrow = document.createElement("img");
    rightArrow.setAttribute(
      "src",
      "../../../../../../assets/icons/arrow_right.svg"
    );
    rightArrow.classList.add("slider__arrow", "slider__arrow_right");
    sliderContainer.append(leftArrow, cards, rightArrow);

    let id = 1;
    this.animalsArr = animals;
    this.animalsArr.forEach((e) => {
      e.id = id;
      id++;
    });
    const katrine = this.createCard("Katrine");
    const jennifer = this.createCard("Jennifer");
    const woody = this.createCard("Woody");
    cards.append(katrine.container, jennifer.container, woody.container);
  }

  createCard(petName) {
    const pet = this.animalsArr.filter((e) => e.name === petName)[0];
    return new Card(pet.img, pet.name);
  }
}
