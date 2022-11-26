const getUsers = (e) => {
    e.preventDefault();
    const usersNumber = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "gender"]').value;
    console.log(usersNumber, usersGender)
    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;
    console.log(url);

    fetch(url) // obietnica - oczekujący (pending)
        // obietnica - rozstrzygnięra (spełniona | odrzucona);
        // wykopnuje się then - pozytywna
        .then(response => {
            if (response.status !== 200) {
                throw Error("To nie jest odpowiedź 200");
            } else {
                return response.json(); // Fetch API = json() z body wyodrębnia json
            }
        })
        .then(json => showUsers(json.results))
        // wynkonuje się gdy rozstrzygnięcie - odrzucona
        .catch(err => console.log(err, "błąd"))

};

const showUsers = (users) => {
    const resultArea = document.querySelector('.user-list');
    resultArea.innerHTML = '';
    users.forEach((user) => {
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first} ${user.name.last} ${user.email}</div>
        <img class="user__image" src="${user.picture.large}" />
        `
        resultArea.appendChild(item)
    })
}

document.querySelector('.generator').addEventListener('submit', getUsers);