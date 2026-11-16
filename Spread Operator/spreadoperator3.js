// Add new element in the array
const browsers = ['Chrome', 'Firefox']
browsers.push('Safari')
console.log(browsers);


const additionalBrowsers = ['IE', ...browsers, 'Opera']
console.log(additionalBrowsers);
