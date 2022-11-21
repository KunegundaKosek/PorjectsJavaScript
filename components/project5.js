const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ["usEr", "jesIeŃ"];
const messages = ["Wiadomość", "Pora roku"];

passwords[1].toUpperCase();
passwords[0].toUpperCase();


input.addEventListener('input', (e) => {

    const text = e.target.value;
    div.textContent = '';
    passwords.forEach((password, index) => {
        if (password.toUpperCase() === text.toUpperCase()) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })


})

input.addEventListener("focus", (e) => {
    e.target.classList.add('active');
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove('active');
})

// e.target.classList.remove('active');
// toogle = jak jest to zabierz, jak nie ma to dodaj