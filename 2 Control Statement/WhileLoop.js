let count = 1;
while (count < 10) {
    console.log("count: " + count);
    count++;
}

let num = 1;
let breakAt = 4;
while (num < 10) {
    console.log("num: " + num);
    if (num == breakAt) {
        break;
    }
    num++;
}
console.log("while loop is break at count: " + num);

let rows = 5;
let i = 1;
while (rows >= i) {
    console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
    i++;
}

let j = rows;
while (j >= 1) {
    console.log(' '.repeat(rows-j) + '*'.repeat(2*j-1));
    j--;
}