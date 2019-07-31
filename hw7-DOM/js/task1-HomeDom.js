import task from "./defoult.js";

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
   return el.answer;
})


let button = document.querySelector('.button');
button.addEventListener('click', testChek);



function testChek(e) {
    e.preventDefault();
    let userAnswer = [];
    let chekInputArr = document.querySelectorAll('input[type="radio"]:checked');
    [...chekInputArr].map(el =>{
        userAnswer.push(+el.value);
    })
    compareAnswer(taskQuestion,userAnswer);   
}

function compareAnswer(taskQuestion,testChek) {
    let counter = 0;
    let indexTestCheck = 0;
    for(let i of taskQuestion){
        if(i === testChek[indexTestCheck]){
        counter +=1;
        }
        indexTestCheck +=1;
        
    }
    return getResult.textContent = `Your result ${counter} right answer`;
}
form.append(getResult);