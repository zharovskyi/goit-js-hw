// Создай плагин настраиваемого таймера, 
// который ведет обратный отсчет до предварительно определенной даты.
//  Такой плагин может использоваться в блогах и интернет-магазинах, 
//  страницах регистрации событий, 
// во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: 
// дни, часы, минуты и секунды в формате XX:XX:XX:XX. 
// Количество дней может состоять из более чем двух цифр.

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.refs = {};
    this.refs.wrapper = document.querySelector(`${selector}`)
    this.refs.days = this.refs.wrapper.querySelector('span[data-value="days"]'),
    this.refs.hours = this.refs.wrapper.querySelector('span[data-value="hours"]'),
    this.refs.min = this.refs.wrapper.querySelector('span[data-value="mins"]'),
    this.refs.sec = this.refs.wrapper.querySelector('span[data-value="secs"]'),
    this.endDate = targetDate.getTime();
    this.timer();
  }

  timer(){
    setInterval(function (refs, endDate) {
      let currentTime = new Date().getTime();
      let time = endDate - currentTime;
      refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      refs.hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      refs.min.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      refs.sec.textContent = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000, this.refs, this.endDate)
  }
  
}











// const refs = {
  // days: document.querySelector('span[data-value="days"]'),
  // hours: document.querySelector('span[data-value="hours"]'),
  // min: document.querySelector('span[data-value="mins"]'),
  // sec: document.querySelector('span[data-value="secs"]'),
// }

// const endDate = new Date('Sep 17, 2019').getTime();

// let timer = setInterval(function () {
//   let currentTime = new Date().getTime();
//   let time = endDate - currentTime;
//   refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
//   refs.hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   refs.min.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   refs.sec.textContent = Math.floor((time % (1000 * 60)) / 1000);
// }, 1000) plag = new CountdownTimer();
// plag.timer()






// const plag = new CountdownTimer();
// plag.timer(plag.refs, plag.endDate);

const plag = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2099'),
});