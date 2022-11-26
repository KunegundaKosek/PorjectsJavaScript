import HomePage from "./components/HomePage/HomePage.js";
import TodosPage from "./components/TodosPage/TodosPage.js";

const homeButton = document.getElementById('home-anchor');
const todosButton = document.getElementById('todos-anchor');

TodosPage();

const renderHomePage = () => {
    HomePage();
}

const renderTodosPage = () => {
    TodosPage();
}

homeButton.addEventListener('click', renderHomePage);
todosButton.addEventListener('click', renderTodosPage);

// HomePage();