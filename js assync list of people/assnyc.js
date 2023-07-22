const list = document.querySelector('#list');
const filter = document.querySelector('#filter')
let USERS = [] // сюда запоминает список пользователей с сервера

filter.addEventListener('input', (e) => {
   const value = e.target.value.toLowerCase()
   const filteredUsers = USERS.filter((user) => {
      return user.name.toLowerCase().includes(value) // проверяем совпадает ли с инпутом (по строчке)
   })
   render(filteredUsers)
})


async function start() {
   list.innerHTML = 'loading...'
   try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users') // получаем промис поэтому эвэит
      const data = await resp.json() // тоже будет промис, переводим формат
      console.log(data)
      setTimeout(() => { // для примера делаем искусственную задержку
         USERS = data // запонимаем список в юзерс
         render(data)
      }, 2000)

   } catch (err) {

      list.innerHTML = err.message // выводим ошибку
   }
}


function render(users = []) {
   if (users.length === 0) { // чтобы выводить если не нашел пользователей
      list.innerHTML = 'no mathched users'
   } else {
      const html = users.map(toHTML).join('')  // join чтобы не было запятых когда выводятся пользователи
      // на каждой итерации пользователь будет попадать в функцию тухтмл и действовать по шаблону
      list.innerHTML = html
   }

}
function toHTML(user) {
   return `
<li class="list-group-item">${user.name}</li>
   `
}

start()