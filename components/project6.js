// Losuj imie
// 1. pobierz selektory
// 2. zadeklaruj tablice
// 3. dodaj addEventListener na 'click' i stwórz funkcje nameGenerator
// 4. za pomocą Math.random() wylosuj index tablicy

const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Kunegunda", 'Gerwazy', 'Zygfryd', 'Eustachy'];
const prefixs = ['Wydaje mi się', 'Mam wrażenie', 'Na 100% twierdzę', 'Jestem pewna'];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);

// generator kodów
// 1. Pobierz selektory
// 2. zadeklaruj zmienną z możliwymi znakami do wyświetlenia
// 3. 
const button = document.querySelector('#generate');
const section = document.querySelector('section');

const chars = 'ABCDEFGHIJKLMNOPRSTUWXYZ0123456789';
const codesNumber = 10;
const charsNumber = 10;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * 34);
            code += chars[index];
        }

        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

button.addEventListener('click', codesGenerator);

// dodawanie elementu do tablicy

const btnButton = document.querySelector('#generateBtn');
const p = document.querySelector('p');

const firstName = [];

const addName = (e) => {
    const input = document.querySelector('input');
    const newName = input.value;

    if (input.value.length) {
        for (name of firstName) {
            if (name === newName) {
                alert('to już jest!')
                return;
            }
        }
        firstName.push(newName);
        p.textContent += newName + ', ';
        input.value = '';
    }


}

btnButton.addEventListener('click', addName);

// Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz)
// Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli
// przycisk reset: usuwa możliwości (tablica staje się pusta);
// Przycisk pokaż odpowiedź: losuje z tablicy możliwość
// Przycisk pokaż możliwości - pokazuje w alercie zawartośc tablicy

const options = ['opcja1', 'opcja2'];

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    document.querySelector('h1').textContent = options[index];
}

const addOptions = (e) => {
    e.preventDefault();
    const input = document.querySelector('.compInput');
    options.push(input.value);

    if (input.value.length) {
        alert(`dodana została opcja ${input.value}`);
    } else {
        alert('Input nie może być pusty!');
    }
    input.value = '';

}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = '';
}

const showOptions = () => {
    alert(options.join(' --- --- '))
}

document.querySelector('.add').addEventListener('click', addOptions);
document.querySelector('.clean').addEventListener('click', resetOptions);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOptions);


//
// Math.random() * (6 - 4) + 4;
// Math.random() * (max - min) + min

const numberRandom = () => {
    const number = Math.floor(Math.random() * (50 - 60) + 50);
    document.querySelector('.randomNumber').textContent = number;
}

const randomButton = document.getElementById('randomNumber');
randomButton.addEventListener('click', numberRandom);




