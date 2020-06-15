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
            url += `?gender=${genders[gender]}`;

        return await callApi(url)
    }

    const gender = getKeyByValue(genders, genderString);
    const response = await generateIdentity(gender);
    const result = response.results[0];

    const idendtity = {
        gender: result.gender,
        email: result.email,
        location: {
            city: result.location.city,
            country: result.location.country,
            state: result.location.state,
            postcode: result.location.postcode
        },
        name: {
            first: result.name.first,
            last: result.name.last
        },
        login: {
            username: result.login.username,
            password: result.login.password,
        },
        dob: {
            date: new Date(result.dob.date).toLocaleDateString(),
            age: result.dob.age
        },
        nationality: result.nat,
        phone: result.phone
    }

    document.querySelector(resultsContainerClass).innerHTML = '';
    appendIdentityProperties(idendtity);
    console.log(response);
}

const appendIdentityProperties = (idendtity) => {
    appendPropery("First Name", idendtity.name.first);
    appendPropery("Last Name", idendtity.name.last);
    appendPropery("Date of birth", idendtity.dob.date);
    appendPropery("Age", idendtity.dob.age);
    appendPropery("Nationality", idendtity.nationality);
    appendPropery("City", idendtity.location.city);
    appendPropery("Country", idendtity.location.country);
    appendPropery("State", idendtity.location.state);
    appendPropery("Postcode", idendtity.location.postcode);
    appendPropery("E-mail", idendtity.email);
    appendPropery("Phone", idendtity.phone);
    appendPropery("Login", idendtity.login.username);
    appendPropery("Password", idendtity.login.password);
}


const appendPropery = (key, value) => {
    document
        .querySelector(resultsContainerClass)
        .insertAdjacentHTML('beforeend', `<p><strong>${key}</strong> : ${value}</p>`);
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
