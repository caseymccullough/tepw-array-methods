// Create an array
// const groceries = ['apples', 'bananas', 'carrots', 'donuts'];

const groceryItem1 = {item: "apples", quantity: 6 };
const groceryItem2 = {item: "bananas", quantity: 4 };
const groceryItem3 = {item: "carrots", quantity: 2 };
const groceryItem4 = {item: "donuts", quantity: 12 };

const groceries = [groceryItem1, groceryItem2];

groceries.push(groceryItem3);

groceries.push({item: "donuts", quantity: 12 });

console.log(groceries);

console.log (groceries[0].item);
console.log (groceries[0].quantity);
console.log("Buy " + groceries[0].quantity + " " + groceries[0].item);
console.log("Buy " + groceries[1].quantity + " " + groceries[1].item);
console.log("Buy " + groceries[2].quantity + " " + groceries[2].item);
console.log("Buy " + groceries[3].quantity + " " + groceries[3].item);

console.log (groceries[0])
let containsApples = groceries.includes('apples'); // true
let containsMangoes = groceries.includes('mangoes'); // false
