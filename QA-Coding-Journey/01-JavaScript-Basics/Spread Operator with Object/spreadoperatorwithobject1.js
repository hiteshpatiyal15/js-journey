const user = {
    "name": "Hitesh",
    "role": "QA Engineer"
}
console.log('user info: ',user);

const copyUser = { ...user }
console.log('copied infor',copyUser);

//updating user object property
user.role = 'DevOps'
console.log('user info role update: ', user);
console.log('copied user info does not change: ',copyUser);

// add new property in copied user object
const copiedUser = {...user, salary:7000}