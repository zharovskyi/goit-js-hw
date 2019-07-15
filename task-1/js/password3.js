// task 3

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Enter your password?');
// console.log(message);
if(message === null) {
    message = 'Отменено пользователем!';
}
else if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);