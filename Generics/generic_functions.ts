

function identity<Type>(item: Type): Type {
    return item;
}

console.log(identity<string>("Messi"));

function getRandomElement<T>(elements: T[]): T {
    let randomIdx = Math.floor(Math.random() * elements.length)
    return elements[randomIdx]
}

console.log(getRandomElement<number>([123, 124, 21244]))

// Automatically Infers the type
console.log(getRandomElement(["asdasd","dadasd","dadsda"]))

// Generics with mutiple types
type Car  = {
    speed: number
}
interface Shade {
    color: string
}
function merge<T,U>(obj1: T, obj2: U): T & U {
    return {
        ...obj1,
        ...obj2
    }
}

//Passing type is also optional here since ts can infer it
console.log(merge<Car,Shade>({speed: 120}, {color: "red"}))

// Adding type constraints
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U){
    return {
        ...obj1,
        ...obj2
    }
}


// Default type
function defaultTypeParameter<T = number>(): T[] {
    return [];
}

const res1 = defaultTypeParameter();
const res2 = defaultTypeParameter<string>();


//Generic classes

interface Song {
    name: string,
    artist: string
}

interface Video {
    name: string,
    creator: string,
    resolution: string
}

class Playlist<T extends Song|Video> {
    public queue: T[] = [];

    add(item: T) {
        this.queue.push(item);
    }
}

let videoPlaylist = new Playlist<Video>();
let songPlaylist = new Playlist<Song>();
// Throws an error as it doesnt staisfy the constraints
// let random = new Playlist<string>();