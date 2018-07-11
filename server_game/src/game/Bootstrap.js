
var conf = require('../config/conf');
var protoHandler = require('../proto/ProtoHandler');

var roomModel = require('../model/RoomModel');
var playModel = require('../model/PlayModel');

var Bootstrap = function(){

    this.connect = function(io) {
        var t = this;
        this.io = io;
        this.io.on("connection", function(socket){// Socket实例
            console.log('connection');
            socket.on(''+conf.Cmds.LOGIN, function(data) {t.receiveData(socket, conf.Cmds.LOGIN, data);});
            socket.on(''+conf.Cmds.REATE_ROOM, function(data) {t.receiveData(socket, conf.Cmds.REATE_ROOM, data);});
            socket.on(''+conf.Cmds.JOIN_ROOM, function(data) {t.receiveData(socket, conf.Cmds.JOIN_ROOM, data);});
            socket.on(''+conf.Cmds.START_GAME, function(data) {t.receiveData(socket, conf.Cmds.START_GAME, data);});
            socket.on(''+conf.Cmds.OPERATE_LUCKY_NEXT, function(data) {t.receiveData(socket, conf.Cmds.OPERATE_LUCKY_NEXT, data);});
            socket.on(''+conf.Cmds.OPERATE_LUCKY_END, function(data) {t.receiveData(socket, conf.Cmds.OPERATE_LUCKY_END, data);});
            socket.on(''+conf.Cmds.OPERATE_FLY, function(data) {t.receiveData(socket, conf.Cmds.OPERATE_FLY, data);});
            socket.on('disconnect', function(data) {t.disConnect(socket, data);});
        });
    };

    this.receiveData = function(socket, cmd, data) {
        var objReq = protoHandler.decodeMessage(cmd, data);
        switch(cmd) {
            case conf.Cmds.LOGIN:
            case conf.Cmds.REATE_ROOM:
            case conf.Cmds.JOIN_ROOM:
            case conf.Cmds.DELETE_ROOM:
                roomModel.handle(cmd, socket, objReq);
                break;
            case conf.Cmds.START_GAME:
            case conf.Cmds.OPERATE_LUCKY_NEXT:
            case conf.Cmds.OPERATE_LUCKY_END:
            case conf.Cmds.OPERATE_FLY:
                playModel.handle(cmd, socket, objReq);
                break;
        }
    };

    this.disConnect = function(socket, data){
        console.log('someone disconnected');
        
    };
    
};


module.exports = Bootstrap;