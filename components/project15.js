
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const text = document.querySelector('.text');

let time = 0;
let idInterval;
let isActive = false;

const startTime = () => {
    time++;
    text.textContent = (time / 100).toFixed(2);
}

const startCounter = () => {
    start.textContent = 'Pauza';
    idInterval = setInterval(startTime, 10);

}

const resetCounter = () => {
    start.textContent = 'Start';
    time = 0;
    text.textContent = '---';
    if (!isActive) {
        clearInterval(idInterval);
    }
}


start.addEventListener('click', startCounter);
reset.addEventListener('click', resetCounter);