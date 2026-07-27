// let cannot be redeclared but can be reassigned
// let belongs to block scope
// let is not hoisted
// let values can be modified but not redeclared

// Variable Declaration Using let Keyword
let message
message = "Hello and Welcome to Javascript"
console.log(message)

// ****************************************Global scope
let x = 20
console.log("Outside the function x = "+x)
function show(){
    console.log("Inside the function x = "+x)
}
show()

// function scope
function show1(){
    let num = 15
    console.log("inside the function num = "+num)
}
show1()
// console.log("Outside the function num = "+num) // ReferenceError: num is not defined

// **************************************Block Scope
{
    let num = 20
     console.log("Inside the function num = " + num);   
}
//   console.log("Outside the function num = " + num); // ReferenceError: num is not defined


// *****************************************Redeclaring variable in different blocks
let num = 23;
{
    let num = 15
    console.log("num inside the function = " + num);   
}
// let num = 89;    
// console.log("num outside the function = " + num);  

// **************************************Variable Scope
function checkGlobalScope() {    
  // x is declared yet so not available here    
  console.log('Value of x before the block: ' + x);    
  {    
      var x = 20;    
      xxx = x + 8;    
  }    
  // x is still known here and has a value.    
  console.log('Value of x after the block: ' + x);    
}  
checkGlobalScope()
//x is declared inside the function, so not available here     

// *************************************Loop scope
function checkLoopScope() {    
 let i = 4;    
 for (let i = 0; i < 10; i++) {    
  // some statements    
 }    
  // x is still known here and has a value.    
  console.log('Final value of x outside of the loop: ' + i);    
}    
checkLoopScope()   

// **************************************Redeclaration
var num = 6;  
let num = 2;    //redeclaration is not allowed using let  
let num = 6;    // allowed  
let num = 2;    // not allowed   
let num = 61;             // allowed  
{  
       let num = 29;            // allowed  
}  
{  
       let num = 37;            // allowed  
}  

// *****************************************constant variable
console.log("*********************Constant**********************")
const data = {name: "Hitesh"}
console.log(data.name) // Hitesh
data.name = "Abhay" // reference update not the value
// data = {name: "Sameer"} // assignment to constant varibale error
console.log(data.name)