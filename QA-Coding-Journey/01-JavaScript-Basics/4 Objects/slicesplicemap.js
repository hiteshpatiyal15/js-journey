// Slice
//remove, insert and replaces
let char = ['q', 'w', 'e', 'r', 't', 'y']
console.log(char.slice(0, 3));
console.log(char.slice(0, 7))
console.log(char.slice(0, -4));

//splice - remove
let numbers = [10, 20, 30, 40, 50]
let remove = numbers.splice(0, 2)
console.log(remove);
console.log(numbers);

//splice - insert
numbers.splice(1, 1, 55, 66, 88)
console.log(numbers);

//splice - replace
numbers.splice(1, 1, 25)
console.log(numbers);

// Map
let multiplyNumber = numbers.map(function (value) {
    return value*2
})
console.log(multiplyNumber)