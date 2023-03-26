import { Header } from "../../shared_components/header";
import "./style.scss";
import { Footer } from "../../shared_components/footer";
import { About } from "./components/about";
import { Friends } from "./components/friends";
import { Help } from "./components/help";

const body = document.querySelector("body");
const header = new Header(false, "About");
const about = new About();
const friends = new Friends();
const help = new Help();
const footer = new Footer();
body.append(header.item, about.item, friends.item, help.container, footer.item);
