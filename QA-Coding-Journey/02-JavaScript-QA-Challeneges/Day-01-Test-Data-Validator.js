const users = [
    { name: "Rahul", email: "rahul@gmail.com", age: 28 },
    { name: "Priya", email: "priya@gmail", age: 25 },
    { name: "", email: "amit@gmail.com", age: 32 },
    { name: "Neha", email: "neha@yahoo.com", age: 17 },
    { name: "Vikas", email: "vikas@gmail.com", age: 41 },
    {name: "!@#$", email: ".com", age:0}
];

//validate every user is valid when:
// 1-name is not empty
// 2-email contains @ and .
// 3-age is between 18 and 60
/*
Rahul -> Valid
Priya -> Invalid Email
Amit -> Invalid Name
Neha -> Invalid Age
Vikas -> Valid
*/

function validateUser(user) {
    const regex = /[^A-Za-z0-9]/;
    const isValidName = user.name !== "" && (!regex.test(user.name));
    const isValidEmail = user.email.includes("@") && user.email.includes(".") ;
    const isValidAge = user.age >= 18 && user.age <= 60;

    if (isValidName && isValidEmail && isValidAge) {
        return "Valid";
    } else if (!isValidName) {
        return "Invalid Name";
    } else if (!isValidEmail) {
        return "Invalid Email";
    } else {
        return "Invalid Age";
    }
}

for (const user of users) {
    const result = validateUser(user);
    console.log(`${user.name || "Amit"} -> ${result}`);
}


