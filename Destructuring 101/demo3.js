const userdata = {
    username: 'Hitesh',
    userage: 30,
    role: 'QA Engineer',
    location: 'Mumbai',
    address: {
        addressline: {
            line1: "Street qwerty",
            line2: "Near ABC valley"
        },
        city: 'Mumbai',
        country: 'India',
        pincode: 321123
    }
}

const {
    username, userage, role, location,
    address:{
        addressline:
        { line1, line2 }
    },
    city: myCity, country: myCountry, pincode: myPincode
} = userdata
console.log(line2);
