let message;
message = "Hello, Welcome to let variable";
console.log(message);

// global scope
let x = 20;
console.log("Outside the function x = " + x);
function show() {
    console.log("Inside the function x= " + x);
}
show();

// function scope
function show() {
    let num = 15;
    console.log("Inside the function num = " + num);
}
show();
// console.log("Outside the function num = " + num); //ReferenceError: num is not defined

{
    let num = 30;
    console.log("inside the function num = " + num);
}
// console.log("outside the function num = " + num); //ReferenceError: num is not defined

let num = 23;
{
    let num = 15;
    console.log("Inside the function num = " + num);
}
// let num = 89;
// console.log("num outside the function= " + num); // Identifier 'num' has already been declared

// let vs var keyword
// variable scope
function checkGlobalScope() {
    console.log("Value of x before the block: " + z);
    {
        var z = 20;
        xy = z + 8
        console.log("Value of x after the block:" + z);
    }
}
checkGlobalScope();

// loop scope
function checkLoopScope() {
    let i = 5;
    for (let i = 0; i < 10; i++){

    }
    console.log("Final Value of let i outside of the loop: " + i);  
}
checkLoopScope();

function checkLoopScope1() {
    var i = 5;
    for (var i = 1; i < 10; i++){}
    console.log("Final valie of var i outside of the loop: " + i);
}
checkLoopScope1();