const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler)

/*function formHandler (event) {
    event.preventDefault();

    // Отримуємо значення з інпута
    const taskText = todoInput.value;

    // Створюємо тег li через розмітку
    const li = `<li>${taskText}</li>`;
    console.log(li)

    // Додаємо розмітку на сторінку
    todoList.insertAdjacentHTML("beforeend", li);

    // Очищуємо поле для вводу
    todoInput.value = "";

    // Фокус на полі для вводу
    todoInput.focus();

}*/

function formHandler (event) {
    event.preventDefault();

    const taskText = todoInput.value;

    // Створюємо тег li за допомогод створення елементу
    const newTask = document.createElement("li");
    newTask.innerText = taskText;

    // Створюємо кнопкку видалити
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("role", "button");
    deleteBtn.innerText = "X";
    deleteBtn.style["margin-left"] = "15px";
    newTask.append(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        this.closest("li").remove();
    });


    todoList.append(newTask);



    // Очищуємо поле для вводу
    todoInput.value = "";

    // Фокус на полі для вводу
    todoInput.focus();


}