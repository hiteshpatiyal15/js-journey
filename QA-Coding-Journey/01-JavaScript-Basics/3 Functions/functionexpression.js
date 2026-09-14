let myFunction = function() {
    console.log("Task 1: Function Expression");
}

let anotherFunction = function(myFunction) {
    console.log("Task 2: Function Expression");
}

function executeFunction(myFunction, anotherFunction) {
    console.log("Task 3: Function Expression");
    myFunction();
    anotherFunction(myFunction);
}

executeFunction(myFunction, anotherFunction);