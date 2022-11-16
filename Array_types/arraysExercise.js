// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [['dasdada']];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    return products.reduce(function (acc, obj) {
        return acc + obj.price;
    }, 0);
}
var allProducts = [
    {
        name: "dsada",
        price: 20
    },
    {
        name: "dsada",
        price: 100
    },
    {
        name: "dsada",
        price: 50
    }
];
console.log(getTotal(allProducts));
