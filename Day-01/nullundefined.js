// Null & Undefined
let a = null;
console.log(a); // Output: null

let b;
console.log(b); // Output: undefined

// Checking if a variable is null
if (a === null) {
    console.log("The variable 'a' is null.");
}

// Checking if a variable is undefined
if (b === undefined) {
    console.log("The variable 'b' is undefined.");
}

// Assigning a value to an undefined variable
b = 10;
console.log(b); // Output: 10

// Assigning null to a variable
a = 20;
console.log(a); // Output: 20

// Using null in a function
function checkValue(value) {
    if (value === null) {
        console.log("The value is null.");
    } else if (value === undefined) {
        console.log("The value is undefined.");
    } else {
        console.log("The value is: " + value);
    }
}

checkValue(null);
checkValue(undefined);
checkValue(30);