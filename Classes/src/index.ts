
class Player {
    public readonly firstName: string;
    public readonly lastName: string;
    private _score: number = 0;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Equivalent to above code
    // constructor(public readonly first: string, public readonly last: string){}

    private secretMethod(): void {
        console.log("SECRET METHOD");
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw "Score cannot be negative"
        }
        this._score = newScore;
    }
}

let messi = new Player("Lionel", "Messi")
console.log(messi.firstName)
console.log(messi.lastName)
console.log(messi.fullName)
messi.score = 7;
console.log(messi.score);
