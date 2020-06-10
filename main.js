const onClick = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://api.namefake.com/english-united-states/female/";
    const url = proxyUrl + apiUrl;
    const res = await (async () => {
        const response = await fetch(url);

        return response.json();
    })();
    console.log(res);
}

document.querySelector(".app__btn").addEventListener("click", onClick);
window.addEventListener('keydown', event => {
    if (event.keyCode === 13)
        onClick()
});

