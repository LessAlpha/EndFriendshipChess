
var cmds = require('../config/cmds');
var err = require('../config/err');
var tool = require('../utils/tool');
var protoHandler = require('../proto/ProtoHandler');
// var datagame = require('../data/datagame');
// var UserInfo = require("../interface/UserInfo");
// var RoomInfo = require('../interface/RoomInfo');

exports.handle = function(cmd, socket, objReq) {

    var userInfo = tool.getUserInfoBySocket(socket);
    var room = tool.getRoomByUserInfo(userInfo);
    var objResp;
    switch(cmd) {
        case cmds.START_GAME:
            var nStatus = 0;
            if(room.nSumUserJoined==1) {
                nStatus = err.NOT_ENOUGH_USERS_PLAY;
            } else if(room.userInfoHost!=userInfo) {
                nStatus = err.NOT_HOST_OF_ROOM;
            }
            if(nStatus!=0)  protoHandler.sendMessage(socket, cmd, {res:nStatus});
            else  room.startGame();
            break;
        case cmds.OPERATE_LUCKY_END:
            if(room.nIndOperating!=objReq.nPos) {
                objResp = {res:err.NOT_YOU_OPERATE, nPos:0, n:0};
                protoHandler.sendMessage(socket, cmd, objResp);
                return;
            }
            room.reportResultOperate();
            break;
        case cmds.OPERATE_FLY:
            if(userInfo.nPos!=room.nIndOperating) {
                objResp = {res:err.NOT_YOU_OPERATE, nPos:0, fInd:0, nStep:0, nDesti:0};
                protoHandler.sendMessage(socket, cmd, objResp);
                return;
            }
            room.selectFlyMove(objReq.fInd);
            break;
    }

};