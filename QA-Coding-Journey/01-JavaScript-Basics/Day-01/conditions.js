// if/else
let statusCode = 2022;
if (statusCode === 200) {
    console.log("API Passed");
} else if (statusCode === 201) {
    console.log("API Created");
}else if (statusCode === 400) {
    console.log("Bad Request");
}else if (statusCode === 401) {
    console.log("Unauthorized");
}else if (statusCode === 404) {
    console.log("Not Found");
}else if (statusCode === 500) {
    console.log("Server Error");
} else {
    console.log("Unknown Status Code")
}

// Logical Operators
// let username = "adminn";
let username = "admin";
let password = "admin123";
let isAccountActive = true;

if ((username === "admin") && (password === "admin123") && (isAccountActive === true)) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}