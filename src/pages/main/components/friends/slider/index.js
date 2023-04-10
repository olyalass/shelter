import "./style.scss";
import "../../../../../style.scss";
import animals from "../../../../../shared_components/animals.json";
import { Card } from "../../../../../shared_components/card";
export class Slider {
  item;
  animalsArr;
  cards;
  petsIndexes = [];
  currSlideIndxes = [];
  newSlideIndexes;
  prevSlideIndexes;
  currSlide;
  newSlide;
  prevSlide;
  width;
  leftArrow;
  rightArrow;
  lastClick;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("slider");

    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider__container");
    this.item.appendChild(sliderContainer);
    this.leftArrow = document.createElement("button");
    this.leftArrow.classList.add(
      "slider__arrow",
      "slider__arrow_left",
      "button"
    );
    this.cards = document.createElement("div");
    this.cards.classList.add("slider__cards");
    this.rightArrow = document.createElement("button");
    this.rightArrow.classList.add(
      "slider__arrow",
      "slider__arrow_right",
      "button"
    );
    sliderContainer.append(this.leftArrow, this.cards, this.rightArrow);

    let id = 1;
    this.animalsArr = animals;
    this.animalsArr.forEach((e) => {
      e.id = id;
      id++;
    });

    this.setLayoutToWidth();
    this.leftArrow.addEventListener("click", () => {
      this.leftArrow.setAttribute("disabled", "true");
      this.width === "big"
        ? this.moveSlide(3, true)
        : this.width === "medium"
        ? this.moveSlide(2, true)
        : this.moveSlide(1, true);
      setTimeout(() => {
        this.lastClick = "left";
        this.leftArrow.removeAttribute("disabled");
      }, 1000);
    });
    this.rightArrow.addEventListener("click", () => {
      this.rightArrow.setAttribute("disabled", "true");

      this.width === "big"
        ? this.moveSlide(3, false)
        : this.width === "medium"
        ? this.moveSlide(2, false)
        : this.moveSlide(1, false);
      setTimeout(() => {
        this.lastClick = "right";
        this.rightArrow.removeAttribute("disabled");
      }, 1000);
    });

    window.addEventListener("resize", () => {
      this.changeLayout();
    });
  }

  createCards(isLeft) {
    if (typeof isLeft !== "boolean") {
      this.currSlide = document.createElement("div");
      this.currSlide.classList.add("slider__cards__slide");
      this.cards.append(this.currSlide);
      this.currSlideIndexes.forEach((e) => {
        const card = new Card(this.animalsArr[e]);
        this.currSlide.append(card.container);
      });
    } else {
      this.newSlide = document.createElement("div");
      this.newSlide.classList.add("slider__cards__slide");
      if (isLeft) {
        this.cards.prepend(this.newSlide);
      } else {
        this.cards.append(this.newSlide);
      }
      this.newSlideIndexes.forEach((e) => {
        const card = new Card(this.animalsArr[e]);
        this.newSlide.append(card.container);
      });
    }
  }

  setLayoutToWidth() {
    const isMediumScreen = window.matchMedia("(max-width: 1050px)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (this.currSlide) {
      this.currSlide.remove();
      this.currSlideIndexes = [];
    }
    if (this.prevSlide) {
      this.prevSlide.remove();
      this.petsIndexes = [];
    }
    if (isSmallScreen) {
      this.currSlideIndxes = this.generateNewIndexes(1, null);
      this.width = "small";
    } else if (isMediumScreen) {
      this.currSlideIndxes = this.generateNewIndexes(2, null);
      this.width = "medium";
    } else {
      this.currSlideIndxes = this.generateNewIndexes(3, null);
      this.width = "big";
    }
    this.createCards(null);
  }

  changeLayout() {
    const isMScreen = window.matchMedia("(max-width: 1050px)").matches;
    const isSScreen = window.matchMedia("(max-width: 767px)").matches;
    if (
      (isSScreen && this.width !== "small") ||
      (isMScreen && !isSScreen && this.width !== "medium") ||
      (!isMScreen && this.width !== "big")
    ) {
      this.lastClick = "";
      this.setLayoutToWidth();
    }
  }

  generateNewIndexes(petsPerPage, isLeft) {
    const arr = [];
    if (typeof isLeft === "boolean") {
      for (let i = 0; i < petsPerPage; i++) {
        let index = Math.floor(Math.random() * 8);
        while (
          arr.indexOf(index) !== -1 ||
          this.currSlideIndexes.indexOf(index) !== -1
        ) {
          index = Math.floor(Math.random() * 8);
        }
        arr.push(index);
        this.newSlideIndexes = arr;
      }
    } else {
      for (let i = 0; i < petsPerPage; i++) {
        let index = Math.floor(Math.random() * 8);
        while (arr.indexOf(index) !== -1) {
          index = Math.floor(Math.random() * 8);
        }
        arr.push(index);
        this.currSlideIndexes = arr;
      }
    }
  }

  moveSlide(petsPerPage, isLeft) {
    if (this.prevSlide) {
      this.prevSlide.classList.remove(
        "animation-right-to-center",
        "animation-left-to-center",
        "animation-center-to-left",
        "animation-center-to-right"
      );
    }
    this.currSlide.classList.remove(
      "animation-right-to-center",
      "animation-left-to-center",
      "animation-center-to-left",
      "animation-center-to-right"
    );
    if (
      (this.lastClick === "right" && isLeft) ||
      (this.lastClick === "left" && !isLeft)
    ) {
      if (isLeft) {
        this.prevSlide.classList.add("animation-right-to-center");
        this.currSlide.classList.add("animation-center-to-left");
      } else {
        this.prevSlide.classList.add("animation-left-to-center");
        this.currSlide.classList.add("animation-center-to-right");
      }
      setTimeout(() => {
        const temp = this.prevSlide;
        this.prevSlide = this.currSlide;
        this.currSlide = temp;
        const tempI = this.prevSlideIndexes;
        this.prevSlideIndexes = this.currSlideIndexes;
        this.currSlideIndexes = tempI;
      }, 1000);
    } else {
      this.generateNewIndexes(petsPerPage, true);
      if (isLeft) {
        this.createCards(true);
        if (this.prevSlide) {
          this.prevSlide.remove();
        }
        this.currSlide.classList.add("animation-center-to-left");
        this.newSlide.classList.add("animation-right-to-center");
      } else {
        this.createCards(false);
        if (this.prevSlide) {
          this.prevSlide.remove();
        }
        this.currSlide.classList.add("animation-center-to-right");
        this.newSlide.classList.add("animation-left-to-center");
      }

      setTimeout(() => {
        this.prevSlide = this.currSlide;
        this.prevSlideIndexes = this.currSlideIndexes;
        this.currSlide = this.newSlide;
        this.currSlideIndexes = this.newSlideIndexes;
      }, 1000);
    }
  }
}
