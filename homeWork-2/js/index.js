// // Task 1

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
users.shift(users[0]);
// Удалить первый элемент массива
console.log(users); 
// Удалить последний элемент массива
users.pop(users[3]);
console.log(users);
// Добавить в начало массива пользователя "Lux"
users.unshift('Lux');
console.log(users);
// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push('Jay', 'Kiwi');
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]
// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
for(let i = 0; i< users.length; i++){
    if(users[i] === userToDelete ) {
        users.splice(i,1);
    }
}
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

const userToInsert = 'Kong';
const insertBefore = 'Jay';
users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]


// // =================================================

// // Task2

//  const logItems = function (arr) {
//     for ( let i = 0; i < arr.length;i++) {
//         console.log(`${arr[i]} - ${i+1}`);
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// // ================================================================
// // task 3

// // Напиши скрипт подсчета стоимости гравировки украшений.
// //  Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
// //  принимающую строку (в строке будут только слова и пробелы) 
// //  и цену гравировки одного слова, и возвращающую цену гравировки.

// // Вызовы функции для проверки работоспособности твоей реализации.
// const calculateEngravingPrice = function (message, pricePerWord) {
//    return +(message.split(' ').length) * pricePerWord;
// }
// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',20
//     ),
//   );
//   console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

// // ===========================================================================
// // TASK 4

// function findLongestWord (str){
//   let words = str.split(' ');
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('T quick brown fox jumpedasd over the lazy dog'));

// // ==================================================================================

// // Task 5

// // Напиши функцию formatString(string) принимающую строку в параметр string.

// // Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// // Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// function formatString(string) {
//   if(string.length > 40){
//    return string.substring(0,40) + '...';
//   }
//   return string;


// }
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // ===============================================================================

// // Task 6
// // Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. 
// // Функция проверяет ее на содержание слов spam и sale. 
// // Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет 
// // функция возвращает false. Слова в строке могут быть в произвольном регистре.

// function checkForSpam(str){
//   // str.toLowerCase();  // чого так не працює ask mentor
//   if(str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')){
//     return true;
//   }
//   return false;
// }
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('SPAM How to earn fast money?')); // true
// // ========================================================================

// // TASK 7
// let input;
// let numbers = [];
// let total = 0;
// while (true) {
//   input = prompt('Enter number please');
//   if (input === null || input === isNaN || input === '') {
//     break;
//   }
//   numbers.push(+input);
// }
// for (num of numbers) {
//   total += num;
// }
// alert(total);

// // =====================================================================================

// // Task 8
// спитати
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   for (log of login)
//     if (log.indexOf(log.toUpperCase()) > 1)
//       return true;
// };
// console.log(isLoginValid(logins));
// const isLoginUnique = function(allLogins, login) {
//   return

// };

// const addLogin = function(allLogins, login) {

// };