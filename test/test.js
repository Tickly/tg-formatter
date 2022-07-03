const Formatter = require('../dist/index').default

console.log(Formatter)

console.log(Formatter.format(true))

console.log(Formatter.format(1000, 'currency'));
console.log(Formatter.format(1000, 'decimal'));

console.log(Formatter.format(new Date(), ['date', 'Y-m-d']));