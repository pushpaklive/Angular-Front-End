var http = require('http');

var server = http.createServer((req, res) => {
    res.end('Success in creating node server !');
});

server.listen(process.env.PORT || 3000);