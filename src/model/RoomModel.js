
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
    switch(cmd){
        case cmds.LOGIN:
            var bHasLogin = datagame.socketsUser[objReq.uId]!=undefined;
            if(bHasLogin) {

            }
            datagame.socketsUser[objReq.uId] = socket;
            datagame.usersInfo[socket.id] = new UserInfo(objReq.uId, objReq.nick, objReq.photo);
            objResp = {res:0};
            protoHandler.sendMessage(socket, cmds.LOGIN, objResp);
            break;
        case cmds.CREATE_ROOM:
            userInfo = tool.getUserInfoBySocket(socket);
            var nIdRoom = tool.generateIdRoom();
            userInfo.nIdRoom = nIdRoom;
            var room = new RoomInfo(userInfo, objReq.nSumUser);
            room.newUserJoin(userInfo);
            datagame.roomsInfo[nIdRoom] = room;
            objResp = {res:0, nIdRoom:nIdRoom, nSumUser:objReq.nSumUser};
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