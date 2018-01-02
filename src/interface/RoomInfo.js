
var cmds = require('../config/cmds');
var err = require('../config/err');
var tool = require('../utils/tool');
var datagame = require('../data/datagame');
var Grids = require('../game/Grids');
var proto = require('../proto/ProtoHandler');
var enums = require('../enum/enums');

var RoomInfo = function(userInfoHost, nSumUser){
    this.userInfoHost = userInfoHost;// 房主玩家
    this.nSumUser = nSumUser;// 玩家总数
    this.nSumUserJoined = 0;// 已经加入房间的玩家的总数
    this.bStarted = false;// 是否已经在玩中
    this.arrUserInfo = [];// 全部玩家
    this.grids = null;// 地图

    this.nIndOperating = -1;// 操作玩家的位置索引 从0开始
    
    this.startGame = function() {
        this.bStarted = true;
        this.grids = new Grids(this);
        this.broadcastToRoomUsers(cmds.START_GAME, {res:0});
        this.reportNextOperate();
    };

    this.reportNextOperate = function(){
        
        var nInd = this.nIndOperating;
        var userInfo = this.arrUserInfo[nInd];
        if(!userInfo || !userInfo.stillTurnMeOperate()) {// 还是上次玩家操作
            do{
                nInd = (nInd+1)%this.arrUserInfo.length;
                userInfo = this.arrUserInfo[nInd];
            } while(!userInfo.willTurnMeOperate());
        }
        this.nIndOperating = nInd;
        this.broadcastToRoomUsers(cmds.OPERATE_LUCKY_NEXT, {nPos:nInd});
    };

    this.reportResultOperate = function(){
        var userInfo = this.arrUserInfo[this.nIndOperating];
        userInfo.generateDotLucky();
        this.broadcastToRoomUsers(cmds.OPERATE_LUCKY_END, {res:0, nPos:this.nIndOperating, n:userInfo.nDotLucky});
        if(userInfo.nSumFlying==0 && userInfo.nDotLucky!=6)  this.reportNextOperate();
    };
    // 起飞或者走动
    this.selectFlyMove = function(fInd) {
        var userInfo = this.arrUserInfo[this.nIndOperating];
        var fliesBroken = userInfo.moveOneFly(this, fInd);
        var fly = userInfo.arrFly[fInd];
        this.broadcastToRoomUsers(cmds.OPERATE_FLY, {
            res : 0,
            nPos : this.nIndOperating,
            fInd : userInfo.nIndFlying,
            nStep : userInfo.nDotLucky,
            nDesti : fly.nInd
        });
        this.reportNextOperate();
    };


    this.newUserJoin = function(userInfo) {
        userInfo.nPos = this.nSumUserJoined;
        this.arrUserInfo[this.nSumUserJoined++] = userInfo;
        var objResp = {operate:1, uId:userInfo.uId, nick:userInfo.nick, photo:userInfo.photo, nPos:this.nSumUserJoined-1,skin:userInfo.skin};
        this.broadcastToRoomUsers(cmds.BROADCAST_ROOM_INFO, objResp, [userInfo.uId]);
        return this.collectInfoBasic();
    };

    this.collectInfoBasic = function() {
        var arrUserJoined = [];
        for(var i=0,userInfo; i<this.arrUserInfo.length; i++) {
            userInfo = this.arrUserInfo[i];
            if(!userInfo)   continue;
            var obj = {
                uId : userInfo.uId,
                nick : userInfo.nick,
                photo : userInfo.photo,
                nPos : i,
                skin : userInfo.skin
            };
            arrUserJoined[i] = obj;
        }
        return arrUserJoined;
    };

    this.broadcastToRoomUsers = function(cmd, objResp, arrUidExcept){
        var arrSocket = datagame.socketsUser;
        for(var userInfo,i=this.arrUserInfo.length-1; i>-1; i--) {
            userInfo = this.arrUserInfo[i];
            if(!userInfo)   continue;
            var uId = this.arrUserInfo[i].uId;
            if(arrUidExcept && arrUidExcept.indexOf(uId)!=-1)   continue;
            proto.sendMessage(arrSocket[uId], cmd, objResp);
        }
    }

};
module.exports = RoomInfo;