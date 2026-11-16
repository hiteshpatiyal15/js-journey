// Fallback Operator
let name = null;
let defaultName = "Guest";
let finalName = name || defaultName;
console.log(finalName); // Output: Guest

// Fallback Operator with a non-null value
let userName = "John";
let finalUserName = userName || defaultName;
console.log(finalUserName); // Output: John

// Fallback Operator with an empty string
let emptyName = "";
let finalEmptyName = emptyName || defaultName;
console.log(finalEmptyName); // Output: Guest

// Fallback Operator with a number
let userAge = 0;
let defaultAge = 18;
let finalAge = userAge || defaultAge;
console.log(finalAge); // Output: 18

// Fallback with function
let getUserRole = () => {
    return null;
};
let defaultRole = "User";
let finalRole = getUserRole() || defaultRole;
console.log(finalRole); // Output: User