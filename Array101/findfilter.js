let users = [{ "name": "Hitesh", "id": 101, "salary": 2000 },
    { "name": "Ramesh", "id": 201, "salary": 1000 },
    { "name": "Jiten", "id": 204, "salary": 3000 },
    { "name": "Shyam", "id": 301, "salary": 1000 }]

let filter = users.filter(function(user){
    return user.salary >= 2000
    // return user.salary >= 4000
})
console.log(filter)

let find= users.find(function (user) {
    return user.id === 204
    // return user.id === 400
})
console.log(find);

let filter1 = users.filter(user => {
    return user.id > 201
})
console.log(filter1);
