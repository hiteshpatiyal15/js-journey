
let data = ["hitesh", 29, 5.10]
for (let userdata of data) {
    console.log(userdata)
}

let name = "Hitesh"
for (let x of name) {
    console.log(x)
}

let userdata = { username: "hitesh", age: 29, height: 5.10 }
// to loop on objects use for in looping
for (let data in userdata) {
    console.log(data)
}

for (let data in userdata) {
    console.log(`Key: ${data} and Value: ${userdata[data]}`)
}

console.log("For each with anonymous function")
data.forEach(function (user, index) {
    console.log(`${user} : ${index}`)
});
console.log("For each with arrow operation")
data.forEach((user, index)=> {
    console.log(`${user} : ${index}`)
});
