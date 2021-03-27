var http =require('http');

http.createServer(function (req, res){
    res.end('xin chao');
}).listen(process.env.port || 8181);