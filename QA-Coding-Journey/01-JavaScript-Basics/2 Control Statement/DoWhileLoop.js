let i = 1
do {
    console.log(i);
    i++;
} while (i < 5)

// factorial of 5
let fact = 1;
let j = 1;
function factorialOfNumber(num) { //5
    do {
        fact *= j; // 1,2,6,24,120
        j++; //2,3,4,5,6
    } while (num >= j); // t,t,t,t,f
    return fact
}
console.log(factorialOfNumber(5));