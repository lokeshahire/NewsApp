// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import { navbar } from "../components/navbar.js";
import { SearchNews, append, search } from "../scripts/fetch.js"

document.getElementById("navbar").innerHTML = navbar();

let parent = document.getElementById("results")

document.getElementById("search_input").addEventListener("keydown", search);

let countries = document.getElementById("sidebar").children;



async function csearch() {
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${this.id}`
    let q = await SearchNews(url);
    parent.innerHTML = null;
    append(q, parent)
}

for (let curr of countries) {
    curr.addEventListener("click", csearch)
}
let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`

let q = await SearchNews(url)
append(q, parent)

let nextPage = (req) => {
    localStorage.setItem("info", JSON.stringify(req));
    window.location.href = "news.html"
}