/**
 * 启动类
 */

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);// Server实例
var path = require('path');
var bootstrap = new (require('./src/game/Bootstrap'))(io);
// var db = new (require('./src/db/DB'))();
// var fs = require('fs');
// var net = require('./src/utils/net');

app.use(express.static(path.join(__dirname, 'public')));// 设置静态资源根目录，项目中的静态资源必须放在public/下面，且一级路径还要加上public/

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function(req, res){
    // console.log('get /', req.query, { urlSocket: 'http://127.0.0.1:18080/' });
    res.json({ urlSocket: 'http://127.0.0.1:18080/' });
    res.end();
});


bootstrap.connect(io);

http.listen(18080, function(){
    console.log('listening on http://127.0.0.1:18080/');
});



// app.get('/home', function(req, res){
//     console.log('get /home');
//     fs.readFile("public/ind.html", function (err, buffer) {
//         res.write(buffer);
//         res.end();
//     });
// });

// app.get('/game', function(req, res){
//    console.log('get /game');
//    fs.readFile("public/game/index.html", function (err, buffer) {
//        res.write(buffer);
//        res.end();
//    });
// });
