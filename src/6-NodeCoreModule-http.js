const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello world from node js updated");
});

server.listen(3000);