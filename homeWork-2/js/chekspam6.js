// // Task 6
// // Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. 
// // Функция проверяет ее на содержание слов spam и sale. 
// // Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет 
// // функция возвращает false. Слова в строке могут быть в произвольном регистре.

function checkForSpam(str){
// const str1= str.toLowerCase();  tor
// if(str1.includes('spam') || str1.includes('sale')){
//   return true;
// }
// or
  if(str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')){
    return true;
  }
  
  return false;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// ==