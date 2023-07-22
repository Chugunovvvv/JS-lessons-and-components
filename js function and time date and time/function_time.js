const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
let mode = 'time' // по умолчаню когда заходим на страницу будет отоброжаться только время, для этого будем использовать конкструкцию свитч кейсов (и функцию с замыканием)


function bindMode(name) {  // замыкание 
   return function () {
      mode = name
      update()
   }
}

update()

setInterval(() => {
   update()
}, 1000)

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

/* пример без замыкания
fullBtn.onclick(function () {
   mode = 'full'
   update() обновлняем еще раз чтобы переход между кнопками был без задержки
})

fullBtn.onclick(function () {
   mode = 'date'
   update()
})

fullBtn.onclick(function () {
   mode = 'time'
   update()
})

*/

function update() {
   output.textContent = format(mode)
}


function format(formatMode) {
   const now = new Date()
   switch (formatMode) {
      case 'time': return now.toLocaleTimeString()
      case 'date': return now.toLocaleDateString()
      case 'full': return now.toLocaleDateString() + '' + now.toLocaleTimeString()
      default: return now.toLocaleTimeString
   }


}