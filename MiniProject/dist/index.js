"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.getElementById("todoList");
let todos = readTodos();
(function onInit() {
    todos.forEach(createTodoElement);
})();
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    let newTodo = {
        text: input.value,
        completed: false
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = "";
}
function createTodoElement(todo) {
    const newLI = document.createElement("li");
    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newCheckBox.checked = todo.completed;
    newCheckBox.addEventListener('change', (e) => {
        console.log(e);
        todo.completed = newCheckBox.checked;
        saveTodo();
    });
    newLI.append(todo.text);
    newLI.append(newCheckBox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
