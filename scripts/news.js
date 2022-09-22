// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
import { search } from "../scripts/fetch.js"


document.getElementById("navbar").innerHTML = navbar();

document.getElementById("search_input").addEventListener("keydown", search);


let stored = JSON.parse(localStorage.getItem("info"))


let parent = document.getElementById("detailed_news");

let img = document.createElement("img");
img.src = stored.urlToImage
img.style.width = "700px";
img.style.height = "500px"
img.style.marginLeft = "25%"

let name = document.createElement("h3");
name.innerText = stored.title
name.style.width = "700px";
name.style.marginLeft = "25%"

let content = document.createElement("p");
content.innerText = stored.content
content.style.width = "700px";
content.style.marginLeft = "25%"

parent.append(img, name, content)
