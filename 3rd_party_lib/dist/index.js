"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
    const todos = res.data;
    let todo_one = todos[0];
    console.log(todo_one);
})
    .catch(err => console.log("Error", err));
