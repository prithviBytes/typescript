import axios from "axios";

type Todo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
.then( res => {
    const todos = res.data;
    let todo_one = todos[0];
    console.log(todo_one);
})
.catch( err => console.log("Error", err));