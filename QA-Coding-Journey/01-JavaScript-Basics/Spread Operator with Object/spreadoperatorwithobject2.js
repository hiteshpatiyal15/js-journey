const user = {
    "name": "Hitesh",
    "role": "QA Engineer"
}
console.log(user);

// updating property of object
const userUpdate = {
    ...user,
    role : "Senior QA Engineer"
}
console.log(userUpdate);

const userUpdate1 = { // will not update when calling ... after updating property
    role: "SDET",
    ...user
}
console.log(userUpdate); 
