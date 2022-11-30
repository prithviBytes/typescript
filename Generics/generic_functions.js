"use strict";
function identity(item) {
    return item;
}
console.log(identity("Messi"));
function getRandomElement(elements) {
    let randomIdx = Math.floor(Math.random() * elements.length);
    return elements[randomIdx];
}
console.log(getRandomElement([123, 124, 21244]));
// Automatically Infers the type
console.log(getRandomElement(["asdasd", "dadasd", "dadsda"]));
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
//Passing type is also optional here since ts can infer it
console.log(merge({ speed: 120 }, { color: "red" }));
// Adding type constraints
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Default type
function defaultTypeParameter() {
    return [];
}
const res1 = defaultTypeParameter();
const res2 = defaultTypeParameter();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(item) {
        this.queue.push(item);
    }
}
let videoPlaylist = new Playlist();
let songPlaylist = new Playlist();
// Throws an error as it doesnt staisfy the constraints
// let random = new Playlist<string>();
