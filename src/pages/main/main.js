import { Header } from "../../shared_components/header";
import "./style.scss";
import { Footer } from "../../shared_components/footer";

const body = document.querySelector("body");
const header = new Header(false, "About");
const footer = new Footer();
body.append(header.item, footer.item);
