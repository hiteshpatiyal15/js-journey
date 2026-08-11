// 1st way to create object
let student = {
    'name': 'Hitesh',
    age: 29,
    contactNumber: 8912233445,
    department: 'IT',
    subject: ['JS', 'Java', 'DSA'],
    let: 200,
    class: '4A',
    for: 10,
    'name' : "Aditya"
}

for (let key in student) {
    console.log(key, " => ", student[key]);
    
}