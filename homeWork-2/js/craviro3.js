// // task 3

// // Напиши скрипт подсчета стоимости гравировки украшений.
// //  Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
// //  принимающую строку (в строке будут только слова и пробелы) 
// //  и цену гравировки одного слова, и возвращающую цену гравировки.

// // Вызовы функции для проверки работоспособности твоей реализации.
const calculateEngravingPrice = function (message, pricePerWord) {
   return +(message.split(' ').length) * pricePerWord;
}
console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',20
    ),
  );
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
