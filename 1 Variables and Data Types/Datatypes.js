//1. Number
let a = 12;
console.log(a);
let b = 11.5;
console.log(b);
let c = Infinity;
console.log(c);
let d = 'something here too' / 2;
console.log(d);

//2. String
let str1 = "double quotes work fine";
console.log(str1);

let str2 = "Single quotes work fine";
console.log(str2);

let str3 = `can embed ${str1}`;
console.log(str3);

//3. Boolean
let p = true;
console.log(p);
let q = false;
console.log(q);

// Undefined
let x;
console.log(x);

// Null
let age = null;
console.log(age);

//Non primitive data types
//1. Object
let myObj = {
    type: "company",
    location: "mumbai"
}
console.log(myObj.type);
console.log(myObj.location);

//2. Arrays
let arr1 = [1, 2, 3, 4, 5]
console.log(arr1);
let arr2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(arr2);

//3. Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Hitesh"));

//4. Date Object
let currentDate = new Date();
console.log(currentDate);

// var
var greet = "I am a var variable";
console.log(greet);

function demo() {
    var localVar = 20;
    console.log(localVar);
}
// console.log(localVar); // ReferenceError: a is not defined

var globalVar = "I am a global variable";
console.log(globalVar);

// red-declaring variable
var username = "Rajat";
var username = "Mahipal";
console.log(username);

// hoisting
console.log(myVaribale);
var myVaribale = 10;

// no block scope
if (true) {
    var blockVar = "Learning JavaScript with some references";
}
console.log(blockVar);

// let keyword variable
let message;
message = "You can't go back and change the beginning but you can start where you are and change the ending";
console.log(message);

let y = 27;
console.log("Outside the function y = " + y);
function show() {
    console.log("Inside the function y = " + y);
}
show();

function show1() {
    let num = 2;
    console.log("Inside the show1 function y = " + num);
}
show1();
// console.log("Outside the show1 function y = "+ num); //ReferenceError: num is not defined

// re-declaring let variable is not allowed
// let variable = "variable 1";
// {
//     let variable = "variable 2";
//     console.log("variable is inside the block= " + variable);
// }
// let variable = "variable 3";
// console.log("variable outside the function= " + variable);

// let Variable scope
function checkLoopScope1() {    
 let i = 4;    
 for (let i = 0; i < 10; i++) {    
  // some statements    
 }    
  // x is still known here and has a value.    
  console.log('Final value of x outside of the loop: ' + i);    
}    
checkLoopScope1()   
function checkLoopScope2() {    
 var i = 4;    
 for (var i = 0; i < 10; i++) {    
  // some statements    
 }    
  // updated value of i will display    
  console.log('Final value of x outside of the loop: ' + i);    
}    
checkLoopScope2()    
 












