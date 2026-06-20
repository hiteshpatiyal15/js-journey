// let cannot be redeclared but can be reassigned
// let belongs to block scope
// let is not hoisted
// let values can be modified but not redeclared
let name = "Hitesh"
console.log(name)
let lname
console.log(lname) // undefined
if(true){
    let blockname = "block"
    console.log(blockname) // Abhay
}
// console.log(blockname) // Uncaught ReferenceError: blockname is not defined

const data = {name: "Hitesh:"}
console.log(data.name)
data.name = "Abhay"
// data = {name: "Sameer"} // assignment to constant varibale error
console.log(data.name)