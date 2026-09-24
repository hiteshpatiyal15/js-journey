let a = 10;
let b = 20;

console.log(`Before swapping ${a}, ${b}`);

[a, b] = [b, a];
console.log(`After swapping ${a}, ${b}`);