import task from "./defoult.js";
// console.log(task.title);
const form = document.querySelector('.form');

function createList(task) {
    const mainHeadline = document.createElement('h2');
    mainHeadline.textContent = task.title;
    let fragment = document.createDocumentFragment();
    task.questions.forEach((element,index) => {
        let section = document.createElement('section');
        let headlineQuestion = document.createElement('h3');
        headlineQuestion.textContent = element.question;
        let ul = document.createElement('ul');
        ul.className = 'list';
        let create = element.choices.forEach((el, indexValue) => {
            let li = document.createElement('li');
                li.className = 'list__style';
                let label = document.createElement('label');
                    label.textContent = el;
                    label.style.cursor = 'pointer';
                    let radio = document.createElement('input');
                        radio.setAttribute('type', 'radio');
                        radio.setAttribute("value", indexValue+1);
                        radio.setAttribute('name', 'question' + (index+1));
                label.prepend(radio);
            li.append(label);
            ul.append(li);
        });
        section.append(headlineQuestion, ul);
        fragment.append(section);
    })

    form.prepend(mainHeadline,fragment);
}
createList(task);


const taskQuestion = task.questions.map(el => {
   return el.answer;
})
console.log(taskQuestion);

let button = document.querySelector('button[type="submit"]');
button.addEventListener('click', testChek);
function testChek(e) {
    e.preventDefault();
    let userAnswer = [];
    let chekInputArr = document.querySelectorAll('input[type="radio"]:checked');
    [...chekInputArr].map(el =>{
        userAnswer.push(+el.value);
    })
    console.log(userAnswer);
}
// const answer1 = document.querySelector('[name="answer1"]:checked').value;
// console.log(answer1);
// const answer2 = document.querySelector('[name="answer2"]:checked').value;
// const answer3 = document.querySelector('[name="answer3"]:checked').value;
// const answer4 = document.querySelector('[name="answer4"]:checked').value;
// const answer5 = document.querySelector('[name="answer5"]:checked').value;
// const answer6 = document.querySelector('[name="answer6"]:checked').value;
// const sumData = [
//     answer1,
//     answer2,
//     answer3,
//     answer4,
//     answer5,
//     answer6,
// ];
// const rightAnswer = task.questions;
// console.log(rightAnswer);
// let counter = 0;
// for(const answ in sumData){
//     if(ahsw === task.questions)
// }



