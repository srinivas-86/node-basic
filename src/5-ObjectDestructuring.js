//Object Destructuring
const { sum, sum1, sum2 } = require('./helpers');


const total = sum(10, 200);
console.log(`Total : ${ total }`);

const total1 = sum1(10, 200);
console.log(`Total1 : ${ total1 }`);

const total2 = sum2(10, 200);
console.log(`Total2 : ${ total2 }`);