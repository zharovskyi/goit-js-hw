// task 1

const name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

price = 2000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);


// task 2

// const total = 100;
// const ordered = 50;
// let ask = +prompt('Do you have some product?');
// if(total < ask){
//     console.log('На складе недостаточно твоаров!');
// }
// else{
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// task 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// message = prompt('Enter your password?');
// // console.log(message);
// if(message === null) {
//     message = 'Отменено пользователем!';
// }
// else if (message === ADMIN_PASSWORD) {
//     console.log('Добро пожаловать!');
// }
// else {
//     message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);

// task 4

// let credits = 20000;
// let pricePerDroid = 3000;
// let askHowDroids = +prompt('количество дроидов хочет купить');
// let numDroids = askHowDroids * pricePerDroid;
// let totalPrice = credits - numDroids;
// let massege;
// if(askHowDroids === null){
//     massege = 'Отменено пользователем!';
// }
// else if(totalPrice > credits) {
//     massege = 'Недостаточно средств на счету!';
// }
// else{
//     massege = `Вы купили  дроидов, ${askHowDroids} 
//     на счету осталось ${totalPrice} кредитов.`;
// }
// console.log(massege);


// TASK 5
 
// let china = 100;
// let chilu = 250;
// let avstralia = 170;
// let india = 80;
// let jamaica = 120;
// let askDeliveryCost = prompt("ввести имя страны");
// let massege;
// switch (askDeliveryCost.toLowerCase()) {
//     case 'китай':
//         massege = `Доставка в ${askDeliveryCost} будет стоить ${china} кредитов.`;
//         break;
//     case 'чілі':
//         massege = `Доставка в ${askDeliveryCost} будет стоить ${chilu} кредитов.`;
//         break;
//     case 'австралия':
//         massege = `Доставка в ${askDeliveryCost} будет стоить ${avstralia} кредитов.`;
//         break;
//     case 'індія':
//         massege = `Доставка в ${askDeliveryCost} будет стоить ${india} кредитов.`;
//         break;
//     case 'ямайка':
//         massege = `Доставка в ${askDeliveryCost} будет стоить ${jamaica} кредитов.`;
//         break;
//     default:
//     alert('В вашей стране доставка не доступна');
    
// }
// console.log(massege);

// TASK 6

// let total = 0;
// let input;
// while(true) {
//     input = +prompt ('Enter number');
//     if(!input) break;
//     total += input;
// }
// alert(`Общая сумма чисел равна ${total}`);

