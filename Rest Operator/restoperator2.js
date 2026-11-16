// rest paramters in functions
function sumOfNum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0
)
}

console.log(sumOfNum(10,20,30))

function convertCurrency(rate, ...amounts) {
    return amounts.map(amount => amount * rate);
}
console.log(convertCurrency(97, 100, 200, 300)); // usd to inr