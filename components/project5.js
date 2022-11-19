const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ["user", "jesień"];
const messages = ["Wiadomość", "Pora roku"]

input.addEventListener('input', (e) => {
    const text = e.target.value;
    passwords.forEach(password => {
        if(password === text)
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