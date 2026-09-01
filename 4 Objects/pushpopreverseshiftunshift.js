// adding element
let cars = ["Ferrari", "Bugatti", "Skyline"]
cars.push("Porsche")
console.log(cars);

// remove last element
cars.pop()
console.log(cars);
    
// concat
let newCars = [`Toyota`,`Subaru`, `Pagani`]
console.log(cars.concat(newCars));

//reverse
let reverse = cars.reverse()
console.log(reverse)

//shift
let shift = cars.shift()
console.log(shift);
console.log(cars);

//unshift
let unshift = cars.unshift("Supra")
console.log(`New length of the array: ${unshift}`);
console.log(`Updated array: ${cars}`)  






