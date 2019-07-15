// task 2

const total = 100;
const ordered = 50;
let ask = prompt('Do you have some product?');
if(total < +ask){
    console.log('На складе недостаточно твоаров!');
}
else{
    console.log('Заказ оформлен, с вами свяжется менеджер');
}
