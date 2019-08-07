// const key = Symbol('Some string');
// const key2 = Symbol('Some string');

// const obj = {
//     name: 'Alex',
//     age: 30,
// }
// obj[key] = 'Some text';
// console.log(obj['Some text']);

// ITERATOR

const someArray = [1, 2, 3];

function iterator(arr) {
    let i = 0;
    return {
        next() {
            const value = i < arr.length ? i++ : undefined;
            const complete = i === arr.length ? true : false;
            return {
                value,
                complete,
            }
        }
    }
}
const runIterator = iterator(someArray);
// console.log(runIterator.next());
// console.log(runIterator.next());
// console.log(runIterator.next());

// GENERTOR

// function* massageGenerator() {
//     let answer = yield 'welcome';
//     if(answer === 'okey') {
//         yield 'Super'
//     } else{
//         yield 'Bye'
//     }
// }
// const massageiterator = massageGenerator()
// console.log(massageiterator.next());
// console.log(massageiterator.next('okey')); 

async function getData() {
    try {
        const res = await fetch('https://swapi.co/api/films/1/')
            .then(response => response.json());
        // .then(data => console.log(data))
        console.log(res);
    } catch (error) {
        throw err;
    }
}
getData();