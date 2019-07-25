import task from "./defoult.js";
// console.log(task.title);
const form = document.querySelector('.form');

let getResult = document.createElement('div');
getResult.className = 'result';


function createList(task) {
    const mainHeadline = document.createElement('h2');
    mainHeadline.className = "headline";
    mainHeadline.textContent = task.title;
    let fragment = document.createDocumentFragment();
    task.questions.forEach((element,index) => {
        let section = document.createElement('section');
        section.className = 'section';
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
                        radio.setAttribute("value", indexValue);
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
   return el.answer;indexTestCheck
})

const modalButton = document.querySelector(".modal");
const modalContent = document.querySelector('.modal__content');
let button = document.querySelector('.button');

button.addEventListener('click', testChek);


function testChek(e) {
    e.preventDefault();
    let userAnswer = [];
    let chekInputArr = document.querySelectorAll('input[type="radio"]:checked');
    console.log(chekInputArr);
    [...chekInputArr].map(el =>{
        userAnswer.push(+el.value);
    })
    compareAnswer(taskQuestion,userAnswer);   
}

function compareAnswer(taskQuestion,testChek) {
    let counter = 0;
    let indexTestCheck = 0;
    for(let i of taskQuestion){
        console.log(i, testChek);
        if(i === testChek[indexTestCheck]){
        counter +=1;
        }
        indexTestCheck +=1;
        
    }
    console.log(counter);
    return getResult.textContent = `Your result ${counter} right answer`;
}
form.append(getResult);





























// const formElement = form.elements.value;
// console.log(formElement);
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



