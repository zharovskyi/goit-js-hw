function User(name, salary) {
    this.name = name;
    this.salary = salary;
    this.balance = 0; 
    // this.getInfo = function(){
    //     return `${this.name} ${this.salary}`   //----буде ств кожен раз
    // }
}
User.prototype.getInfo = function() {
    return `${this.name} ${this.salary}`;  ////СТВОРИТБСЯ ОДИН РАЗ
}

function SuperUser(name,salary,type) {
    this.usertype = type;
    User.call(this,name,salary);
}
SuperUser.prototype = Object.create(User.prototype);
SuperUser.prototype.constructor = SuperUser;
SuperUser.prototype.getUserType = function(){
    return this.usertype;
}
String.prototype.firstLetterToUpper = function(){
    const arr =this.split(" ");
    const newArr = [];
    for(let word of arr) {
        word = word[0].toUpperCase() + word.slice(1);
        newArr.push(word);
    }
    return newArr.join(' ');

}
const bart = new User('Bart',3000);
const liza = new User('Liza',1000);

console.log(bart.getInfo()); 
console.log(liza.getInfo()); 

const superBart = new SuperUser("Super Bart",500,'admin');
console.log(superBart);
console.log(superBart.getUserType());
console.log("asds asd grgr gfghjgj dd".firstLetterToUpper());