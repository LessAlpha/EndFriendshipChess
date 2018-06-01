/**
 * http请求模块
 * 示例：net.httpRequest("GET", '127.0.0.1', 9001, '/login', {uId:"Winner"}, login );
 接收端: app.get('/login', function(req, res){
            res.json({ data: '你的uId是：'+req.query.uId });
            res.end();
        });
 */

var http = require('http');
var qs = require('querystring'); 

exports.httpRequest = function(method, url, port, path, data, callback){
    
    data = qs.stringify(data);
    var opt = {
        method: method,
        host: url,
        port: port,
        path: path + "?" + data
    };

    var req = http.request(opt, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (dataResp) {
            dataResp = JSON.parse(dataResp);
            callback(200, dataResp);
        });
    });
    
    req.on('error', function(e){
        console.warn("auth_user error: " + e.message);
        callback(400, e);
    });
    
    req.end();

    // 以下方法在链接端口地址无效时会使nodejs程序崩溃
    // var req = http.request(opt, function (serverFeedback) {
    //     if (serverFeedback.statusCode == 200) {
    //         var body = "";
    //         serverFeedback.on('data', function (data) {
    //             body += data;
    //         })
    //         .on('end', function () {
    //             console.log('net request succeed');
    //             callback(serverFeedback.statusCode, JSON.parse(body));
    //         });
    //     } else {
    //         callback(serverFeedback.statusCode, null);
    //     }
    // });
    // req.end();
}