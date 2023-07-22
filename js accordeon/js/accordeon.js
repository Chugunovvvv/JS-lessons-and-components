document.addEventListener('DOMContentLoaded', () => {
   const accordions = document.querySelectorAll('.accordion');
   console.log(accordions);
   accordions.forEach(el => {
      el.addEventListener('click', (e) => {
         const self = e.currentTarget // просто занесем в переменную нажатую цель
         console.log(self)
         const control = self.querySelector('.accordion__control') // находим текующую кнопку по которой нажимаем
         const content = self.querySelector('.accordion__content'); // точно также ищем выбранный контент

         self.classList.toggle('open');
         // если открыт аккордеон, то нужно поменать ариа атрибуты для допступности (чтобы воспроизводился звук)
         if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px'; // нужно найти высоту данного блока при помощи скролл хайт. она скалдывается из того что внутри блока
         } else {
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
         }
      })
   })
})