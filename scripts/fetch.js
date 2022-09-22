
let SearchNews = async (url) => {


    //  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`
    let res = await fetch(url);

    let data = await res.json();
    return data.articles;

    // console.log(data)

};


let append = (data, parent) => {

    data.forEach(({ urlToImage, title, description, content }) => {

        let box = document.createElement("div");
        box.setAttribute("class", "box")

        let req = {
            urlToImage, title, content
        }
        box.addEventListener("click", function () {
            nextPage(req)
        });

        let div1 = document.createElement("div");
        let details = document.createElement("div");
        details.setAttribute("class", "news")


        let img = document.createElement("img");
        img.src = urlToImage;
        img.setAttribute("class", "images")

        let name = document.createElement("h3");
        name.innerText = title

        let detail = document.createElement("p");
        detail.innerText = description


        details.append(title, description);
        div1.append(img);
        box.append(div1, details);
        parent.append(box)

    })

};

let nextPage = (req) => {
    localStorage.setItem("info", JSON.stringify(req));
    window.location.href = "news.html"
}
let search = async (e) => {
    if (e.key == "Enter") {
        let query = document.getElementById("search_input").value;
        let url = `https://masai-api.herokuapp.com/news?q=${query}`
        let news = await SearchNews(url);

        console.log(news);
        localStorage.setItem("news", JSON.stringify(news))
        window.location.href = "search.html"
    }
};

export { SearchNews, append, search }