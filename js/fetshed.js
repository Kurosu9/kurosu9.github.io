const ani = document.querySelector("#ani");
const result = document.querySelector("#result");

ani.addEventListener("click", getRandomData);

function getRandomData() {
    fetch("https://api.waifu.pics/sfw/happy")
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `<img src="${data.url}" width="300px" height="250px">`
        })
}