const throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const feedbackFormState = {
    "email": "",
    "message": "",
};

function onInputData(e) {
    feedbackFormState.email = formEl.elements.email.value;
    feedbackFormState.message = formEl.elements.message.value;

    localStorage.setItem(storageKey, JSON.stringify(feedbackFormState));
}

function onFormSubmit(e) {
    e.preventDefault();
    if (formEl.elements.email.value.trim() === "" || formEl.elements.message.value.trim() === "") {
        alert('Всі поля повинні бути заповнені');
        return;
    }

    console.log(feedbackFormState);

    formEl.reset();
    localStorage.removeItem(storageKey);
}

function checkLocalStorage() {

    try {
        const dataStorage = JSON.parse(localStorage.getItem(storageKey));

        if (dataStorage) {
            formEl.elements.email.value = dataStorage.email;
            formEl.elements.message.value = dataStorage.message;

            feedbackFormState.email = dataStorage.email;
            feedbackFormState.message = dataStorage.message;

        }
    }
    catch {
        console.log("error");
    }
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputData, 500));

checkLocalStorage();









































// function onInputData(e) {
//     console.log(e);
//     console.log(e.target.value);
//     // console.log(e.currentTarget.value);
//     const formData = new FormData(formEl);
//     const obj = {};
//     formData.forEach((value, key) => {
//         obj[key] = value;
//     });
//     console.log(obj);

//     localStorage.setItem('feedback-form-state', JSON.stringify(obj));
// }


// function onFormSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(formEl);
//     const obj = {};
//     formData.forEach((value, key) => {
//         obj[key] = value;
//     });
//     console.log(obj);
// }


