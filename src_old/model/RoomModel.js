/**
 * 游戏房间逻辑
 */
var cmds = require('../config/cmds');
var err = require('../config/err');
var tool = require('../utils/tool');
var protoHandler = require('../proto/ProtoHandler');
var datagame = require('../data/datagame');
var UserInfo = require("../interface/UserInfo");
var RoomInfo = require('../interface/RoomInfo');

exports.handle = function(cmd, socket, objReq){
    var objResp = null;
    var userInfo = null;
    switch(cmd) {
        case cmds.LOGIN:
            var bHasLogin = datagame.socketsUser[objReq.uId]!=undefined;
            if(bHasLogin) {// TODO 用户重连处理：
                // console.log("重连");
                return;
            }
            datagame.newUser(objReq, socket);
            objResp = {res:0};
            protoHandler.sendMessage(socket, cmds.LOGIN, objResp);
            break;
        case cmds.CREATE_ROOM:
            userInfo = tool.getUserInfoBySocket(socket);
            var room = new RoomInfo();
            room.init(userInfo, objReq.nSumUser);
            datagame.roomsInfo[room.nIdRoom] = room;
            objResp = {res:0, nIdRoom:room.nIdRoom, nSumUser:objReq.nSumUser};
            protoHandler.sendMessage(socket, cmds.CREATE_ROOM, objResp);
            break;
        case cmds.JOIN_ROOM:
            userInfo = tool.getUserInfoBySocket(socket);
            var nStatus = 0;
            var roomInfo = datagame.roomsInfo[objReq.nIdRoom];
            if(!roomInfo) {
                nStatus = err.ROOM_NO_THIS;
            } else if(roomInfo.bStarted) {
                nStatus = err.ROOM_PLAYING;
            } else if(roomInfo.nSumUserJoined==roomInfo.nSumUser) {
                nStatus = err.ROOM_FULL;
            }
            if(nStatus==0) {
                userInfo.nIdRoom = objReq.nIdRoom;
                var users = roomInfo.newUserJoin(userInfo);
                objResp = {res:nStatus, nIdRoom:objReq.nIdRoom, uIdHost: roomInfo.userInfoHost.uId, nSumUser:roomInfo.nSumUser, users:users};
            } else {
                objResp = {res:nStatus, nIdRoom:0, uIdHost: "", nSumUser:0, users:[]};
            }
            protoHandler.sendMessage(socket, cmds.JOIN_ROOM, objResp);
            break;
        
    }
}