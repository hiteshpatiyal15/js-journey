// destruction of object using rest operator

const user = { name: 'Hitesh', age: 30, role: 'SDET', city: 'Thane' }
const {name, age, role, city} = user
console.log(name);
console.log(age);
console.log(role);
console.log(city);

const { name: username, ...x } = user
console.log(username);
console.log(x);
console.log(username);


