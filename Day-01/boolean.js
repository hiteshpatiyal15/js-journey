// Boolean
let isTrue = true;

// Check if the value is true
if (isTrue) {
    console.log("The value is true.");
}

// Check if the value is false
let isFalse = false;
if (!isFalse) {
    console.log("The value is false.");
}

// Convert a string to a boolean
let strValue = "true";
let boolValue = (strValue === "true");
console.log(`The boolean value is: ${boolValue}`);

// Convert a number to a boolean
let numValue = 1;
let boolFromNum = Boolean(numValue);
console.log(`The boolean value from number is: ${boolFromNum}`);

// Check if a variable is defined and not null
let someVar;
if (someVar !== undefined && someVar !== null) {
    console.log("The variable is defined and not null.");
}

// Boolean with another operator NaN, Undefined, null, 0, "", false are all falsy values in JavaScript. Any other value is considered truthy.
let falsyValue = 0;
if (!falsyValue) {
    console.log("The value is falsy.");
}
let truthyValue = "Hello";
if (truthyValue) {
    console.log("The value is truthy.");
}
let nullValue = null;
if (!nullValue) {
    console.log("The value is null and falsy.");
}
let undefinedValue;
if (!undefinedValue) {
    console.log("The value is undefined and falsy.");
}
let emptyString = "";
if (!emptyString) {
    console.log("The value is an empty string and falsy.");
}
let falseValue = false;
if (!falseValue) {
    console.log("The value is false and falsy.");
}
let nanValue = NaN;
if (!nanValue) {
    console.log("The value is NaN and falsy.");
}