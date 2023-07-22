// 16.03.2023

// Имена переменных:

// PascalCase - типы и классы
// DB_PASSWORD - значения известны до запуска приложения и не меняются 
// camelCase - все остальные переменные (используется чаще всего)
// Объявление переменных: let, const, var;

/* 
Примитивные типы:
string
boolean
number
null
undefined
symbol
Ccылочный тип только один - это object
Переменная хранит ссылку на объект и мы можем менять объект
Динамически типизация - можем менять типы переменных.
Существует оператор typeof - определяет тип переменной - console.log(typeof ...)
Символ - это уникальное примитивное значение. Оно позволяет добавить уникальное свойство к объекту, с уверенностью, что он не перезапишет никакое другое св-во.

Операторы сравнения и условия.
Операторы сравнения:
>, <m <=, =>
== - нестрогое сравнение (может приводить типы к одному при сравнение например при сравнение строки и числа)

=== строгое сравнение (не приводит типы к одному)
!= нестрогое неравенство 
!== строгое неравенство


Тернарый оператор.

Пример обычного сравнения:
if (10<12) {
   console.log('good')
} else {
   console.log('no-good')
} 

Пример с тернарный оператором:
10 < 12 ? console.log('good') : console.log('no-good');

конкатенация строк и шаблонные строки

let greeting = 'hello mark';
let howareyou = 'how are you';
let sayHi = greeting + howareyou;

конкатенация 'string' + 'string'

const userName = 'mark';
console.log('hello, ' + userName + '! How are you?');

шаблонные строки и интерполяция
console.log(`hello, ${userName}! how are you?`);

Функции. 

DRY - dont repeat yourself

function sayHi() {
   console.log('hello world');
}
sayHi();

function declaration
function sayHi () {
   console.log('hello');
}

function expression 
let sayHi = function () {
   console.log('hello');
}

Стрелочная функия. 
function sayHi () {
   console.log('hello');
}

const arrSayHi = () => {
   console.log('hello');
} 

Массивы:
Методы массивов:
.push(), .pop(), inshift(), .splice(), .slice(), .forEach(), indexOf(), includes() ...


.push(... items) - добавляешь элемент в конец массива
arr.pop() - удалить элемент из конца массива
arr.shift() - удалить элемент из начала массива
arr.unshift(... items) - добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])


Циклы.

for (let i = 0, i < 10; i++) {
   console.log(i);
}

for (i=0; i < arr.length; i++) {
   console.log(arr[i]);
}



Обход массивном for ( of) 
*/
// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
//for (let item of autoBrands) {
//   console.log(item);
//}

// метод forEach() 

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach(function (item, index) {
   console.log(`${item} => ${index}`);
})


// через стрелочную функцию
const AutoBrands = ['audi', 'bmw', 'mazda', 'toyta'];
AutoBrands.push('lada');

AutoBrands.forEach((brand, i) => {
   console.log(`${brand} her index ${i}`);
})

/*
Объекты.
*/
let userName = 'roman';
let age = 30;
let isMarried = false;
const person = {
   userName: 'roman',
   age: 30,
   isMarried: false
}
console.log(person);
console.log(person.userName); // обычно доступ к свойству
console.log(person['age']);  // если имя свойства находится в переменной
person.profession = 'JS developer'; // добавления свойства
console.log(person);
delete person.age;
console.log(person);
// также объекты могут быть вложенными и также они имеют ссылочный тип
// методы в объектах
/*  const person2 = {
   userName: 'Roman',
   age: 18,
   isMarried: true,
   sayHi: function (name) {  // функция, которая явялется св-вом объекта называется методом. 
      console.log(`hello! ${name}`);
   }
}
person2.study = 'in samara national university';
console.log(person2);
person2.sayHi('Roman');


*/
// ключевое слово this
/*
const person2 = {
   userName: 'Kseniya',
   age: 18,
   isMarried: true,
   sayHi: function (name) {  // функция, которая явялется св-вом объекта называется методом. 
      console.log(this);
      console.log(`hello, ${name}! My name ${this.userName}.`);
   }
}
person2.sayHi('Roman');
ключевое слово this внутри метода объекта ссылается на объект
*/




// объекты обход циклов for in 
/*
const person2 = {
   userName: 'Kseniya',
   age: 18,
   isMarried: true,
   sayHi: function (name) {  // функция, которая явялется св-вом объекта называется методом. 
      console.log(this);
      console.log(`hello, ${name}! My name ${this.userName}.`);
   }
}
person2.sayHi('Roman');
for (let key in person2) {

   console.log(key, ':', person2[key]);
}
*/
// конструкторы объектов. классы.
// представим ситуацию, когда нам надо писать несколько одинаковых объектов
/*
const person1 = {
   userName: 'Roman',
   age: 18,
   isMarried: false,
   sayHi: function () {
      console.log(`Hello, ${yourName}! My name is ${userName}`);
   }
}

const person2 = {
   userName: 'Kseniya',
   age: 21,
   isMarried: false,
   sayHi: function () {
      console.log(`Hello, ${yourName}! My name is ${userName}`);
   }
}
*/
// класс - это как чертеж для всех будущих объектов person которые будут создаваться на его основе
/*
class Person {
   constructor(userName, age, isMarried) {
      this.userName = userName;
      this.age = age;
      this.isMarried = isMarried;
   };
   sayHi(name) {    // описывает метод в классе (без ключевого слова function)
      console.log(`Hello, ${name}! My name is ${this.userName}`);
   }
}

const person1 = new Person('Roman', 30, false);
const person2 = new Person('Kseniya', 21, false);
console.log(person1);
console.log(person2);
person1.sayHi('Kseniya');
*/

// Ассинхроность - это последовательное выполнение кода.
// callback function. callback hell.
// колбек функции - это функция в которые передается другие функции и вызываются после их завершения. колбэк хелл это когда код разрастается вправо. В этом случае испольуем промисы. 


/*function checkRooms() {

   setTimeout(function () {
      console.log('Проверяем номера в отеле...');
      const availabRooms = true;

      if (availabRooms()) {
         consloe.log('Номера есть!');
         console.log('Едем в отпуск!');

      } else {
         console.log('номеров нет');
         console.log('отпуск отменяется.');
      }
   }, 1000)

}
*/

const checkRooms = new Promise(function (resolve, reject) {
   setTimeout(function () {
      console.log('Checking number rooms...');
      const availabRooms = true;

      if (availabRooms) {
         resolve('get number!');
      } else {
         reject('no number!');
      }
   }, 1500)
})
// потребялем промис

checkRooms.then(function (data) {
   console.log('then 1');
   console.log('Answer before step:', data);
   console.log('go to relax!');
}).catch(function (data) {
   console.log('catch');
   console.log('Answer before step:', data);
   console.log('dont go relax!');
})







