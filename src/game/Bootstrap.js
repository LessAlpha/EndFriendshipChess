
var cmds = require('../config/cmds');
var protoHandler = require('../proto/ProtoHandler');

var roomModel = require('../model/RoomModel');
var playModel = require('../model/PlayModel');

var Bootstrap = function(){
    this.connect = function(io) {
        var t = this;
        this.io = io;
        this.io.on("connection", function(socket){// Socket实例
            console.log('connection');
            socket.on(''+cmds.LOGIN, function(data) {t.receiveData(socket, cmds.LOGIN, data);});
            socket.on(''+cmds.CREATE_ROOM, function(data) {t.receiveData(socket, cmds.CREATE_ROOM, data);});
            socket.on(''+cmds.JOIN_ROOM, function(data) {t.receiveData(socket, cmds.JOIN_ROOM, data);});
            socket.on(''+cmds.START_GAME, function(data) {t.receiveData(socket, cmds.START_GAME, data);});
            socket.on(''+cmds.OPERATE_LUCKY_NEXT, function(data) {t.receiveData(socket, cmds.OPERATE_LUCKY_NEXT, data);});
            socket.on(''+cmds.OPERATE_LUCKY_END, function(data) {t.receiveData(socket, cmds.OPERATE_LUCKY_END, data);});
            socket.on(''+cmds.OPERATE_FLY, function(data) {t.receiveData(socket, cmds.OPERATE_FLY, data);});
            socket.on('disconnect', function(data) {t.disConnect(socket, data);});
        });
    };
    this.receiveData = function(socket, cmd, data) {
        var objReq = protoHandler.decodeMessage(cmd, data);
        // console.log('receive - ', cmd, objReq);
        switch(cmd) {
            case cmds.LOGIN:
            case cmds.CREATE_ROOM:
            case cmds.JOIN_ROOM:
                roomModel.handle(cmd, socket, objReq);
                break;
            case cmds.START_GAME:
            case cmds.OPERATE_LUCKY_NEXT:
            case cmds.OPERATE_LUCKY_END:
            case cmds.OPERATE_FLY:
                playModel.handle(cmd, socket, objReq);
                break;
        }
    };
    this.disConnect = function(socket, data){
        console.log('someone disconnected');
    };
};


module.exports = Bootstrap;