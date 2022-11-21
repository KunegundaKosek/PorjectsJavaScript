const squere = document.querySelector('div');

let grow = true;

let size = 10; //wielkość kwadratu

squere.style.width = size + 'px';
squere.style.height = size + 'px';

window.addEventListener('scroll', function () {
    if (grow) {
        size += 5;
        squere.style.width = size + 'px';
        squere.style.height = size + 'px';
    } else {
        size -= 5;
        squere.style.width = size + 'px';
        squere.style.height = size + 'px';
    }

    if (size >= this.window.innerWidth / 2) {
        grow = !grow;
    } else if (size === 0) {
        grow = !grow;
    }
})
