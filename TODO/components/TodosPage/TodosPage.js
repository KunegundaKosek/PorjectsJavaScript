export default function () {

    let task = 0;

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const removeTask = (e) => {
        e.target.remove();
    }

    const h1 = document.createElement('h1');
    h1.textContent = 'Lista rzeczy do zrobienia';
    h1.className = 'title';
    content.appendChild(h1);

    const p = document.createElement('p');
    p.className = 'p';
    p.textContent = 'Dodaj zadanie';
    content.appendChild(p);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.className = 'inputTodos';
    content.appendChild(input);

    const btnAdd = document.createElement('button');
    btnAdd.textContent = 'Dodaj zadanie';
    btnAdd.className = 'buttonTodos';
    content.appendChild(btnAdd);

    const span = document.createElement('span');
    span.textContent = `Masz do zrobienia ${task} zadań`;
    span.style.display = 'block';
    content.appendChild(span);

    const ul = document.createElement('ul');
    content.appendChild(ul);

    const addTodo = () => {
        const input = document.querySelector('input');
        if (input.value) {
            task++;

            if (task === 1) {
                span.textContent = `Masz do zrobienia ${task} zadanie`;
            } else {
                span.textContent = `Masz do zrobienia ${task} zadania`;
            }
            const li = document.createElement('li');

            const x = document.createElement('span');
            x.className = 'x';
            const o = document.createElement('span');
            o.className = 'o';
            x.textContent = '[x]';
            o.textContent = '[o]';

            li.textContent = `${input.value}`;
            ul.appendChild(li);
            ul.appendChild(x);
            ul.appendChild(o);
            input.value = '';
        } else {
            alert('Pole nie może być puste');
        }
    }

    btnAdd.addEventListener('click', addTodo);

    const x = document.querySelector('.x');
    // const 
    // x.addEventListener('click', removeTask);

}




