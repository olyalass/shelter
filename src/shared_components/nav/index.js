import "./style.scss";

export class Nav {
  container;

  constructor(isLight, activePage) {
    this.container = document.createElement("nav");
    this.container.classList.add("nav");
    let linkAbout, linkPets, linkHelp;

    if (activePage === "About") {
      linkAbout = this.createLink("About the shelter", "#", isLight, true);
      linkPets = this.createLink(
        "Our pets",
        "https://rolling-scopes-school.github.io/olyalass-JSFE2023Q1/shelter/build/pets.html",
        isLight
      );
      linkHelp = this.createLink("Help the shelter", "#help", isLight);
    } else {
      linkAbout = this.createLink(
        "About the shelter",
        "https://rolling-scopes-school.github.io/olyalass-JSFE2023Q1/shelter/build/index.html",
        isLight
      );
      linkPets = this.createLink("Our pets", "#", isLight, true);
      linkHelp = this.createLink(
        "Help the shelter",
        "https://rolling-scopes-school.github.io/olyalass-JSFE2023Q1/shelter/build/index.html#help",
        isLight
      );
    }

    const linkContacts = this.createLink("Contacts", "#footer", isLight);

    this.container.append(linkAbout, linkPets, linkHelp, linkContacts);
  }

  createLink(text, link, isLight, isActive = false) {
    const linkItem = document.createElement("a");
    linkItem.classList.add("nav__link");
    linkItem.textContent = text;
    linkItem.setAttribute("href", link);
    isLight
      ? isActive
        ? linkItem.classList.add(
            "nav__link_light",
            "nav__link_active",
            "nav__link_light_active"
          )
        : linkItem.classList.add("nav__link_light")
      : isActive
      ? linkItem.classList.add(
          "nav__link_dark",
          "nav__link_active",
          "nav__link_dark_active"
        )
      : linkItem.classList.add("nav__link_dark");
    return linkItem;
  }
}
