// Functions
function greet(name) {
    return `Hello, ${name}!`;
}

// Function with default parameter
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

// Function with rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function with arrow syntax
const multiply = (a, b) => a * b;

// Function with callback
function processArray(arr, callback) {
    return arr.map(callback);
}

// Function with closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

// Function with IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!");
})();

// Function with recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
