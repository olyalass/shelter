import "./style.scss";
import { Nav } from "../nav";

export class Header {
  item;

  constructor(isLight, activePage) {
    this.item = document.createElement("header");
    isLight
      ? this.item.classList.add("header", "header_light")
      : this.item.classList.add("header", "header_dark");

    const container = document.createElement("div");
    container.classList.add("header__container");
    const logo = document.createElement("div");
    logo.classList.add("logo");
    const logoTitle = document.createElement("h1");
    isLight
      ? logoTitle.classList.add("logo__title", "logo__title_light")
      : logoTitle.classList.add("logo__title", "logo__title_dark");
    logoTitle.textContent = "Cozy House";
    const logoText = document.createElement("p");
    isLight
      ? logoText.classList.add("logo__text", "logo__text_light")
      : logoText.classList.add("logo__text", "logo__text_dark");
    logoText.textContent = "Shelter for pets in Boston";
    logo.append(logoTitle, logoText);

    const nav = new Nav(isLight, activePage);

    container.append(logo, nav.container);

    if (activePage === "About") {
      const notOnlyBlock = document.createElement("div");
      notOnlyBlock.classList.add("not-only");
      const notOnlyContainer = document.createElement("div");
      notOnlyContainer.classList.add("not-only__container");
      const notOnlyTitle = document.createElement("h2");
      notOnlyTitle.textContent = "Not only people need a house";
      notOnlyTitle.classList.add("not-only__title");
      const notOnlyText = document.createElement("p");
      notOnlyText.classList.add("not-only__text");
      notOnlyText.textContent =
        "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!";
      const notOnlyButton = document.createElement("button");
      notOnlyButton.textContent = "Make a friend";
      notOnlyButton.classList.add("button", "button_filled");
      notOnlyContainer.append(notOnlyTitle, notOnlyText, notOnlyButton);
      const notOnlyImg = document.createElement("div");
      notOnlyImg.classList.add("not-only__img");
      notOnlyBlock.append(notOnlyContainer, notOnlyImg);
      this.item.append(container, notOnlyBlock);
    } else this.item.appendChild(container);
  }
}
