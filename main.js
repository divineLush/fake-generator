
const click = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://api.namefake.com/english-united-states/female/";
    const url = proxyUrl + apiUrl;
    const json = await fetchAsync(url);
    console.log(json);
}

document.querySelector(".app__btn").addEventListener("click", click);


const fetchAsync = async (url) => {
    let response = await fetch(url);
    return response.json();
}

