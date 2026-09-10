const items = ['Apple', 'Orange', 15, 12.5, true, { name: "Hitesh", age: 29 }, [12, 43, 23]];
console.log(items);

const countries = new Array();
countries[0] = 'India';
countries[1] = 'Australia';
countries[2] = 'England';
countries[3] = 'South Africa';
for (let country of countries) {
    console.log(country);
}

let employee = new Array('Rohit', 'Aditya', 'Kartik', 'Raj');
for (let i = 0; i < employee.length; i++){
    console.log(employee[i]);
}

let cars = ['Dodge', 'Bugatti', 'Skyline', 'Prosche']

//accessing element using index
console.log(`accessing the element from array ${cars[2]}`);

//accessing last element using lenght-1
console.log(`accessing the last element from array ${cars[cars.length-1]}`);

// modifying the element
cars[0] = 'Ferrari'
console.log(`modified the element into array ${cars}`);

// adding element to array
cars.push('Lexus');
console.log(`new element added to the array ${cars}`);
