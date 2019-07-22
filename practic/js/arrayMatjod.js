const users  = [
    {
        id: '11',
        name: 'Bob',
        type: "admin",
        categoty: "frontend",
        balance: 100
    
    },
    {
        id: '22',
        name: 'Jon',
        type: "user",
        categoty: "frontend",
        balance: 100
    
    },
    {
        id: '33',
        name: 'Andry',
        type: "user",
        categoty: "backend",
        balance: 100
    
    },
    {
        id: '44',
        name: 'Sem',
        type:"admin",
        categoty: "fbackend",
        balance: 100
    
    },
    {
        id: '55',
        name: 'Lion',
        type: "animal",
        categoty: "frontend-animal",
        balance: 100
    
    }
]
// return new arr
// const filterUser = function(arr,action) {
//     const newArr = [];
//     for(const element of arr) {
//         if(action(element)) {
//             newArr.push(element);
//         }
//     }
//     return newArr;
// }
// const filterByType = element => element.type === 'user';
const filterUser = users.filter((element) => element.type === 'user');
console.log(filterUser);

// //delete user
// users.filter(element => element.id!=id)
// =======================================

// console.log(filterUser(users,filterByType));
// console.log(filterUser(users,(element) => element.categoty === "frontend"));

// const updateUserById = function(arr,id,date) {
//     const newArr = [...arr];

//     for (const element of newArr){
//         if(element.id === id) {
//             newArr[newArr.indexOf(element)] = {...element,...date};
//         }
//     }
//     return newArr;

// }

// console.log(updateUserById(users,'55', {type: 'Fork'}));
const id = "11";
const newData  = {type: "aqw"};
const updUser = users.map((element) => {
    if(element.id === id) {
        return {...element, ...newData}
    }
    return element;
})
console.log(updUser);
console.log("names: ",users.map(element => element.name));
console.log(users.find(elem => elem.id = id));
console.log('reverse:', users.reverse());
const num = [2,6,8,3,4];
console.log("reduce: ", users.reduce((arr, sum) => arr + sum.balance, 0));
console.log("sort: ", num.sort((a, b) => a-b));
console.log("sort: ", users.sort((a, b) => a.name - b.name));