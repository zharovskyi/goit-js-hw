// TASK 5

// Напиши функцию getAllPropValues(arr, prop), 
// которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из 
// каждого объекта в массиве.

function getAllPropValues(arr, prop) {
  let arrReturnValue = [];
  for (let i=0; i < arr.length; i++) {
    if(prop in arr[i]){
      arrReturnValue.push(arr[i][prop]);
    }
  }

  return arrReturnValue;
}
const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quindex: 3
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
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []