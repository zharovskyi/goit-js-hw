// const users = [
//     {
//         id: 1,
//         name: 'Vasa',
//         position: "lser",
//         salary: 1000
//     },
//     {
//         id: 2,
//         name: 'Vasa',
//         position: "lusr",
//         salary: 1000
//     },
//     {
//         id: 3,
//         name: 'Bob',
//         position: "lusr",
//         salary: 1200
//     },
//     {
//         id: 4,
//         name: 'Nino',
//         position: "frontend",
//         salary: 1000

//     },
// ]
// const frontendUpdeteUserSalary = filterUsers(
//     users,
//     'frontend',
//     updeteSalary,
//     300
// )

// //find function pear key and change another key

// function filterUsers(arr,value,action, newValue){
//     const filterArr = [];
//     for(const element of arr) {
//         if(element.position === value) {
//             // const newElem = {...elem};
//             // newElem.position = "Lion";
//             filterArr.push(action(element, newValue));
//         }
//     }
	
//     return filterArr;
// }

// function updatePosition(element, value) {
//     const newElement = {...element};
//     newElement.position = value;

//     return newElement;
// }

// function updeteSalary(element, value) {
//     const newElem = {...element };
//     newElem.salary += value;
//     return newElem;
// }

// // console.log(frontendUpdeteUserSalary);
// console.log(filterUsers(users, "lusr", updatePosition,"developer"));
// console.log(users); 
// console.log(filterUsers(users, "lusr", updeteSalary, 300));
// console.log(users); 

 
// STEK ===================

// function a(){
//     b();
//     console.log('a');
// }
// function b(){
//     c();
//     console.log('b');
// }
// function c(){
//     console.log('c');
// }
// a();
// ===============================================================
// Замикання

// const getCounter = function() {
//     let counter = 0;
//     const increment = function () {
//         counter ++;
//         return counter;
//     }
//     return increment;
// }
// const counter1 = getCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// const counter2 = getCounter();
// console.log(counter2());
// =================================================================
// THIS

// const user = {
//     name: 'bob',
//     getInfo() {
//         return `name ${this.name}`;
//     }
   
// }
// // const getInfoFunc = user.getInfo;
// // console.log(user.getInfo());
// // console.log(getInfoFunc()); //mistake
// const user2 = {
//     name: 'Sara'
// }
//  user2.getInfo = user.getInfo;
// console.log(user2.getInfo());


// ERROW FUNC, apply call
// const user = {
//     name: 'bob',
//     getInfo:() => {
//         console.log(this);
//     }
   
// }
// user.getInfo();

// const getInfo = function(surname) {
//     return `${this.name} ${surname}`;
// }
// console.log(getInfo.call(user));
// console.log(getInfo.call(user, 'Pypkin'));
// console.log(getInfo.apply(user, ['Pypkin']));
// const bindUser = getInfo.bind(user, 'QWE');
// console.log(bindUser());
// ===================================================

const car = {
    name: 'BMW',
    price: 200,
    getInfo() {
        const getUAH = () => {
            return this.price * 20;
        }
        // const getUAH = () => this.price * 10;
        
        console.log(getUAH());
        return `Car ${this.name} cost ${getUAH()}`

    }
   
}
console.log(car.getInfo());