import "./style.scss";

export class Nav {
  container;
  burgerIcon;
  burgerContainer;
  burgerMenu;
  darkBackground;
  linksArray;
  isSmallScreen;

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
    this.linksArray = [linkAbout, linkPets, linkHelp, linkContacts];

    this.setLayoutToWidth(isLight);
    window.addEventListener("resize", () => {
      this.setLayoutToWidth(isLight);
    });
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

  setLayoutToWidth(islight) {
    if (this.burgerContainer) {
      this.burgerContainer.classList.remove("burger__container_open");
      this.burgerIcon.removeEventListener("click", this.openCloseBurger);
      this.darkBackground.removeEventListener("click", this.closeBurger);
    }
    this.container.innerHTML = "";
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (isSmallScreen) {
      this.darkBackground = document.createElement("div");
      this.darkBackground.classList.add("burger__bg");
      this.burgerIcon = document.createElement("div");
      this.burgerIcon.classList.add("burger__img");
      this.createIcon(islight);
      this.burgerMenu = document.createElement("div");
      islight
        ? this.burgerMenu.classList.add("burger__menu", "burger__menu_light")
        : this.burgerMenu.classList.add("burger__menu");
      this.burgerContainer = document.createElement("div");
      this.burgerContainer.classList.add("burger__container");
      this.burgerContainer.classList.remove("burger__container_open");
      this.burgerIcon.addEventListener("click", () => this.openCloseBurger());
      this.darkBackground.addEventListener("click", () => this.closeBurger());
      this.burgerMenu.append(this.burgerContainer);
      this.linksArray.forEach((e) => {
        e.classList.remove("nav__link_open");
        e.addEventListener("click", () => this.closeBurger());
        this.burgerContainer.append(e);
      });
      this.container.append(
        this.burgerIcon,
        this.burgerMenu,
        this.darkBackground
      );
    } else {
      this.container.innerHTML = "";
      this.linksArray.forEach((e) => this.container.append(e));
    }
  }

  openCloseBurger() {
    if (this.burgerIcon.classList.contains("burger__img_open")) {
      this.closeBurger(this.linksArray);
    } else {
      this.openBurger(this.linksArray);
    }
  }

  openBurger() {
    this.burgerMenu.classList.add("burger__menu_open");
    this.burgerIcon.classList.add("burger__img_open");
    this.darkBackground.classList.add("burger__bg_open");
    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100vw";
    setTimeout(() => {
      this.burgerContainer.classList.add("burger__container_open");
      this.burgerContainer.style.width = "243px";
      this.linksArray.forEach((e) => {
        e.classList.add("nav__link_open");
      });
    }, 400);
  }

  closeBurger() {
    this.burgerContainer.classList.remove("burger__container_open");
    document.body.style.position = "";
    document.body.style.overflow = "";

    this.linksArray.forEach((e) => {
      e.classList.remove("nav__link_open");
    });
    setTimeout(() => {
      this.burgerMenu.classList.remove("burger__menu_open");
      this.burgerIcon.classList.remove("burger__img_open");
      this.darkBackground.classList.remove("burger__bg_open");
      this.burgerContainer.style.width = "0px";
    }, 400);
  }

  createIcon(isLight) {
    for (let i = 0; i < 3; i++) {
      const line = document.createElement("div");
      isLight
        ? line.classList.add("burger__line", "burger__line_light")
        : line.classList.add("burger__line");
      this.burgerIcon.append(line);
    }
  }
}
