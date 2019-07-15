// TASK 5
 
let china = 100;
let chilu = 250;
let avstralia = 170;
let india = 80;
let jamaica = 120;
let askDeliveryCost = prompt("ввести имя страны");
let massege;
switch (askDeliveryCost.toLowerCase()) {
    case 'китай':
        massege = `Доставка в ${askDeliveryCost} будет стоить ${china} кредитов.`;
        break;
    case 'чілі':
        massege = `Доставка в ${askDeliveryCost} будет стоить ${chilu} кредитов.`;
        break;
    case 'австралия':
        massege = `Доставка в ${askDeliveryCost} будет стоить ${avstralia} кредитов.`;
        break;
    case 'індія':
        massege = `Доставка в ${askDeliveryCost} будет стоить ${india} кредитов.`;
        break;
    case 'ямайка':
        massege = `Доставка в ${askDeliveryCost} будет стоить ${jamaica} кредитов.`;
        break;
    default:
    alert('В вашей стране доставка не доступна');
    
}
console.log(massege);