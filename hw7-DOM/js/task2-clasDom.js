import quiz from './defoult.js';

class Form {

    constructor(task) {
        this.task = task;
        this.form = document.querySelector('.form');
        this.button = document.querySelector('.button');
        this.button.addEventListener('click', this.testChek.bind(this));
        this.taskQuestion = this.task.questions.map(el => {
            return el.answer;
        })
        this.getResult = document.createElement('div');
        this.getResult.className = 'result';
        this.form.append(this.getResult);
    }


    createList() {
        const mainHeadline = document.createElement('h2');
        mainHeadline.className = "headline";
        mainHeadline.textContent = this.task.title;
        let fragment = document.createDocumentFragment();
        this.task.questions.forEach((element, index) => {
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
                radio.setAttribute('name', 'question' + (index + 1));
                label.prepend(radio);
                li.append(label);
                ul.append(li);
            });
            section.append(headlineQuestion, ul);
            fragment.append(section);
        })

        this.form.prepend(mainHeadline, fragment);
    }

    testChek(e) {
        e.preventDefault();
        let chekInputArr = document.querySelectorAll('input[type="radio"]:checked');
        const userAnswer = [...chekInputArr].map(el => +el.value);
        this.compareAnswer(userAnswer);
        
    }

    compareAnswer(userAnswer) {
        let counter = 0;
        let indexTestCheck = 0;
        for (let i of this.taskQuestion) {
            if (i === userAnswer[indexTestCheck]) {
                counter += 1;
            }
            indexTestCheck += 1;

        }
        
        return this.getResult.textContent = `Your result ${counter} right answer`;
    }
}


const buildQuiz = new Form(quiz);

buildQuiz.createList();
