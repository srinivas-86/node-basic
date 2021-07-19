const fs = require('fs');
const fileName = "target.txt";

try{
    const data = fs.readFileSync(fileName).toString();
    console.log(data);
}
catch(err){
    console.log(err);
}

console.log("Node JS Async code");