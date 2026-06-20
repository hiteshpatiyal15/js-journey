// Arrays
var arr = [1, 2, 3, 4, 5]
console.log(arr)
var arr2 = ["Hitesh", 15, 5.9, true, null, undefined]
console.log(arr2)

/*****Accessing array elements**********/
console.log(arr[0]) // 1
console.log(arr[4]) // 5
console.log(arr[5]) // undefined

/*****Modifying array elements**********/
arr[0] = 100
console.log(arr) // [100, 2, 3, 4, 5]

/*****copywithin************/
arr.copyWithin(0,3)
console.log(arr) // [4, 5, 3, 4, 5]
arr.copyWithin(0,4)
console.log(arr) // [ 5, 5, 3, 4, 5 ]

/*****Insert object at end of the array **********/
arr.push(10)
console.log(arr)

/*****Insert object at the beginning of the array **********/
arr.unshift(90)
console.log(arr)

/*****Remove object from the end of the array **********/
arr.pop()
console.log(arr)

/*****indexof array object */
console.log(arr.indexOf(90))

/***********includes in array **********/
console.log(arr.includes(5)) // true
console.log(arr.includes(100)) // false

/***********length of the array **********/
console.log(arr.length)

/***********slice in array **********/
console.log("original array", arr) // [ 90, 5, 5, 3, 4, 5 ]
subArray = arr.slice(0,3)
console.log("sub array of original array", subArray) // [ 90, 5, 5 ]

/***********splice in array **********/
console.log("original array", arr) // [ 90, 5, 5, 3, 4, 5 ]
arr.splice(0,2)
console.log("original array after splice", arr) // [ 5, 3, 4, 5 ]

/*********sum of array */
sum = 0
for(let i=0; i<arr.length; i++){
    sum += arr[i]
}
console.log("sum of array", sum)

// reduce, filter, map
// use when we want to perform some operation on each element of the array and return a single value (reduce) or return a new array (filter, map)
var totalMarks = arr.reduce((sum,num)=> sum+num,0)
console.log("total marks", totalMarks)

// filter
//use when we want to filter out the elements of the array based on some condition and return a new array
let evenNumber = arr.filter(num=> num%2==0)
console.log(evenNumber)


// map
// use when we want to perform some operation on each element of the array and return a new array
let newArr = [20, 30, 40, 50]
let doubledNumbers = newArr.map(num=> num*2)
console.log(doubledNumbers)

let total = newArr.filter(num=>num>30).map(num=>num*3).reduce((sum, total)=>sum+total,0)
console.log(total)
