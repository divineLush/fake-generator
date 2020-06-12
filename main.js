const apiUrl = "https://randomuser.me/api/";
const resultsContainerClass = '.content__results-container';

const onClick = async () => {
    const getKeyByValue = (object, value) =>
        Object.keys(object).find(key => object[key] === value);

    const generateIdentity = async (gender) => {
        const callApi = async (url) => {
            const response = await fetch(url);
            return response.json();
        }

        let url = apiUrl;
        if (gender)
            url += `?gender=${gender}`;

        return await callApi(url)
    }

    const gender = getKeyByValue(genders, genderString);
    const response = await generateIdentity(gender);
    const result = response.results[0];

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

    document.querySelector(resultsContainerClass).innerHTML = '';
    appendProperties(idendtity);
    console.log(response);
}

const appendProperties = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object')
            appendProperties(obj[key])
        else
            document
                .querySelector(resultsContainerClass)
                .insertAdjacentHTML('beforeend', `<p><strong>${key}</strong> : ${obj[key]}</p>`);
    })
}

const genders = {
    MALE: 'male',
    FEMALE: 'female'
}

document
    .querySelector(".content__control-panel__btn")
    .addEventListener("click", onClick);

window.addEventListener('keydown', event => {
    if (event.keyCode === 13)
        onClick("male")
});

document.querySelector('#nonbinary').checked = true;
let genderString = 'nonbinary';
document
    .querySelectorAll('input[name="group"]')
    .forEach(el => el
        .addEventListener('click', e => { genderString = e.currentTarget.id; console.log(e.currentTarget.id) }));
