import "./style.scss";

export class Footer {
  item;

  constructor() {
    this.item = document.createElement("footer");
    this.item.classList.add("footer");

    const container = document.createElement("div");
    container.classList.add("footer__container");
    this.item.append(container);

    const footerWrap = document.createElement("div");
    footerWrap.classList.add("footer__wrap");
    const footerImg = document.createElement("div");
    footerImg.classList.add("footer__img");

    container.append(footerWrap, footerImg);

    const firstBlock = document.createElement("div");
    firstBlock.classList.add("footer__block");
    const secondBlock = document.createElement("div");
    secondBlock.classList.add("footer__block");

    footerWrap.append(firstBlock, secondBlock);

    const firstTitle = document.createElement("h3");
    firstTitle.classList.add("footer__title");
    firstTitle.textContent = "For questions and suggestions";
    const email = document.createElement("div");
    email.classList.add("footer__contact");
    const emailImg = document.createElement("div");
    emailImg.classList.add("footer__email");
    const emailLink = document.createElement("a");
    emailLink.classList.add("footer__contact__text");
    emailLink.setAttribute("href", "mailto:email@shelter.com");
    emailLink.textContent = "email@shelter.com";
    email.append(emailImg, emailLink);
    const phone = document.createElement("div");
    phone.classList.add("footer__contact");
    const phoneImg = document.createElement("div");
    phoneImg.classList.add("footer__phone");
    const phoneLink = document.createElement("a");
    phoneLink.textContent = "+13 674 567 75 54";
    phoneLink.classList.add("footer__contact__text");
    phoneLink.setAttribute("href", "tel:+13 674 567 75 54");
    phone.append(phoneImg, phoneLink);
    firstBlock.append(firstTitle, email, phone);

    const secondTitle = document.createElement("h3");
    secondTitle.classList.add("footer__title");
    secondTitle.textContent = "We are waiting for your visit";
    const locFirst = document.createElement("div");
    locFirst.classList.add("footer__contact");
    const locFirstImg = document.createElement("div");
    locFirstImg.classList.add("footer__loc");
    const locFirstLink = document.createElement("a");
    locFirstLink.classList.add("footer__contact__text");
    locFirstLink.setAttribute("href", "https://goo.gl/maps/8kGqPZ8Bd8vAznAM8");
    locFirstLink.textContent =
      "1 Central Street, Boston (entrance from the store)";
    locFirst.append(locFirstImg, locFirstLink);
    const locSecond = document.createElement("div");
    locSecond.classList.add("footer__contact");
    const locSecondImg = document.createElement("div");
    locSecondImg.classList.add("footer__loc");
    const locSecondLink = document.createElement("a");
    locSecondLink.textContent = "18 South Park, London";
    locSecondLink.classList.add("footer__contact__text");
    locSecondLink.setAttribute("href", "https://goo.gl/maps/fXCgJvgwJZkA12wB8");
    locSecond.append(locSecondImg, locSecondLink);

    secondBlock.append(secondTitle, locFirst, locSecond);
  }
}
