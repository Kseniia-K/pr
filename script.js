const serverURL = "http://localhost:3000/";
const btn = document.querySelector("button");
const txt = document.querySelector("input");

btn.addEventListener("click", getLinks);

function getLinks(){
    let keyword = txt.value;
    let fullUrl = serverURL + "?keyword=" + keyword;
    fetch(fullUrl)
    .then((response) => {
        console.log(response);
    })
}