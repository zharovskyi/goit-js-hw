console.log('log1');

console.log('log2');



setTimeout(function(){
    console.log('clg3');
},3000)
console.log('log4');

let count = 0;
let timer1 = setInterval(function() {
    console.log(count);
    count +=1;
},1000);
console.log(timer1);
 setTimeout(() => clearInterval(timer1),5000);

// DATE
const date = new Date();
console.log(date);

const date0 = new Date(0);
console.log(date0);

//PROMISE