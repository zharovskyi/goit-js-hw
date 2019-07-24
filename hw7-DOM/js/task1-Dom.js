import task from "./defoult.js";
// console.log(task);

function createElement(task){
    const section = document.createElement('section');
    const ol = document.createElement('ol');
    section.append(ol);
    // for( const key in task) {

    // }
    const h3 = document.createElement('h3');
    h3.textContent = task;
    console.log(h3);
}

//  function createQuestion({question}) {
//      const li = document.createElement('li');
//      li.textContent = question;
//      return li;

//  }
 createElement(task);