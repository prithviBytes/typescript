"use strict";
class Player {
    constructor(firstName, lastName) {
        this._score = 0;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Equivalent to above code
    // constructor(public readonly first: string, public readonly last: string){}
    secretMethod() {
        console.log("SECRET METHOD");
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw "Score cannot be negative";
        }
        this._score = newScore;
    }
}
let messi = new Player("Lionel", "Messi");
console.log(messi.firstName);
console.log(messi.lastName);
console.log(messi.fullName);
messi.score = 7;
console.log(messi.score);
