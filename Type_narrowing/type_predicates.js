// This type of function return type is know as type predicates
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoice(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
    else {
        return "Woof!";
    }
}
