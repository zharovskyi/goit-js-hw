const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
}
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};;

refs.start.addEventListener('click', () => {
  refs.start.setAttribute('disabled',true);
  timerId = setInterval(()=>{
    refs.body.style.background = colors[randomIntegerFromInterval(0,colors.length)];
  },1000);
});


refs.stop.addEventListener('click', () => {
  refs.start.disabled = false;
  clearInterval(timerId); 
  
});






// refs.start.addEventListener('click', changeColor);
// refs.stop.addEventListener('click', stopChangeColor);
// let setColors
// function changeColor(e) {
//   setColors =
//   setInterval(()=>{
//     refs.body.style.background = colors[randomIntegerFromInterval(0,colors.length)];
//   },1000)
  
// }
// function stopChangeColor(e) {
//   
//   // console.log(changeColor);
//   clearInterval(changeColor);

// }


