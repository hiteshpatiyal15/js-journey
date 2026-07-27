/*********Data Types n Variables *********/
console.log("Hello, World!")
name = "Hitesh"
console.log(name)

// var (let, const)
console.log(typeof(name))
let age = 29
console.log(typeof(age))

let height = 5.9
console.log(typeof(height))

let isMarried = false
console.log(typeof(isMarried))

const g = 9.8
console.log(typeof(g))

var a = null
console.log(typeof(a)) // object
console.log(a) // null

var b
console.log(typeof(b)) // undefined
console.log(c) // Uncaught ReferenceError: c is not defined

// var could be redclared and reassign
var city = "Delhi"
console.log(city)
var city = "Mumbai"
console.log(city)
city = "Bangalore"
console.log(city)


// let cannot be redeclared but can be reassigned
let country = "Russia"
console.log(country)
let country = "India"
console.log(country) // Uncaught SyntaxError: Identifier 'country' has already been declared
country = "Russia"
console.log(country) // Uncaught SyntaxError: Identifier 'country' has already been declared

console.log(city, `${country}`)
// const cannot be redeclared and cannot be reassigned
const pi = 3.14
console.log(pi)
const pi = 3.1415
console.log(pi) // Uncaught SyntaxError: Identifier 'pi' has already been declared
pi = 3.141
console.log(pi)

let s1 = "Hello programmer"
	let s2 = `Hello, ${"Abhay"}`
    let s3 = `${s1}, ${s2}`
    console.log(s3)
    console.log(s2)
    
let name = 'Hitesh'
let age = 29
let height = 5.9
let isDepartmentChanged = false
let accountNumber = 8231238290212
let user = null
let data = undefined
let symbol = Symbol("@")

console.log(name)
console.log(age)
console.log(height)
console.log(isDepartmentChanged)
console.log(accountNumber)
console.log(user)
console.log(data)
console.log(symbol)