import "./style.scss";
import { Header } from "../../shared_components/header";
import { Footer } from "../../shared_components/footer";

const body = document.querySelector("body");
const header = new Header(true, "Pets");
const footer = new Footer();
body.append(header.item, footer.item);
