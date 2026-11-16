//Strings
let testName = "Login test Automation";

// find the string lenght
console.log(testName.length);

// convert to uppercase
console.log(testName.toUpperCase());

// convert to lowercase
console.log(testName.toLowerCase());

// check whether it contains "Login"
console.log(testName.includes("Login"));

// replace "Login " with 'Logout
console.log(testName.replace("Login", "Logout"));
const endIndex = testName.indexOf("n") + 1;
const replace = "Logout" + testName.substring(endIndex)
console.log(replace);

// check whether it starts with "Login"
console.log(testName.startsWith("Login"));

// check whether it ends with "Automation"
console.log(testName.endsWith("Automation"));

// trim the string
let testNameWithSpaces = "   Login test Automation   ";
console.log(testNameWithSpaces.trim());

// split the string into an array
let testNameArray = testName.split(" ");
console.log(testNameArray);

// get the character at index 0
console.log(testName.charAt(0));

// get the index of "test"
console.log(testName.indexOf("test"));

// get the last index of "test"
console.log(testName.lastIndexOf("test"));

// get the substring from index 6 to 10
console.log(testName.substring(6, 10));

// get the substring from index 6 to the end
console.log(testName.substring(6));

// get the substring from index 6 to the end using slice
console.log(testName.slice(6));

// get the substring from index 6 to 10 using slice
console.log(testName.slice(6, 10));