// 1st way to create object
let userData = {
    username : "Hitesh"
}

// 2nd way to create object
let data = new Object()
console.log(data);
data.name = "abhay"
console.log(data);

//3rd way to create object
let student = new Object(userData) // create the object using prototype
student.name = "Simran"
console.log(student);
console.log(student.username);
console.log(student.fname);


