import "./style.scss";

export class About {
  item;

  constructor() {
    this.item = document.createElement("div");
    this.item.classList.add("about");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about__container");

    this.item.appendChild(aboutContainer);

    const aboutImg = document.createElement("div");
    aboutImg.classList.add("about__img");

    const aboutBlock = document.createElement("div");
    aboutBlock.classList.add("about__block");

    aboutContainer.append(aboutImg, aboutBlock);

    const aboutTitle = document.createElement("h2");
    aboutTitle.classList.add("about__title");
    aboutTitle.textContent = "About the shelter “Cozy House”";
    const aboutFirstP = document.createElement("p");
    aboutFirstP.classList.add("about__text");
    aboutFirstP.textContent =
      "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.";
    const aboutSecondP = document.createElement("p");
    aboutSecondP.classList.add("about__text");
    aboutSecondP.textContent =
      "We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.";
    aboutBlock.append(aboutTitle, aboutFirstP, aboutSecondP);
  }
}
