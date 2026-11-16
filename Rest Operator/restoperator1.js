// rest in destruction
const nums = [10, 20, 30, 40, 50]
 
const [a, b, ...restnums] = nums;
console.log(a, b);
console.log(restnums)


const user = {
    name: 'Hitesh',
    id: 231,
    age: 29,
    dpet: 'QA'
}

const { name, id, ...additioninfo } = user;
console.log(name)
console.log(additioninfo);
