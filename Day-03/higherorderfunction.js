// Higher order function is a function that takes another function as an argument or returns a function as a result. In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as numbers or strings. This allows us to pass functions as arguments to other functions, return functions from other functions, and store functions in variables.

// Example of a higher order function that takes a function as an argument
function greetUser(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}

// Example of a higher order function that returns a function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

// Example of a higher order function that takes an array and a callback function
function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// Example of a higher order function that takes a function as an argument and returns a function
function createGreetingFunction(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

// Example of a higher order function that takes a function as an argument and returns a function
function createLogger(prefix) {
    return function (message) {
        console.log(`${prefix}: ${message}`);
    };
}

// Higher order function usage examples:
const multiplier = createMultiplier(2);
console.log(multiplier(5)); // Output: 10

const greetingFunction = createGreetingFunction("Hi");
console.log(greetingFunction("Alice")); // Output: Hi, Alice!

const logger = createLogger("INFO");
logger("This is an info message."); // Output: INFO: This is an info message.

