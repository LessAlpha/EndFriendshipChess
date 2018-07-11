/**
 * 游戏房间
 */
var tool = require('../utils/tool');
var datagame = require('../data/datagame');
var proto = require('../proto/ProtoHandler');
var conf = require('../config/conf');

var RoomInfo = function(){
    
    this.nIdRoom = null;// 房间ID
    this.nSumUser = null;// 玩家总数
    this.nSumGridsRound = null;// 外部圆圈的格子数
    this.nSumGridsRoad = null;// 专属直路格子数
    this.arrUserInfo = null;// 玩家数组

    this.bStarted = null;// 是否已经开始游戏
    this.nIndOperating = null;// 操作玩家的位置索引 从0开始

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  座位逻辑
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 初始化房间参数
    this.init = function(userInfoHost, nSumUser) {
        this.nIdRoom = datagame.generateIdRoom();
        datagame.idsRoomUsing.push(idRoom);
        this.nSumUser = nSumUser;
        this.nSumGridsRound = conf.MapGrids[nSumUser-3].NSumRound;
        this.nSumGridsRoad = conf.MapGrids[nSumUser-3].NSumRoad;
        this.arrUserInfo = [];
        this.bStarted = false;
        this.nIndOperating = -1;
        this.newUserJoin(userInfoHost);
    }


    // 新用户加入
    this.newUserJoin = function(userInfo) {
        
        userInfo.nPos = this.arrUserInfo.length;
        userInfo.nIdRoom = this.nIdRoom;
        this.arrUserInfo[userInfo.nPos] = userInfo;
        var objResp = {operate:1, uId:userInfo.uId, nick:userInfo.nick, photo:userInfo.photo, nPos:userInfo.nPos, skin:userInfo.skin};
        this.broadcastToRoomUsers(conf.Cmds.BROADCAST_ROOM_INFO, objResp, [userInfo.uId]);
        return this.collectInfoBasic();
    };

    this.getSumUserJoined = function(){
        return this.arrUserInfo.length;
    }

    // TODO 解散房间 
    this.deleteRoom = function(){

    }
    
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  战斗逻辑
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    this.startGame = function() {
        this.bStarted = true;
        this.broadcastToRoomUsers(conf.Cmds.START_GAME, {res:0});
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
        this.broadcastToRoomUsers(conf.Cmds.OPERATE_LUCKY_NEXT, {nPos:nInd});
    };

    this.reportResultOperate = function(){
        var userInfo = this.arrUserInfo[this.nIndOperating];
        userInfo.generateDotLucky();
        this.broadcastToRoomUsers(conf.Cmds.OPERATE_LUCKY_END, {res:0, nPos:this.nIndOperating, n:userInfo.nDotLucky});
        if(userInfo.nSumFlying==0 && userInfo.nDotLucky!=6)  this.reportNextOperate();
    };
    // 起飞或者走动
    this.selectFlyMove = function(fInd) {
        var userInfo = this.arrUserInfo[this.nIndOperating];
        var fliesBroken = userInfo.moveOneFly(this, fInd);
        var fly = userInfo.arrFly[fInd];
        this.broadcastToRoomUsers(conf.Cmds.OPERATE_FLY, {
            res : 0,
            nPos : this.nIndOperating,
            fInd : userInfo.nIndFlying,
            nStep : userInfo.nDotLucky,
            nDesti : fly.nInd
        });
        this.reportNextOperate();
    };

    /**
     * 广播给在房间里除了某些玩家
     */
    this.broadcastToRoomUsers = function(cmd, objResp, arrUidExcept){
        var arrSocket = datagame.socketsUser;
        for(var userInfo,i=this.arrUserInfo.length-1; i>-1; i--) {
            userInfo = this.arrUserInfo[i];
            if(!userInfo)   continue;
            var uId = userInfo.uId;
            if(arrUidExcept && arrUidExcept.indexOf(uId)!=-1)   continue;
            proto.sendMessage(arrSocket[uId], cmd, objResp);
        }
    }

};

module.exports = RoomInfo;