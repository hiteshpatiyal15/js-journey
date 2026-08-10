// reduce
let nums = [10, 20, 30, 40]
let result = nums.reduce(function (acc, value) { // acc = 0, value 10,20,30,40
    return acc + value;
}, 0)
console.log(result);

let result1 = nums.reduce((acc, value)=>{
    return acc + value
}, 1)
console.log(result1);

// concat
let a = [10, 30, 50, 70]
let b = [20, 40, 60]
let c = [25,50]
let ans = a.concat(b)
console.log(ans);
console.log([...a,...b,...c])

//foreach
ans.forEach((value, index) => {
    console.log(`${index} == ${value}`)
})

