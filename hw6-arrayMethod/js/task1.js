import users from "./users.js";
// console.log(users);

// //   const getUserNames = users.map(user => {
// //     return user.name;
// //   });

// //   console.log(getUserNames);
const getUserNames = users => {
    // твой код
    return users.map(user => {
        return user.name;
    })
  };

  console.log(getUserNames(users));
//   // ========================================================
  // task 2
  const getUsersWithEyeColor = (user, color) => {
    // твой код
    return user.filter(user => {
      return user.eyeColor === color;
    })

  };

  console.log(getUsersWithEyeColor(users, 'blue')); 
//   // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// // ============================================================

// // Task 3
const getUsersWithGender = (users, gender) => {
  // твой код
  return users.filter(user => user.gender === gender).map(user => user.name); 
};
console.log(getUsersWithGender(users, 'male')); 
// // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// // =========================================================================
// // Task 4
const getInactiveUsers = users => {
  // твой код
  return users.filter(user => user.isActive === false);
};
console.log(getInactiveUsers(users)); 
// // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// // +==========================================================================
//   // task 5
  const getUserWithEmail = (users, email) => {
    // твой код
    return users.find(user => user.email === email);
  };

  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// =======================================================================

// Task 6
const getUsersWithAge = (users, min, max) => {
  // твой код
  return users.filter(user =>{if(user.age >= min && user.age <=max) return user.age})
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// ===============================================================================

// Task 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // твой код
 return users.reduce((user,sum) => user + sum.balance, 0)
};

console.log(calculateTotalBalance(users)); // 20916
// =======================================================================================

// Task8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users.filter(user => user.friends.includes(friendName)).map(element => element.name);

};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// =========================================================================================

// Task 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  // [...users].sort((a, b) => {
  //   a.friends.length - b.friends.length
  // }).map(el => el.name);

  return users.sort((a,b) => a.friends.length < b.friends.length ? -1 : 1).map(el => el.name)


};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross ]

// ==================================================================================================

// task 10

// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {

  // твой код
  let newArr = [];
  users.forEach(user => newArr.push(...user.skills));
  // return newArr.filter((e,i)=> newArr.indexOf(e) >= i);
 const userFind = newArr.reduce((acc, el) => {
    if(acc.indexOf(el) === -1) {
      acc.push(el);
      return acc;
    }
   return acc;
 }, []);
  // console.log(userFind);
return userFind.sort();
  
   
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 
// 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]