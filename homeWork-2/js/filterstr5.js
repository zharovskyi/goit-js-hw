// // Task 5

// // Напиши функцию formatString(string) принимающую строку в параметр string.

// // Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// // Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

function formatString(string) {
  if(string.length > 40){
   return string.substring(0,40) + '...';
  }
  return string;


}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
