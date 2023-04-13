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
  frPage;
  generatedArr;
  dividedArr;
  pageNum;
  width;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("friends-page");
    this.generateRandomArray();

    const frContainer = document.createElement("div");
    frContainer.classList.add("friends-page__container");
    this.item.appendChild(frContainer);
    const frTitle = document.createElement("h3");
    frTitle.classList.add("friends-page__title");
    frTitle.innerHTML = "Our friends who<br>are looking for a house";
    this.frPage = document.createElement("div");
    this.frPage.classList.add("friends-page__page");
    const frNav = document.createElement("div");
    frNav.classList.add("friends-page__nav");
    frContainer.append(frTitle, this.frPage, frNav);

    this.firstButton = this.createButton("<<");
    this.prevButton = this.createButton("<");
    this.nextButton = this.createButton(">");
    this.lastButton = this.createButton(">>");
    this.pageIndex = document.createElement("button");
    this.pageIndex.classList.add("friends-page__index");
    frNav.append(
      this.firstButton,
      this.prevButton,
      this.pageIndex,
      this.nextButton,
      this.lastButton
    );

    this.animalsArr = animals;

    this.setLayoutToWidth();
    window.addEventListener("resize", () => {
      this.changeLayoutToWidth();
    });
    this.pageIndex.textContent = `${this.pageNum + 1}`;

    this.prevButton.addEventListener("click", () =>
      this.goToPage(this.pageNum - 1)
    );
    this.firstButton.addEventListener("click", () => this.goToPage(0));
    this.nextButton.addEventListener("click", () =>
      this.goToPage(this.pageNum + 1)
    );
    this.lastButton.addEventListener("click", () => this.goToLastPage());
  }

  blockButtons() {
    const isMediumScreen = window.matchMedia("(max-width: 1250px)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (this.pageNum === 0) {
      this.prevButton.setAttribute("disabled", true);
      this.firstButton.setAttribute("disabled", true);
    } else {
      this.prevButton.removeAttribute("disabled");
      this.firstButton.removeAttribute("disabled");
    }
    if (isSmallScreen && this.pageNum === 15) {
      this.nextButton.setAttribute("disabled", true);
      this.lastButton.setAttribute("disabled", true);
    } else if (isMediumScreen && this.pageNum === 7) {
      this.nextButton.setAttribute("disabled", true);
      this.lastButton.setAttribute("disabled", true);
    } else if (!isMediumScreen && this.pageNum === 5) {
      this.nextButton.setAttribute("disabled", true);
      this.lastButton.setAttribute("disabled", true);
    } else {
      this.nextButton.removeAttribute("disabled");
      this.lastButton.removeAttribute("disabled");
    }
  }

  goToLastPage() {
    const isMediumScreen = window.matchMedia("(max-width: 1250px)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    isSmallScreen
      ? this.goToPage(15)
      : isMediumScreen
      ? this.goToPage(7)
      : this.goToPage(5);
  }

  goToPage(page) {
    this.pageNum = page;

    this.frPage.innerHTML = "";
    this.createCards(this.dividedArr[page]);
    this.pageIndex.textContent = `${this.pageNum + 1}`;
    this.blockButtons();
  }

  setLayoutToWidth() {
    const isMediumScreen = window.matchMedia("(max-width: 1250px)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    this.pageNum = 0;
    this.generateRandomArray();
    if (isSmallScreen) {
      this.restructureArr(3);
      this.blockButtons(3);
      this.width = 3;
    } else if (isMediumScreen) {
      this.restructureArr(6);
      this.blockButtons(6);
      this.width = 6;
    } else {
      this.restructureArr(8);
      this.blockButtons(8);
      this.width = 8;
    }
    this.createCards(this.dividedArr[0]);
  }

  changeLayoutToWidth() {
    const isMediumScreen = window.matchMedia("(max-width: 1250px)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (
      (isSmallScreen && this.width !== 3) ||
      (!isMediumScreen && !isSmallScreen && this.width !== 8) ||
      (isMediumScreen && !isSmallScreen && this.width !== 6)
    ) {
      this.frPage.innerHTML = "";
      if (isSmallScreen && this.width !== 3) {
        this.width = 3;
      } else if (isMediumScreen && !isSmallScreen && this.width !== 6) {
        this.width = 6;
      } else if (!isMediumScreen && !isSmallScreen && this.width !== 8) {
        this.width = 8;
      }
      this.restructureArr(this.width);
      this.createCards(this.dividedArr[0]);
      this.pageNum = 0;
      this.pageIndex.textContent = `${this.pageNum + 1}`;
      this.blockButtons();
    }
  }

  restructureArr(perPage) {
    let arr = [];
    if (perPage === 8) {
      for (let i = 0; i < 8; i++) {
        const chunk = [];
        this.generatedArr.forEach((e) => chunk.push(e[i]));
        arr.push(chunk);
      }
      arr.splice(-2);
      this.dividedArr = arr;
    } else if (perPage === 3) {
      this.generatedArr.forEach((e) => e.forEach((i) => arr.push(i)));
      this.dividedArr = [];
      for (let x = 0; x + perPage <= arr.length; x = x + perPage) {
        this.dividedArr.push(arr.slice(x, x + perPage));
      }
    } else this.dividedArr = this.generatedArr;
    console.log(this.dividedArr);
  }

  createButton(name) {
    const bttn = document.createElement("button");
    bttn.classList.add("button", "friends-page__button");
    bttn.textContent = name;
    return bttn;
  }

  createCards(arr) {
    arr.forEach((e) => {
      const pet = this.animalsArr[e];
      const card = new Card(pet);
      this.frPage.append(card.container);
    });
  }

  generateRandomArray() {
    let arr = new Array(8);
    for (let i = 0; i < 8; i++) {
      arr[i] = new Array(6);
    }
    const nums = this.shuffleArray([0, 1, 2, 3, 4, 5, 6, 7]);
    let i = 0,
      j = 0;
    for (let x = 0; x < 8; x++) {
      let counter = 0;
      j = j + x;
      if (j > 5) {
        i++;
        j = j - 6;
      }
      while (i < 8) {
        arr[i][j] = nums[x];
        counter++;
        if (i === 3 && j === 5) {
          i = 4;
          j = 0;
          arr[i][j] = nums[x];
          counter++;
        }
        if (counter === 3) {
          i++;
          j = j + 3;
        } else {
          i++;
          j = j + 2;
        }
        if (j > 5) {
          i++;
          j = j - 6;
        }
      }
      i = 0;
      j = 0;
    }

    this.generatedArr = arr;
  }

  shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
}
