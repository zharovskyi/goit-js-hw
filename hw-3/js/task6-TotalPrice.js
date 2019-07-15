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
  