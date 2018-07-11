
var ProtoBuf = require("protobufjs");
var conf = require('../config/conf');
var builder;
var arrClassProto = {};

ProtoBuf.load("./src/proto/game.proto", function(err, root) {
    if (err) throw err;
    builder = root;
    // arrClassProto[conf.Cmds.LOGIN] = ["LoginReq", "LoginResp"];
    // arrClassProto[conf.Cmds.CREATE_ROOM] = ["CreateRoomReq", "CreateRoomResp"];
    // arrClassProto[conf.Cmds.JOIN_ROOM] = ["JoinRoomReq", "JoinRoomResp"];
    // arrClassProto[conf.Cmds.START_GAME] = ["StartGameReq", "StartGameResp"];
    // arrClassProto[conf.Cmds.OPERATE_LUCKY_NEXT] = [null, "OperateLuckyNextResp"];
    // arrClassProto[conf.Cmds.OPERATE_LUCKY_END] = ["OperateLuckyEndReq","OperateLuckyEndResp"];
    // arrClassProto[conf.Cmds.OPERATE_FLY] = ["OperateFlyReq", "OperateFlyResp"];
    // arrClassProto[conf.Cmds.BROADCAST_ROOM_INFO] = [null, "BroadcastRoomInfo"];

});

exports.decodeMessage = function(cmd, bufferData){
    // var cP = arrClassProto[cmd][0];
    // if(!cP){
    //     console.warn('no proto definition', cmd);
    //     return;
    // }
    // var obj = builder.lookup(cP).decode(bufferData);
    // console.log('receive', cmd, obj);
    // return obj;
    var obj = JSON.parse(bufferData);
    console.log('receive', cmd, obj);
    return obj;
}
exports.sendMessage = function(socket, cmd, obj){
    // var cP = arrClassProto[cmd][1];
    // if(!cP){
    //     console.warn('no proto definition', cmd);
    //     return;
    // }
    // var c = builder.lookup(cP);
    // var message = c.create(obj);
    // console.log('send', (''+socket.id).substr(0,3), cmd, obj);
    // socket.emit(cmd, c.encode(message).finish());
    var str = JSON.stringify(obj);
    console.log('send', (''+socket.id).substr(0,3), cmd, str);
    socket.emit(cmd, str);

}