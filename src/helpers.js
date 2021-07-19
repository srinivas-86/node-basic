function sum(a, b){
    return a + b;
}

const sum1 = (a, b) => {
    return a + b;}

const sum2 = (a, b) => a + b;
exports.sum3 = () => 2 + 3;
exports.sum4 = a => a + 3;

module.exports  = {
    sum,
    sum1,
    sum2
};

console.log(process.mainModule)