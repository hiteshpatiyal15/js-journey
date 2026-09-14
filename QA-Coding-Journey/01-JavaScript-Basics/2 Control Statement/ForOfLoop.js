let cars = ['Ferrari', 'Dodge', 'Lexus', 'Porsche'];
for (let car of cars) {
    console.log(car);
}

const string = "String";
for (let str of string) {
    console.log(str);
    
}

let map = new Map();
map.set('name', 'Anish');
map.set('age', 21);
for (let [key, value] of map) {
    console.log(key, ':', value);    
}

let s = new Set([11, 22, 33, 44, 55]);
for (let value of s) {
    console.log(value);
    
}