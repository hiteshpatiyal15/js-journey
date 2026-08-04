// Arrays
var arr = [1, 2, 3, 4, 5]
const profile = ["Hitesh", 55, true, null, { 'food': "butter chicken" }, [1, 3, 6, 5]]
const marks = [78, 86, 68, 93]
const digits = new Array(5)
const empId = Array.of(5)
const string = Array.from("JsJourney")

console.log(profile[0]) // "Hitesh"
console.log(profile[4].food) // butter chicken
console.log(profile[5][3]) // 5
console.log(profile[89]) // undefined

console.log(profile["0"]) // String key works
console.log(Array.isArray(profile)) // true
console.log(Object.keys(profile)) // [ '0', '1', '2', '3', '4', '5' ]

// Traverse Array using traditional way, of and foreach loop
for (let i = 0; i < array.length; i++) {
console.log(array[i])
}

for (let get of array) {
    console.log(get)
}

array.forEach(function (user, index) {
    console.log(`${user} : ${index}`)
})

array.forEach((user, index) => {
    console.log(`${user} : ${index}`)
});
