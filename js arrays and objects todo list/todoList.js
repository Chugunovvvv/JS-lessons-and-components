const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// const notes = ['write blog', 'tell about object'];


/*function getNoteTemplate(title) {  // делаем функцию для шаблона хтмл 
   return `<li class="list-group-item d-flex justify-content-between align-items-center">
   <span>${title}</span>
   <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
   </span>
   </li>`
}

*/

/*function render() { // функция, выводящая массив с запуска страницы
   for (let i = 0; i < notes.length; i++) { // выводим элементы массива с помощью цикла, а не вручную
      listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[i]))
   }

}
render() */



/* createBtn.onclick = function () {
   if (inputElement.value.length === 0) { // чтобы не добавлялись пустые ячейки
      return
   }
   // listElement.innerHTML = inputElement.value; 
    listElement.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputElement.value}</span>
    <span>
       <span class="btn btn-small btn-success">&check;</span>
       <span class="btn btn-small btn-danger">&times;</span>
    </span>
 </li>`
 
   listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(inputElement.value))  // первый параметр куда положить код а вторым строчку 
   inputElement.value = ''; // чтобы после того как написала слово и добавили, инпут отчистился
} 
*/


const notes = [
   {
      title: 'write blog',
      completed: false,
   },
   {
      title: 'tell about object',
      completed: true,
   }];

function render() { // функция, выводящая массив с запуска страницы
   listElement.innerHTML = '' // очищаем шаблон чтобы не дублировались пункты
   if (notes.length === 0) {
      listElement.innerHTML = '<p>Нет элементов</p>'
   }
   for (let i = 0; i < notes.length; i++) { // выводим элементы массива с помощью цикла, а не вручную
      listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[i], i)) // используем не иннер хтмл а инджект, чтобы последующие пункты тоже добавлялилсь а не обновлялся один
   }

}
render()

createBtn.onclick = function () {
   if (inputElement.value.length === 0) { // чтобы не добавлялись пустые ячейки
      return
   }
   const newNote = { // создаем объект и передаем его в функцию чтобы выводились пункты а не андефайнд на странице
      title: inputElement.value,
      completed: false
   }
   // чтобы у последующих пунктов заметок тоже были дата индексы нужно связать исходный и новый массив
   notes.push(newNote)
   render()
   /*listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(newNote))  // первый параметр куда положить код а вторым строчку */
   inputElement.value = ''; // чтобы после того как написала слово и добавили, инпут отчистился
}


listElement.onclick = function (event) {
   if (event.target.dataset.index) {
      const index = parseInt(event.target.dataset.index) // получаем индекс элемента по которому мы клиаем (это всегда число поэтому парсе инт или намбер)
      const type = event.target.dataset.type // также получаем тип

      if (type === "toggle") { // дата тайпы нужны чтобы мы видели за что кнопка отвечает
         notes[index].completed = !notes[index].completed // нужно просто менять тру или фолс в нужном месте в массиве предыдущее было тру значит делаем фолс
      } else if (type === "remove") {
         notes.splice(index, 1) // метод сплайс первый параметр индекс(какой элемент нужно удалить), а второй количество
      }
      console.log(event.target.dataset.index)
      render()
   }
}


// добавляем еще i в параметрах функции чтобы отслеживать на какую кнопку нажимаем
function getNoteTemplate(note, index) {  // делаем функцию для шаблона хтмл 
   return `<li class="list-group-item d-flex justify-content-between align-items-center">
   <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
   <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
   </span>
   </li>`
   /* если заметка выполнена и стоит значение тру то добавляем класс который зачеркивает ее 
   надо понимать на какую именно кнопку мы кликнули поэтому добавляем информацию про шаблон в массив*/
}
// вместо того чтобы добавлять несколько слушателей, используем делегирование событий, добавим одно событие клика на весь список