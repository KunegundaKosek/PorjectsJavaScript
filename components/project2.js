// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY
// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta to kolor jest czerwony
// jeśli wartość dla x i y jest nieparzysta to kolor jest niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = 'red';
        console.log(x, y);
    } else if (x % 2 === 1 && y % 2 === 1) {
        document.body.style.backgroundColor = 'blue';
        console.log(x, y);
    } else {
        document.body.style.backgroundColor = 'green';
        console.log(x, y);
    }
})