// TASK 6

let total = 0;
let input;
while(true) {
    input = +prompt ('Enter number');
    if(!input) break;
    total += input;
}
alert(`Общая сумма чисел равна ${total}`);