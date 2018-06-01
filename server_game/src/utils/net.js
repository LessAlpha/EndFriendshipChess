/**
 * http请求模块
 * 示例： net.httpRequest("GET", '127.0.0.1', 9001, '/login', {uId:"Winner"}, login );
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
       console.log(400, "auth_user error: " + e.message);
    });
    
    req.end();
}