const arr1 = [10, 29, 38]
const arr2 = ['Chrome', 'Edge', 'Safari']
console.log('Merging two arrays using spread operator');

const result1 = [...arr1, ...arr2]
console.log(result1);
console.log('What if we use arr1,arr2:');
const result2 = [arr1, arr2]
console.log(result2);



