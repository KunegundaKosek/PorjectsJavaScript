// // Lista jest stworzona w strukturze html, ale domyślnie niewidoczna (dispaly: none).
// // - Po kliknięciu na przycisk mamy sprawić by każdy element li był widoczny (ustawienie właściwości display na block)
// // - by po każdym kliknięciu w button wielkość fonta była o jeden większa od początkowego (ustaw w JS wartość początkową na 10px)

const liItems = document.querySelectorAll('li');
const button = document.querySelector('button');
let fontSize = 10;

const addList = () => {
    fontSize++;
    for (let i = 0; i < liItems.length; i++) {
        if (!liItems[i].style.display) {
            liItems[i].style.display = "block";
        }
            liItems[i].style.fontSize = fontSize + 'px';
    }

}

button.addEventListener('click', addList);

