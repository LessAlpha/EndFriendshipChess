/**
 * 游戏房间逻辑
 */
var conf = require('../config/conf');
var tool = require('../utils/tool');
var protoHandler = require('../proto/ProtoHandler');
var datagame = require('../data/datagame');
var UserInfo = require("../interface/UserInfo");
var RoomInfo = require('../interface/RoomInfo');

exports.handle = function(cmd, socket, objReq){
    var objResp = null;
    var userInfo = null;
    switch(cmd) {
        case conf.Cmds.LOGIN:
            var bHasLogin = datagame.getSocketByUserId(objReq.uId)!=undefined;
            if(bHasLogin) {// TODO 用户重连处理：1.原登陆者未掉线：。2.原登陆者已掉线；在游戏房间内
                // console.log("重连");

                return;
            }
            datagame.newUser(objReq, socket);
            objResp = {res:0};
            protoHandler.sendMessage(socket, conf.Cmds.LOGIN, objResp);
            break;
        case conf.Cmds.REATE_ROOM:
            userInfo = datagame.getUserInfoBySocket(socket);
            var room = new RoomInfo();
            room.init(userInfo, objReq.nSumUser);
            datagame.roomsInfo[room.nIdRoom] = room;
            objResp = {res:0, nIdRoom:room.nIdRoom, nSumUser:objReq.nSumUser};
            protoHandler.sendMessage(socket, conf.Cmds.REATE_ROOM, objResp);
            break;
        case conf.Cmds.JOIN_ROOM:
            userInfo = datagame.getUserInfoBySocket(socket);
            var nStatus = 0;
            var roomInfo = datagame.roomsInfo[objReq.nIdRoom];
            if(!roomInfo) {
                nStatus = conf.StatusCode.ROOM_NO_THIS;
            } else if(roomInfo.bStarted) {
                nStatus = conf.StatusCode.ROOM_PLAYING;
            } else if(roomInfo.getSumUserJoined()==roomInfo.nSumUser) {
                nStatus = conf.StatusCode.ROOM_FULL;
            }
            if(nStatus==0) {
                userInfo.nIdRoom = objReq.nIdRoom;
                var users = roomInfo.newUserJoin(userInfo);
                objResp = {res:nStatus, nIdRoom:objReq.nIdRoom, uIdHost: roomInfo.userInfoHost.uId, nSumUser:roomInfo.nSumUser, users:users};
            } else {
                objResp = {res:nStatus, nIdRoom:0, uIdHost: "", nSumUser:0, users:[]};
            }
            protoHandler.sendMessage(socket, conf.Cmds.JOIN_ROOM, objResp);
            break;
        
        
    }
}