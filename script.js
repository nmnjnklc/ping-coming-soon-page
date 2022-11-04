const form = document.querySelector('#form');
const input = document.querySelector('#inputEmail');
const submit = document.querySelector('#submit');
const errorMsg = document.querySelector('#error-msg');

const validFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

var email = '';

function resetForm() {
    input.classList.remove('invalid');
    submit.classList.remove('mt');
    errorMsg.classList.add('hide');
    email = '';
    form.reset();
}

input.addEventListener('change', (e) => {
    email = e.target.value;
});

submit.addEventListener('click', () => {
    if (!validFormat.test(email)) {
        input.classList.add('invalid');
        submit.classList.add('mt');
        errorMsg.classList.remove('hide');
        setTimeout(() => {
            resetForm();
        }, 2000);
    } else {
        alert("That is a valid email format.\nForm will be resetted after you click 'OK' on this alert");
        setTimeout(() => {
            resetForm();
        }, 1000);
    }
});
