//Declaring variable
var myName = "Ben";
console.log(myName);

let myAge = 25;
console.log(myAge);

const quote = "Learn Everyday";
console.log(quote);

// Types of variable local and global--------------------

// Local variable
myFunction();
function myFunction(){
    let word = "local variable of myfunction";
    console.log(word);   
}

// console.log(word); // ReferenceError: word is not defined

myDemo();
let word;
function myDemo() {
    let word = "local variable of mydemo"
}
console.log(word);

// Global Variable
var grade = "B";
myGlobalFunction();
function myGlobalFunction() {
    console.log("global value of Grade is: ", grade);
}

// Changing value of global  
// Variable from outside of function 
{
    grade = "A";
    console.log("local value of Grade is: ", grade);
}

console.log(grade);
