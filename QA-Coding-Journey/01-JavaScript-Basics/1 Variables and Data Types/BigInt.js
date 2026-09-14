let number = Number.MAX_SAFE_INTEGER
console.log(number)

console.log(number + 1)
console.log(number + 2)

let transaction = 900719925474099123n
console.log(transaction)

let bigint = BigInt(900719925)
console.log(bigint)

console.log(typeof number)
console.log(typeof bigint)

//Explicit conervsion of number 
console.log(BigInt(number) + bigint)

let num1 = 10n
let num2 = 3n
console.log(Number(num1) / Number(num2))

let no1 = 10
let no2 = 10n
console.log(no1 == no2) // true checking value
console.log(no1 === no2) // false checking value and datatype