import './styles.css';
const refs = {
    form: document.querySelector('.section__form'),
    email: document.querySelector('input[type="email"]'),
    password: document.querySelector('input[type="password"]'),
    button: document.querySelector('.section__button'),
    baseUrl: 'http://localhost:3000/pass',
    span: document.querySelector('span'),
}
refs.form.addEventListener('submit', checkInput);
let allValue = [];

function getPosts() {
    fetch(refs.baseUrl)
        .then(response => response.json())
        .then(data => {
            allValue = data;
            // console.log(allValue)
        });

}
getPosts();

function checkInput(e) {
    e.preventDefault();
    // for (let el of allValue) {
    //     if ((el.email === refs.email.value) && (el.password === refs.password.value)) {
    refs.span.classList.remove('show');
    fetch(refs.baseUrl, {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "username": refs.email.value,
                "roles": [
                    refs.email.value,
                    refs.password.value
                  ]
            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // for (let el of allValue) {
            //     // console.log(el.roles);
            //     if (el.roles.includes(refs.email.value)) {
            //         console.log(el.roles);


            //     }
            // }
        })
        .catch(refs.span.classList.add('show'))
}
