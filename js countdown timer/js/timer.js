document.addEventListener('DOMContentLoaded', () => {
   const time = new Date('Jan 1 2024 00:00:00'); // как получать так и изменять дату

   const daysValue = document.querySelector('.countdown__item-days .countdown__value');
   const hoursValue = document.querySelector('.countdown__item-hours .countdown__value');
   const minutesValue = document.querySelector('.countdown__item-minutes .countdown__value');
   const secondsValue = document.querySelector('.countdown__item-seconds .countdown__value');


   const daysText = document.querySelector('.countdown__item-days .countdown__text');
   const hoursText = document.querySelector('.countdown__item-hours .countdown__text');
   const minutesText = document.querySelector('.countdown__item-minutes .countdown__text');
   const secondsText = document.querySelector('.countdown__item-seconds .countdown__text');

   function declOfNum(number, titles) {  // функция для того чтобы правильно склонять дни минуты и секунды
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
   }


   const timeCount = () => {
      let now = new Date() // нужно узнать текущее значение
      let leftUntil = time - now // узнаем сколько времени осталось до события (будет в милисекундах)
      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24); // переводим время и округляем чтобы было точное число
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
      let seconds = Math.floor(leftUntil / 1000) % 60;


      daysValue.textContent = days;
      hoursValue.textContent = hours;
      minutesValue.textContent = minutes;
      secondsValue.textContent = seconds;
      daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
      hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
      minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
      secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

   }


   timeCount();
   setInterval(timeCount, 1000); // важно объявить функцию тайм каунт до сет интервала, чтобы уже быди загружены данные
})