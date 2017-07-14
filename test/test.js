const Formatter = require('../dist/index').default




console.log(Formatter.format(1000, 'currency'));
console.log(Formatter.format(1000, 'decimal'));
console.log(Formatter.format('2017-05-20', 'date'));