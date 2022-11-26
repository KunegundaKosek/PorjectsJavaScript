export default function () {
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome!';
    h2.className = 'title';
    const p = document.createElement('p');
    p.textContent = 'This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy.';
    p.className = 'p';
    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);
}