const showMore = document.querySelector('.btn-center');
const cardsLenght = document.querySelectorAll('.card').length; // ищем сколько всего карточек
console.log(showMore)
let items = 6; // количество видимых карточек

showMore.addEventListener('click', () => {
   items += 3; // отображаем 3 карточки
   const array = Array.from(document.querySelector('.cards').children) // находим массив элементов (все карточки)
   console.log(array)
   const visItems = array.slice(0, items); // выреазем из полученного массива эти 3 карточки которые будут отображаться
   visItems.forEach(el => { // пробегаемся по этим карточкам и показываем их
      el.classList.add('visible');
   })
   if (visItems.length === cardsLenght) { // как мы отобразили все карточки и их больше нет - убираем кнопку
      showMore.style.display = 'none';
   }
})