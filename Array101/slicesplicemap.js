const names = ["Yashraj", "Thomas", "Kate", "Kartik"];  

//slice
const slicedNames = names.slice(0, 2)
console.log("Slice from 0 to 2 index:", slicedNames)
console.log("Original array:", names);

//splice - remove
const removed = names.splice(1, 1)
console.log("Removed elements:", removed);
console.log("Original array:", names);

// splice - insert
const insert = names.splice(0, 1, "Aditya", "Aman")
console.log("Insert elements:", insert);
console.log("Original array:", names);


// replace
const replace = names.splice(2,1, "Chirag")
console.log("Replace elements:", replace);
console.log("Original array:", names);

// maps
const upperCase = names.map(function (value) {
    return value.toUpperCase()
})
console.log(upperCase)

let number = [3, 5, 2, 90]
console.log("Original numbers: " , number);

let multiply = number.map((value) => {
    return value * 2;
})
console.log("Number multiply by 2:", multiply);




