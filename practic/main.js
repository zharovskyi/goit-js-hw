// const user ={
//     name: "Alex",
//     age: 50,
//     email: "asdd@asd.com",
//     married: false
// };
// console.log(user.name);
// console.log(`${user.age}///${user.email}`);
// console.log(object);


// function getData(obj,key) {
//     return obj[key];
// }
// console.log(getData(user, "email"));

// const name = 'Vasa';
// const guets = ['mango', 'poly', 'ajax'];
// const user2 = {
//     name,
//     guets,
//     sendHallo: function(){
//         return (`HEloo ${this.name}`);
//     },
//     // or
//     sendHallo2(){
//         return (`BYe ${this.sername}`);
//     }
// }
// user2.sername = "Pupkin";
// console.log(user2.sendHallo());
// console.log(user2.sendHallo2());
// console.log(user2.guets[0]);

// const data = {
//     apples: 22,
//     banana: 12,
//     tomato: 17
// }
// const price = {
//     apples: 2,
//     banana: 1,
//     tomato: 3,
//     oranges: 7
// }
// let sum = 0;
// for (key in data){
//     sum += data[key] * price[key];
    
// }
// const dataCost = Object.keys(price);
// console.log(dataCost);
// const values = Object.values(price);
// let sum = 0;
// for(const i of values){
//     sum += i;
// }
// console.log(values);
// console.log(sum);

// const entries  = Object.entries(price);
// console.log(entries);
//  const {apples,tomato} = price;
//  console.log(apples);

// REST
// function myRest(a,...arr){
// console.log(arr);
// }
// console.log(myRest(77,[1,2,3]));

// // SPRED
// const arr1 = [2,3,4];
// const arr2 = [2,3,4];
// const newArr = [...arr1, ...arr2];
// console.log(arr1);
// console.log(newArr);

const luzer = {
    age: 44,
    page: "oleh"
}
const vasa = {
    age: 49,
    page: "vasa"
}
const obg = {...luzer, ...vasa};
console.log(obg);