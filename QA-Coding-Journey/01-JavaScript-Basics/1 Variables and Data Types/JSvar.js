var greet = "Hello, welcome to the programming world";
console.log(greet);

//function scope of var
function demo() {
    var a = 20;
    console.log(a);
}
// console.log(a); // ReferenceError: a is not defined

//global scope
var global = "Global scope variable"
console.log(global);

//re-declaring variable
var name = "Jhon";
var name = "Rex";
console.log(name);

//Hoisting
console.log(hoist);
var hoist = 10;

if (true) {
    var blockVar = "Learin javascript with internet reference";
}
console.log(blockVar);

