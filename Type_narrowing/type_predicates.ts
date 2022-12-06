interface Cat {
    name: string,
    numLives: number
}
interface Dog {
    name: string,
    age: number
}

// This type of function return type is know as type predicates
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoice(animal: Cat | Dog): string {
    if(isCat(animal)){
        return "Meow"
    }else{
        return "Woof!"
    }
}

