const helpers = require('./helpers');
console.log(process.mainModule)

const total = helpers.sum(10, 200);
console.log(`Total : ${ total }`);