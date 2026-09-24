const userdata = {
    name: 'Hitesh',
    age: 29,
    mobNo: '8282828282'
}

const { name, age, mobNo } = userdata;
console.log(name, age, mobNo);

const { name: username, age: userage, mobNo: usermobno } = userdata;
console.log(username, userage, usermobno);

const { name1 = 'Aditya', age1, address = 'Thane' } = userdata;
console.log(name, age, address);

const user = {
    name: 'Hitesh',
    age: 29,
    course: 'SDET master class',
    address: {
        addressline: {
            area: 'savarkar navigator',
            nearby: 'TMC school'
        },
        city: 'Thane',
        country: 'India',
        pincode: 421302
    }
}

const { address: { city, country } } = user;
console.log(city, country);

const {
    address: {
        city: mycity, country: mycountry, addressline :{area, nearby}
    }
} = user;
console.log(mycity, mycountry, area, nearby);

// Array destructuring
const browsers = ['Chrome', 'Safari', 'Edge'];

const [b1,b2,b3] = browsers;
console.log(b1, b2, b3);

// First and last elements of the array
const [B1,,B3] = browsers;
console.log(B1, B3);

const [first,,last ='Microsoft Edge'] = browsers;
console.log(first)
console.log(last);
