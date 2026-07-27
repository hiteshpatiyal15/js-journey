//Given an array of mixed numbers, use .filter() to create a new array containing only
//  the even numbers
let arr = [21,82,33,44,55]
let evenNumber = arr.filter(num=> num%2==0)
console.log(evenNumber)

// Filter a list of character names to only include those longer than 5 letters
let names = ["Hitesh", "Abhay", "Satyarth", "Rohit", "Amit"]
let longNames = names.filter(name=> name.length>5)
console.log(longNames)

// Given an array of objects representing products (with name and price), 
// use .reduce() to get the total cost of all products.
let products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
];
let totalCost = products.reduce((total, product)=> total + product.price, 0)
console.log(totalCost)

