/**
 * 游戏玩法逻辑
 */
var conf = require('../config/conf');
var tool = require('../utils/tool');
var protoHandler = require('../proto/ProtoHandler');
var datagame = require('../data/datagame');
// var UserInfo = require("../interface/UserInfo");
// var RoomInfo = require('../interface/RoomInfo');

exports.handle = function(cmd, socket, objReq) {

    var userInfo = datagame.getUserInfoBySocket(socket);
    var room = datagame.getRoomByUserInfo(userInfo);
    var objResp;
    switch(cmd) {
        case conf.Cmds.START_GAME:
            var nStatus = 0;
            if(room.getSumUserJoined()==1) {
                nStatus = conf.StatusCode.NOT_ENOUGH_USERS_PLAY;
            } else if(room.userInfoHost!=userInfo) {
                nStatus = conf.StatusCode.NOT_HOST_OF_ROOM;
            }
            if(nStatus!=0)  protoHandler.sendMessage(socket, cmd, {res:nStatus});
            else  room.startGame();
            break;
        case conf.Cmds.OPERATE_LUCKY_END:
            if(room.nIndOperating!=objReq.nPos) {
                objResp = {res:conf.StatusCode.NOT_YOU_OPERATE, nPos:0, n:0};
                protoHandler.sendMessage(socket, cmd, objResp);
                return;
            }
            room.reportResultOperate();
            break;
        case conf.Cmds.OPERATE_FLY:
            if(userInfo.nPos!=room.nIndOperating) {
                objResp = {res:conf.StatusCode.NOT_YOU_OPERATE, nPos:0, fInd:0, nStep:0, nDesti:0};
                protoHandler.sendMessage(socket, cmd, objResp);
                return;
            }
            room.selectFlyMove(objReq.fInd);
            break;
    }

};