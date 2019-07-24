const form = document.querySelector('.form');
// console.log(form);


form.addEventListener("submit", hundleSubmit);
const name = document.querySelector('input[name ="name"]');
const surname = document.querySelector('input[name ="surname"]');
const phone = document.querySelector('input[name ="phone"]');
const email = document.querySelector('input[name ="email"]');

const inputs = document.querySelectorAll('input');
const radio = document.querySelector('input[type="radio"]');

console.log(inputs);
// console.log(radio);
name.addEventListener('input',(e)=>{
    // console.log(e.target.value);
});

function hundleSubmit(evant) {
    event.preventDefault();
    const subDate = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        radio: true
    }
    // console.log(subDate);
    event.target.reset();
}
// ==========================================
const arr = [{
    name: "bart"
},
{
    name: "bar"
},
{
    name: "ba"
}
]
function renderUsers(users){
    const ul =document.createElement('ul');
    ul.className = "user-list";
    users.forEach(el => {
        ul.append(createUser(el));
    });
    document.querySelector('.user_section').append(ul);
}
function createUser({name}){
    
    const li =document.createElement("li");
    
    li.className = 'user_list_item';
    li.textContent = name;
    // console.log(li);
    return li;
}
renderUsers(arr);
// ================================================

//  menu
// class HomePage {
//     constructor(){
//         this.toggleNav = document.querySelector('.toggle-nav');
//         this.nav = document.querySelector('.nav');
//         this.toggleNav.addEventListener('click',this.handleToggle.bind(this));
//     }
//     handleToggle(){
//         this.nav.classList.toggle('active');
//     }
// }
// const homePage = new HomePage();
// //через прото

const homePageObj = {
    toggleNav: document.querySelector('.toggle-nav'),
    nav: document.querySelector('.nav'),
    handleToggleNav() {
        this.nav.classList.toggle('active');
    }
}


homePageObj.toggleNav.addEventListener('click', homePageObj.handleToggleNav.bind(homePageObj));
console.log('create class');


addEventListener('click', homePageObj.getInfo);

//// modal
const modalOverlay = document.querySelector('.overlay');
const modalButton = document.querySelector('.toggle-modal');
function handleToggleNav() {
    nav.classList.toggle('active');
}
function toggleModal(e) {
    if(e.target === modalOverlay || e.target === modalButton)
    modalOverlay.classList.toggle('active');
}
modalButton.addEventListener('click',toggleModal)
modalOverlay.addEventListener('click',toggleModal)
