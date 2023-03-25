import { Header } from "../../shared_components/header";
import "./style.scss";
import { Footer } from "../../shared_components/footer";
import { About } from "./components/about";
import { Friends } from "./components/friends";

const body = document.querySelector("body");
const header = new Header(false, "About");
const about = new About();
const friends = new Friends();
const footer = new Footer();
body.append(header.item, about.item, friends.item, footer.item);
