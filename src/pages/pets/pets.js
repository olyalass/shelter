import "../../style.scss";
import { Header } from "../../shared_components/header";
import { Footer } from "../../shared_components/footer";
import { FriendsPages } from "./components/friends";

const body = document.querySelector("body");
const header = new Header(true, "Pets");
const footer = new Footer();
const friends = new FriendsPages();
body.append(header.item, friends.item, footer.item);
