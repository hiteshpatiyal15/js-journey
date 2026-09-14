let testCases = [];
testCases.push("Login", "Logout","Search","Checkout","Payment");

console.log(`Total Test Cases: ${testCases.length}`);
testCases.push("Profile Update")
console.log(`Total Test Cases: ${testCases.length}`);

const supportedBrowsers = [
    "Chrome",
    "Firefox",
    "Edge"
];
const availaleBrowsers = ["Chrome", "Safari", "Firefox"];
for (let browser of availaleBrowsers) {
    if (!supportedBrowsers.includes(browser)) {
        console.log(`${browser} -> Not supported`);
    }
}
