const button = document.createElement('button');
button.textContent = 'Kliknij i zwiększ o 1';
document.body.appendChild(button);
const div = document.querySelector('div');

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        div.textContent = `aktualny stan licznika kliknięć to ${number}`;
    }
}

const counter = add();

button.addEventListener('click', counter);


const user = (name, age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić papierosy' : 'Nie możesz kupić papierosów'}`);
    }

    return showName;
}

const name = user('Eustachy', 19);
name();

const span = document.querySelector('span');
const clock = () => {
    let seconds = 0;
    span.textContent = `0 sekund`;

    const timer = () => {
        seconds++;
        span.textContent = `${seconds} sekund`;
    }
    return timer;
}

const when = clock();
setInterval(when, 1000);



