for (let i = 1; i <= 5; i++){
    console.log(i);
}

let p = 3;
for (let i = 1; i <= 10; i++){
    console.log(p*i);
}

for (let i = 1; i <= 5; i++){
    console.log("Hello programmer");
}

for (let i = 1; i <= 10; i++){
    let row = "";
    for (let j = 1; j <= 10; j++){
        row += (i * j) + "\t";
    }
    console.log(row);
    
}

function createPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows-i) + '*'.repeat(2*i-1));
    }
}
createPyramid(5);
console.log('-'.repeat(10) +"Inverted pyramid"+'-'.repeat(10));

function createInvertPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        console.log('-'.repeat(rows-i) + '*'.repeat(2*i-1));
    }
}
createInvertPyramid(5);