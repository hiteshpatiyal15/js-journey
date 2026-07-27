var myname = "Hitesh"
console.log(myname)

var globalName = "Rahul"
function getName(){
    var fname = "Aditya"
    console.log(fname)
    console.log(globalName)
}
getName()
// console.log(fname) // undefined reference error

// Redeclared and reassigned
var newname = "Rita"
var newname = "Rohan"

// undefined hoisting
console.log(myvariable)
var myvariable = 10;

// access var outside block
if(true){
    var blockVar = "Learning javascript is fun"
}
console.log(blockVar)