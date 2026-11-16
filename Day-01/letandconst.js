let name = 'Hitesh';
console.log(name);

let age;
console.log(age); // undefined

// function greet() {
//     let message = 'Hello, World!';
//     console.log(message);
// }
// greet();
// console.log(message); // ReferenceError: message is not defined

let x = 10;
if (x > 5) {
    let y = 20;
    console.log(y); // 20
}

let number;
number = 42;
console.log(number); // 42

// Reassigning a new value to the variable
number = 100;
console.log(number); // 100

// Using let in a loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Using let in a block scope
{
    let blockVariable = 'I am inside a block';
    console.log(blockVariable); // I am inside a block
}

// Using let in a function scope
function testFunction() {
    let functionVariable = 'I am inside a function';
    console.log(functionVariable); // I am inside a function
}
testFunction();

// Using let in a nested block
{
    let outerVariable = 'I am in the outer block';
    {
        let innerVariable = 'I am in the inner block';
        console.log(outerVariable); // I am in the outer block
        console.log(innerVariable); // I am in the inner block
    }
}

// Using let in a conditional statement
let condition = true;
if (condition) {
    let conditionalVariable = 'I am inside the if block';
    console.log(conditionalVariable); // I am inside the if block
}

// Constant variable using const
const pi = 3.14159;
console.log(pi); // 3.14159

// Attempting to reassign a const variable will result in an error
// pi = 3.14; // TypeError: Assignment to constant variable.

// Using const with objects
const person = {
    name: 'Alice',
    age: 30
};
console.log(person); // { name: 'Alice', age: 30 }

// Modifying properties of a const object is allowed
person.age = 31;
console.log(person); // { name: 'Alice', age: 31 }

// Using const with arrays
const numbers = [1, 2, 3];
console.log(numbers); // [1, 2, 3]

// Modifying elements of a const array is allowed
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// Attempting to reassign a const array will result in an error
// numbers = [5, 6, 7]; // TypeError: Assignment to constant variable.

// Using const in a loop
for (const num of numbers) {
    console.log(num); // 1, 2, 3, 4
}

// Using const in a block scope
{
    const blockConst = 'I am a constant in a block';
    console.log(blockConst); // I am a constant in a block
}

// Using const in a function scope
function constFunction() {
    const functionConst = 'I am a constant in a function';
    console.log(functionConst); // I am a constant in a function
}

// Using const in a nested block
{
    const outerConst = 'I am a constant in the outer block';
    {
        const innerConst = 'I am a constant in the inner block';
        console.log(outerConst);    // I am a constant in the outer block
        console.log(innerConst);    // I am a constant in the inner block
    }
}