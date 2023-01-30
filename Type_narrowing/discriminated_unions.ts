interface Cow {
    name: string,
    age: number,
    weight: number,
    kind: "Cow"
}
interface Pig {
    name: string,
    age: number,
    weight: number,
    kind: "Pig"
}
interface Rooster {
    name: string,
    age: number,
    weight: number,
    kind: "Rooster"
}

type FarmAnimal = Rooster | Pig | Cow

function makeSound(animal: FarmAnimal): void {
    switch(animal.kind){
        case "Cow":
            console.log("Moo")
            return
        case "Pig":
            console.log("Oink")
            return
        case "Rooster":
            console.log()
            return
    }
}