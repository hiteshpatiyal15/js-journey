// Call back function is a function that is passed as an argument to another function and is executed after the completion of that function. It allows for asynchronous programming and enables the execution of code in a non-blocking manner.
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}

function processData() {
    fetchData(displayData);
}

