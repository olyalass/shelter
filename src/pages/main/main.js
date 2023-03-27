import "../../style.scss";

import { Header } from "../../shared_components/header";
import { Footer } from "../../shared_components/footer";
import { About } from "./components/about";
import { Friends } from "./components/friends";
import { Help } from "./components/help";
import { Donation } from "./components/donation";

const body = document.querySelector("body");
const header = new Header(false, "About");
const about = new About();
const friends = new Friends();
const help = new Help();
const donation = new Donation();
const footer = new Footer();
body.append(
  header.item,
  about.item,
  friends.item,
  help.container,
  donation.item,
  footer.item
);
