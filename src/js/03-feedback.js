
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

