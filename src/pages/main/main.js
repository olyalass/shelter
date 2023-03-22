import { Header } from "../../shared_components/header";
import "./style.scss";

const body = document.querySelector("body");
const header = new Header(false, "About");
body.appendChild(header.item);
