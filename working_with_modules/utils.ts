
function sum(x: number, y: number) {
    return x + y;
}

function sample<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}

export {sum, sample}