// task 4

let credits = 20000;
let pricePerDroid = 3000;
let askHowDroids = +prompt('количество дроидов хочет купить');
let numDroids = askHowDroids * pricePerDroid;
let totalPrice = credits - numDroids;
let massege;
if(askHowDroids === null){
    massege = 'Отменено пользователем!';
}
else if(totalPrice > credits) {
    massege = 'Недостаточно средств на счету!';
}
else{
    massege = `Вы купили  дроидов, ${askHowDroids} 
    на счету осталось ${totalPrice} кредитов.`;
}
console.log(massege);