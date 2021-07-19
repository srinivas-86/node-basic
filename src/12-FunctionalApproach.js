const fs = require('fs');
const fileName = "target.txt";

fs.readFile(fileName, (err, data) => {
    if(err)
        errHandler(err);
    else
        dataHandler(data.toString());
});

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());


console.log("Node JS Async code");