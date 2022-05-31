
let throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputData, 500));
let obj;

chechLocalStorage();

function onInputData(e) {
    // console.log(e);
    // console.log(formEl.elements);
    // console.log(formEl.elements.email);
    // console.log(formEl.elements.email.value);
    // console.log(e.target.value);
    // console.log(e.currentTarget.value);

    obj = {
        // name: formEl.elements.name.value,
        "email": formEl.elements.email.value,
        "message": formEl.elements.message.value,
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function chechLocalStorage() {
    try {
        const dataStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (dataStorage) {
            formEl.elements.email.value = dataStorage.email;
            // console.log(dataStorage.email);
            formEl.elements.message.value = dataStorage.message;
            // console.log(dataStorage.message);
        } else {
            formEl.elements.email.value = '';
            formEl.elements.message.value = '';
        }
    }
    catch {
        console.log("error");
    }

}

function onFormSubmit(e) {
    e.preventDefault();
    if (formEl.elements.email.value.trim() === "" || formEl.elements.message.value.trim() === "") {
        alert('Всі поля повинні бути заповнені');
    }
    else {
        console.log(obj);
    }

    formEl.reset();
    localStorage.removeItem('feedback-form-state');

}











































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


