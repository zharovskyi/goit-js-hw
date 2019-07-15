// TASK 3

// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники
// кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

function findBestEmployee(employees){
  let maxSalary = 0;
  let maxName = '';
  for (const employee in employees){
    if(employees[employee] > maxSalary){
      maxSalary = employees[employee];
      maxName = employee;
    }  
  }
  return maxName;
}
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux