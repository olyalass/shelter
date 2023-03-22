import "./style.scss";
import { Header } from "../../shared_components/header";

const body = document.querySelector("body");
const header = new Header(true, "Pets");
body.appendChild(header.item);
