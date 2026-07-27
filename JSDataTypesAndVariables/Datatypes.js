let name = 'Hitesh'
let age = 29
let height = 5.9
let isDepartmentChanged = false
let accountNumber = 8231238290212
let user = null
let data = undefined
let symbol = Symbol("@")

// Primitive Data types
// String
console.log(name)
// Number
console.log(age)
console.log(height)
console.log(accountNumber)
// Boolean
console.log(isDepartmentChanged)
// Null
console.log(user)
// Undefined

// Non-Premitive Data Types
//Object 
let userDetails = {
    name: "Hitesh",
    age: 29
}
console.log(userDetails.name)
console.log(userDetails.age)

//Arrays
let a = [1, 2, 3, 4]
console.log(a)
let b = [1, true, null, undefined, { name: "Object" }, [171.2, 12]]
console.log(b)

//Functions
function weather(climate) {
    return "Weather is " + climate
}
console.log(weather("Rainy"))

// Date Object
let currentDate = new Date();
console.log(currentDate)

// Regular Expression
let pattern = /hello/
let check = pattern.test("Hello, to JSworld")
console.log(check)
// console.log(data)
// // Symbol
// console.log(symbol)
