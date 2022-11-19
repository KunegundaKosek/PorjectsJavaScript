// 1. dodawanie listenera na body, "mousemove", wyciąganie pozycji myszki (clientX, clientY)
// 2. Pobierz h1 i wyświetl w niej pozycje myszki
// 3. Dodaj zmienne i wyciąg wysokość/szerokość okna przeglądarki za pomocą window.inner width/height
// 3. dodaj styl background na body i dodaj kolor rgb pobrany z eventu

const h1 = document.querySelector("h1");
document.body.addEventListener("mousemove", function (event) {
    
    const x = event.clientX + 1;
    const y = event.clientY + 1;

    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = x + ", " + y;

    const red = x/width * 100;
    const green = y / height * 100;
    const blue = (x/width * 100) + (y / height * 100) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

    // document.body.style.backgroundColor = `rgb(${event.clientX/2}, ${event.clientY/5}, ${event.clientX / event.clientY * 3})`;
})