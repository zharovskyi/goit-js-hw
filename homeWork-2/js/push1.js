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








