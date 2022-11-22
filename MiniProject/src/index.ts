interface Todo {
    text: string,
    completed: boolean
}

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todoList")!;
let todos: Todo[] = readTodos();

(function onInit(){
    todos.forEach(createTodoElement);    
})();

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON);
}

function saveTodo(): void{
    localStorage.setItem('todos', JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    let newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodoElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = "";
}

function createTodoElement(todo: Todo): void {
    const newLI = document.createElement("li");
    const newCheckBox = document.createElement("input")
    newCheckBox.type = "checkbox";
    newCheckBox.checked = todo.completed;
    newCheckBox.addEventListener('change', (e) => {
        console.log(e)
        todo.completed = newCheckBox.checked;
        saveTodo();
    })
    newLI.append(todo.text);
    newLI.append(newCheckBox);
    list.append(newLI);
}

form.addEventListener("submit", handleSubmit);

