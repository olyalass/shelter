import "./style.scss";
import { Slider } from "./slider";

export class Friends {
  item;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("friends");
    this.item.setAttribute("id", "friends");
    const container = document.createElement("div");
    container.classList.add("friends__container");
    this.item.appendChild(container);

    const friendsTitle = document.createElement("h3");
    friendsTitle.classList.add("friends__title");
    friendsTitle.innerHTML = "Our friends who <br>are looking for a house";
    const friendsContainer = new Slider();
    const friendsButton = document.createElement("a");
    friendsButton.classList.add("button", "button_filled");
    friendsButton.textContent = "Get to know the rest";
    friendsButton.setAttribute(
      "href",
      "https://rolling-scopes-school.github.io/olyalass-JSFE2023Q1/shelter/build/pets.html"
    );
    container.append(friendsTitle, friendsContainer.item, friendsButton);
  }
}
