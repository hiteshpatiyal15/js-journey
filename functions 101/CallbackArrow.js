
function executeCallback(task){
    console.log("Executing the callback function for task:");
    task();
    console.log("Task executed successfully");
}

let task1 = function () {
    console.log("Task 1: Callback Function");
}

let task2 = () => {
    console.log("Task 2: Callback Function");
}
let task3 = (a, b) => { console.log("Task 3: Adding two values: ", a + b) }

let task4 = (a) => console.log("Task 4: Mulitplying value by 10: ", a * 10)

executeCallback(task1)
executeCallback(task2)
executeCallback(() => task3(10, 20))
executeCallback(() => task4(5))