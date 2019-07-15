// TASK 1
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в
//  формате ключ:значение используя Object.keys() и for...of
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true
  };
  user.mood = 'happy';
  user.hobby = 'javscript';
  user.premium = 'false';
  for (let key in user) {
    // console.log(user[key]);
  }
  const retKey = Object.keys(user);
  const retVal = Object.values(user);
//   console.log(retKey);
//   console.log(retVal);
  const ent = Object.entries(user);
  for(const entry of ent){
    const key = entry[0];
    const value = entry[1];
    console.log(`${key}-${value}`);
  }
