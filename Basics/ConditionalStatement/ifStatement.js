if (10 > 50)
    console.log(false)
if (50 > 10)
    console.log(true)
if (1)
    console.log("truthy value")

let age = -9;
if (age > 18) {
    console.log("Person is adult")
} else if(age>0 && age<18){
    console.log("Person is a clid")
}
else {
    console.log("Invalid age")
}