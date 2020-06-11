const apiUrl = "https://randomuser.me/api/";

const onClick = async (genderString) => {
    let gender = getKeyByValue(genders, genderString);
    var response = await generateIdentity(gender);
    var result = response.results[0];

    const idendtity = {
        email : result.email,
        city : result.location.city,
        country : result.location.country,
        state : result.location.state,
        name : {
            first : result.name.first,
            last : result.name.last
        },
        phone : result.phone
    }

    appendProperties(idendtity);
    console.log(response);
}

document.querySelector(".btn").addEventListener("click", onClick);
window.addEventListener('keydown', event => {
    if (event.keyCode === 13)
        onClick("male")
});

const appendProperties = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            appendProperties(obj[key])
        } else {
        document.querySelector('main').insertAdjacentHTML('beforeend', `<p>${key} : ${obj[key]}</p>`);
        }
    })
}

const genders = {
    MALE: 'male',
    FEMALE: 'female'
}

const generateIdentity = async (gender) => {
    let url = apiUrl;

    if (gender) {
        url += `?gender=${gender}`;
    }

    var jsonIdentity = await callApi(url);
    return jsonIdentity;
}

const callApi = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);


