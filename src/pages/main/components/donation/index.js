import "./style.scss";

export class Donation {
  item;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("donation");

    const donContainer = document.createElement("div");
    donContainer.classList.add("donation__container");
    this.item.appendChild(donContainer);

    const donImg = document.createElement("img");
    donImg.classList.add("donation__img");
    donImg.setAttribute(
      "src",
      require("../../../../../assets/images/donation-dog.png")
    );
    const donTextBlock = document.createElement("div");
    donTextBlock.classList.add("donation__text-block");
    donContainer.append(donImg, donTextBlock);

    const donTitle = document.createElement("h3");
    donTitle.classList.add("donation__title");
    donTitle.textContent = "You can also make a donation";
    const donSubtitle = document.createElement("p");
    donSubtitle.classList.add("donation__subtitle");
    donSubtitle.textContent = "Name of the bank / Type of bank account";
    const donCard = document.createElement("div");
    donCard.classList.add("donation__card");
    const donText = document.createElement("p");
    donText.classList.add("donation__text");
    donText.textContent =
      "Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
    donTextBlock.append(donTitle, donSubtitle, donCard, donText);

    const donCardImg = document.createElement("img");
    donCardImg.classList.add("donation__card__img");
    donCardImg.setAttribute(
      "src",
      require("../../../../../assets/icons/credit-card.svg")
    );
    const donCardNumber = document.createElement("a");
    donCardNumber.classList.add("donation__card__number");
    donCardNumber.setAttribute("href", "#");
    donCardNumber.textContent = "8380 2880 8028 8791 7435";
    donCard.append(donCardImg, donCardNumber);
  }
}
