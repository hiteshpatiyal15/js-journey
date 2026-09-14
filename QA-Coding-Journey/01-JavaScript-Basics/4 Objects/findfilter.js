let data = [10, 20, 30, 50, 80]

let result = data.filter(function (value) {
    return value >= 30
})

console.log(`Age greater than 30: ${result}`);
console.log(`No of user with age greater than 30: ${result.length}`);

let userData = [
    { 'name': 'Hitesh', 'id': 101, 'salary': 1000 },
    { 'name': 'Ajay', 'id': 201, 'salary': 500 },
    { 'name': 'Soman', 'id': 104, 'salary': 200 },
    { 'name': 'Vikrant', 'id': 301, 'salary': 2000 },
    {'name':'Abhay', 'id':103, 'salary':1000}
]

let resultData = userData.filter(function (user) {
    // return user.salary>=4000 // empty array
    return user.salary>=1000
})
console.log(resultData);


let findId = userData.find(user => {
    // return user.id===100 // undefined
    return user.id===101
})
console.log(findId);