const user = {
    name: 'Hitesh',
    age: 29,
    address: {
        city:'pune'
    }
}

const copyUser = {...user}
console.log('User', user);
console.log('Copy user', copyUser);

user.name = 'Aditya'
console.log('User', user);
console.log('Copy user', copyUser);

user.address.city = 'chennai'
console.log('User', user);
console.log('Copy user', copyUser); // changes the inner object property due to shallow copy

