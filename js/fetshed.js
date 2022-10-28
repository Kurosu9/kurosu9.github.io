const loadData = () => {
    fetch(
        'https://api.catboys.com/img'
    ).then((resp) => {
        return resp.json();
    }).then((data) => {
        console.log(data.file);
        document.getElementById("anime").src = data.url;
    }).catch(() => {
        console.log("error");
    })
}