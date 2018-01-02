
var ProtoBuf = require("protobufjs");
var cmds = require('../config/cmds');
var builder;
var arrClassProto = {};

ProtoBuf.load("./src/proto/game.proto", function(err, root) {
    if (err) throw err;
    builder = root;
    arrClassProto[cmds.LOGIN] = ["LoginReq", "LoginResp"];
    arrClassProto[cmds.CREATE_ROOM] = ["CreateRoomReq", "CreateRoomResp"];
    arrClassProto[cmds.JOIN_ROOM] = ["JoinRoomReq", "JoinRoomResp"];
    arrClassProto[cmds.START_GAME] = ["StartGameReq", "StartGameResp"];
    arrClassProto[cmds.OPERATE_LUCKY_NEXT] = [null, "OperateLuckyNextResp"];
    arrClassProto[cmds.OPERATE_LUCKY_END] = ["OperateLuckyEndReq","OperateLuckyEndResp"];
    arrClassProto[cmds.OPERATE_FLY] = ["OperateFlyReq", "OperateFlyResp"];

    arrClassProto[cmds.BROADCAST_ROOM_INFO] = [null, "BroadcastRoomInfo"];

});

exports.decodeMessage = function(cmd, buffer){
    var cP = arrClassProto[cmd][0];
    if(!cP){
        console.log('no proto definition', cmd);
        return;
    }
    var obj = builder.lookup(cP).decode(buffer);
    console.log('receive', cmd, obj);
    return obj;
}
exports.sendMessage = function(socket, cmd, obj){
    var cP = arrClassProto[cmd][1];
    if(!cP){
        console.log('no proto definition', cmd);
        return;
    }
    var c = builder.lookup(cP);
    var message = c.create(obj);
    console.log('send', (''+socket.id).substr(0,3), cmd, obj);
    socket.emit(cmd, c.encode(message).finish());
}