// // // Task 8
// // спитати
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if(login.length > 3 && login.length < 16){
      return true;
  }
  return false;
};
// console.log(isLoginValid('qwerty123'));

const isLoginUnique = function(allLogins, login) {
    return !allLogins.includes(login);
};
// console.log(isLoginUnique(logins, 'qwerty123'));


const addLogin = function(allLogins, login) {
    if(isLoginValid(login)){
        if (isLoginUnique(allLogins, login)){
            allLogins.push(login);
        alert('')
        }
    }else{
        alert("Ошибка! Логин должен быть от 4 до 16 символов");
    }
    console.log(allLogins);
};
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast');
