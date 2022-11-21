
const slideList = [{
    img: 'img/photo1.jpg',
    text: 'Pierwszy tekst'
},
{
    img: 'img/photo2.jpg',
    text: 'Drugi tekst'
},
{
    img: 'img/photo3.jpg',
    text: 'Trzeci tekst'
}
];

const image = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

let time = 3000;
let active = 0;

changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active')
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;

        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide);