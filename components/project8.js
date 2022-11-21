// 1. podpiąć pod przycisk nasłuchiwanie na click
// 2. Zadeklarować funkcję
// 3. W funkcji stworzyć element html(div)
// 4. Dodać div do strony
// 5. Stworzyć licznik i uzupełnić zawartość elementu div o wartość licznika
// 6. Za pomocą instrukcji warunkowej stwierdzić czy dany element jest podzielny przez 5, jeśli tak to nadać mu inną klasę

const addEl = document.querySelector('.addEl');
const div = document.querySelector('div');

let counter = 0;

const addDiv = () => {
    const divElement = document.createElement('div');
    divElement.textContent = ++counter;

    if (counter % 5 !== 0) {
        divElement.className = 'divNumber';

    } else {
        divElement.className = 'divNumberModulo5';

    }


    div.appendChild(divElement);


};

addEl.addEventListener('click', addDiv);


const button = document.getElementById('button');
const ul = document.querySelector('ul');

let number = -1;

const addElementList = () => {
    const li = document.createElement('li');
    li.textContent = number += 2;

    if (number % 3 === 0) {
        li.style.fontSize = '40px'
    } else {
        li.style.fontSize = '20px';
    }

    ul.appendChild(li);
}

button.addEventListener('click', addElementList);
