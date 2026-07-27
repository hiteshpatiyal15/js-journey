/*
Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Bitwise Operators
Ternary Operators
Delete Operators
String Operators
Typeof Operators
Instanceof Operators
Chaining Operators
Comma Operators
*/

//Artihmetic Operators
const add = 3 + 5
const sub = 9 - 4
const mul = 4 * 3
const div = 9 / 3
console.log(add, sub, mul, div)

//Assignment Operators
let a = 20;
a += 2
a -= 2
console.log(a)

//Comparsion Operators
let b = 10
let c = 15
console.log(a == b)
console.log(a != b)

//logical opertors
const p = true, q = false
console.log(p && q)
console.log(p || q)
console.log(!p)
console.log(!q)

//bitwise operator
const x = 2
const y = 3
console.log(x & y) // 0010 & 0011 = 0010 = 2
console.log(x | y) // 0010 | 0011 = 0011 = 3
const z = ~x
console.log(z) // 0010 -> 1101 -> 0010 -> 0011 = -3
console.log(x ^ y) // 0010 ^ 0011 = 0001 = 3
console.log(x << 2) // 0010 00100 001000 = 8
console.log(x >> 2) // 0001 0000 = 0
//precedence = ~, <<>>, &, ^, |

//Ternary operator 
const age = 10 
const status = age >= 18 ? "Adult" : "Minor"
const isAdult = age > 19 ? true : false
console.log(status)
console.log(isAdult)

// Delete operator
const student = {  
    rollNum: 27,  
    Name: "James Bond",  
    Grade: "A",  
    Age:19  
}
console.log(student)
delete student.Age
console.log(student)