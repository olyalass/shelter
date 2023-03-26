import "./style.scss";

export class Help {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("help");

    const helpTitle = document.createElement("h3");
    helpTitle.classList.add("help__title");
    helpTitle.innerHTML = "How you can help<br>our shelter";
    const helpMesh = document.createElement("div");
    helpMesh.classList.add("help__mesh");
    const food = this.createItems("Pet food", "./icons/help-food.svg");
    const transport = this.createItems(
      "Transportation",
      "./icons/help-transportation.svg"
    );
    const toys = this.createItems("Toys", "./icons/help-toys.svg");
    const bowls = this.createItems("Bowls and cups", "./icons/help-bowls.svg");
    const shampoo = this.createItems("Shampoos", "./icons/help-shampoos.svg");
    const vitamin = this.createItems("Vitamins", "./icons/help-vitamins.svg");
    const med = this.createItems("Medicines", "./icons/help-medicines.svg");
    const collar = this.createItems(
      "Collars / leashes",
      "./icons/help-collars.svg"
    );
    const sleep = this.createItems(
      "Sleeping areas",
      "./icons/help-sleepingarea.svg"
    );
    helpMesh.append(
      food,
      transport,
      toys,
      bowls,
      shampoo,
      vitamin,
      med,
      collar,
      sleep
    );
    this.container.append(helpTitle, helpMesh);
  }

  createItems(title, img) {
    const item = document.createElement("div");
    item.classList.add("help__item");
    const image = document.createElement("img");
    image.classList.add("help__img");
    image.setAttribute("src", img);
    const helpName = document.createElement("h4");
    helpName.classList.add("help__name");
    helpName.textContent = title;
    item.append(image, helpName);
    return item;
  }
}
