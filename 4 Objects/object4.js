// 3rd way to create object

let person = {
    'name': 'hitesh',
    age: 29,
    marks: [85.60, 78],
    isActive: true
}

let studentReference = Object.create(person)
studentReference.name = 'Chirag'
studentReference.age = 30
studentReference.marks = [80,85,88]
console.log(Object.getPrototypeOf(studentReference));
console.log('-'.repeat(20));
console.log(studentReference.name)
console.log(person.name);

console.log(Object.getPrototypeOf(studentReference).name);

console.log(studentReference.hasOwnProperty('marks'));






