/**
 * 平台服 - 启动类
 */

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);// Server实例
var path = require('path');
var bootstrap = new (require('./src/Bootstrap'))(io);
// var db = new (require('./src/database/DB'))();
var net = require('./src/utils/net');
// var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));// 设置静态资源根目录，项目中的静态资源必须放在public/下面，且一级路径还要加上public/

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function(req, res){
    // console.log('get /', req.query, { urlSocket: 'http://127.0.0.1:9001/' });
    // res.json({ urlSocket: 'http://127.0.0.1:9001/' });
    // res.end();
});

// app.get('/home', function(req, res){
//     console.log('get /home');
//     fs.readFile("public/ind.html", function (err, buffer) {
//         res.write(buffer);
//         res.end();
//     });
// });

// 登陆
app.get('/login', function(req, res){
    let objReq = req.query, objResp = {};
    
    res.json(objResp);
    res.end();
});

// 创建房间
app.get('/createRoom', function(req, res){
    let objReq = req.query, objResp = {};
    res.json(objResp);
    res.end();
});

// 加入房间
app.get('/joinRoom', function(req, res){
    let objReq = req.query, objResp = {};
    res.json(objResp);
    res.end();
});

bootstrap.connect(io);

http.listen(9001, function(){
    console.log('listening on http://127.0.0.1:9001/');
});

