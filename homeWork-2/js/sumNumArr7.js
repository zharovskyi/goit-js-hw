// // TASK 7
let input;
let numbers = [];
let total = 0;
while (true) {
  input = prompt('Enter number please');
  if (input === null || input === isNaN || input === '') {
    break;
  }
  numbers.push(+input);
}
for (num of numbers) {
  total += num;
}
alert(total);
