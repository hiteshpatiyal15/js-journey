// Arrays
let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
// print all browsers
for (let browser of browsers) {
    console.log(browser);
}
// Print the first browser
console.log(browsers[0]);
// print the last browser
console.log(browsers[browsers.length - 1]);
// add "Opera"
browsers.push("Opera")
console.log(browsers);
// remove "Firefox"
browsers.splice(1, 1);
console.log(browsers);
//remove the first element
browsers.shift();
console.log(browsers);
// remove the last element
browsers.pop();
console.log(browsers);