// default value of object property in destructuring
const user = {
    name: 'Hitesh',
    age: 29,
    courese: 'SDET master class',
    address: {
        addressline: {
            line1: 'A801',
            line2: 'Simran Cing'
        },
        city: 'Thane',
        country: 'India',
        pincode: '421302'
    }
}

// const { name, age, address = "Thane A8 simran" } = user;
// console.log(user, name, address);
const { name, age, address: { city } } = user;
console.log(name, age, city);

const {
    address: {
        addressline: {
            line1, line2
        }, city:myCity, country:myCountry, pincode:myPincode
    }
} = user;

console.log(line1);
console.log(line2);
console.log(myCity);
console.log(myCountry);
console.log(myPincode);


const userdata = {
    username: 'Hitesh',
    userage: 30,
    role: 'QA Engineer',
    location: 'Mumbai',
}
console.log();

const { username, userage, role, location, address = "ABC tower,211" } = userdata;
console.log(username);
console.log(userage);
console.log(location);
console.log(address);

