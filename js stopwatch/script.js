const counterElement = document.querySelector('#counter');
const btnStart = document.querySelector('#btn-start');
const btnPause = document.querySelector('#btn-pause');
const btnReset = document.querySelector('#btn-reset');
let counter = 0;
let timerID;

btnStart.onclick = function () {
   timerID = setInterval(function () {
      counter++;
      counterElement.innerText = counter;
   }, 1000);

};

btnPause.onclick = function () {
   clearInterval(timerID);
}
btnReset.onclick = function () {
   counter = 0;
   counterElement.innerText = counter;
   clearInterval(timerID);
}