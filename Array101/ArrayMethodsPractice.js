let array = [1, 2, 3, 4, 5]
console.log(array)


// Array literal
let country = [`India`, `Australia`, `England`]
for (let i = 0; i < country.length; i++) {
    console.log(country[i]);
    
}

// new keyword
let subject = new Array()
subject[0] = "Java"
subject[1] = "Maths"
subject[2] = "Physics"
console.log(subject);

// Array constructor
let employee = new Array("Sameer", "lucky", "Raj")
console.log(employee);

// Accessing elements
let cars = ["BMW", "Bugatti", "Skyline"];    
console.log(cars[1]);

// modifying the element
cars[0] = "Ferrari"
console.log(cars);

// looping through array
cars.forEach(function (car) {
    console.log(car)
})

cars.forEach(car => {
    console.log(car)
})

