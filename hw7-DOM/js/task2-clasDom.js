import quiz from './defoult.js';
console.log(quiz);

function createQuestion(question){
    const input = document.createElement('input');
    input.setAttribute('type','radio');
    input.setAttribute('value','choice')
    console.log(input);
}
createQuestion(quiz);