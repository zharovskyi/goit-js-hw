// TASK 1
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в
//  формате ключ:значение используя Object.keys() и for...of
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true
//   };
//   user.mood = 'happy';
//   user.hobby = 'javscript';
//   user.premium = 'false';
//   for (let key in user) {
//     console.log(user[key]);
//   }
//   const retKey = Object.keys(user);
//   const retVal = Object.values(user);
//   console.log(retKey);
//   console.log(retVal);
//   const ent = Object.entries(user);
//   for(const entry of ent){
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}-${value}`);
//   }


//   =============================================================================
// TASK 2

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.
// function countProps(obj) {
//   let count = 0;
//   for (const key in obj) {
//     count ++;
//   }
//  return count;
// }
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));//3
// ======index.js================================================================================
index.js
// TASK 3index.js

// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники
// кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// function findBestEmployee(employees){
//   let maxSalary = 0;
//   let maxName = '';
//   for (const employee in employees){
//     if(employees[employee] > maxSalary){
//       maxSalary = employees[employee];
//       maxName = employee;
//     }  
//   }
//   return maxName;
// }
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
// =====================================================================================

// TASK 4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее.
//  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// function countTotalSalary(employees) {
//   let salary = 0; 
//   for (const empl in employees) {
//     salary += employees[empl];
//   }
//   return salary;
// }

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
// =======================================================================================

// TASK 5

// Напиши функцию getAllPropValues(arr, prop), 
// которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из 
// каждого объекта в массиве.

// function getAllPropValues(arr, prop) {
//   let arrReturnValue = [];
//   for (let i=0; i < arr.length; i++) {
//     if(prop in arr[i]){
//       arrReturnValue.push(arr[i][prop]);
//     }
//   }

//   return arrReturnValue;
// }
// const products = [{
//     name: 'Радар',
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: 'Сканер',
//     price: 2700,
//     quindex.jsantity: 3
//   },
//   {
//     name: 'Дроид',
//     price: 400,
//     quantity: 7
//   },
//   {
//     name: 'Захват',
//     price: 1200,
//     quantity: 2
//   },
// ];
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// ================================================================================

// Task 6
// Напиши функцию calculateTotalPrice(arr, productName), 
// которая получает массив объектов и имя продукта (значение свойства name). 
// Возвращает общую стоимость продукта (цена * количество).

function calculateTotalPrice(arr, productName) {
  // let arrReturnValue = [];
  // for (let i=0; i < arr.length; i++) {
  //   for (let key in arr[i]){
      
  //     console.log(arr[i][key]);
  //     // const{ productNam,price,quantity} = arr[i];
  //     // console.log(price);

  //     // if(`${productNam}` === productName){
        
  //       // console.log(arr[i].price * arr[i].quantity);
  //     // }
  //   }
  // }
  let totalPrice;
  for(const el of arr) {
    if(el.name === productName) {
      totalPrice = el.price * el.quantity;
    }
  }
    return totalPrice;
  }
  const products = [{
      name: 'Радар',
      price: 1300,
      quantity: 4
    },
    {
      name: 'Сканер',
      price: 2700,
      quantity: 3
    },
    {
      name: 'Дроид',
      price: 400,
      quantity: 7
    },
    {
      name: 'Захват',
      price: 1200,
      quantity: 2
    },
  ];
  console.log(calculateTotalPrice(products, 'Радар')); // 5200.

  console.log(calculateTotalPrice(products, 'Дроид')); // 2800/