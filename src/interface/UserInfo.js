//var cmds = require('../config/cmds');
//var datagame = require('../data/datagame');
//var proto = require('../proto/ProtoHandler');
var Fly = require('./Fly');
var enums = require('../enum/enums');
var conf = require('../config/conf');

var UserInfo = function(uId, nick, photo) {
    this.uId = uId;
    this.nick = nick;
    this.photo = photo;
    this.nIdRoom = -1;
    this.nPos = 0;
    this.skinChess = 0;

    this.arrFly = [new Fly(), new Fly(), new Fly()];
    this.nSumFlying = 0;
    this.nSumFlied = 0;

    this.nDotLucky = null;
    this.nIndFlying = null;
    this.typeGridPrize = null;// 特殊奖励
    this.nTimesNotSix = 0;// 无起飞棋子状态下此次操作摇骰子无6的次数

    /** 是否轮到我出牌 */
    this.willTurnMeOperate = function() {
        if(this.amISucceed())   return false;// 已经成功

        if(this.typeGridPrize==enums.TypeGrid.PAUSE){
            this.setPrizeGrid(enums.TypeGrid.NONE);
            return false;
        }
        this.clearOperateInfo();
        return true;
    };

    this.stillTurnMeOperate = function() {
        if(this.amISucceed())   return false;// 已经成功

        if(this.typeGridPrize==enums.TypeGrid.ONE_MORE) {
            this.setPrizeGrid(enums.TypeGrid.NONE);
            this.clearOperateInfo();
            return true;
        } else if(this.nSumFlying==0) {
            if(this.nTimesNotSix<conf.SumOperateNotSix) {
                this.nTimesNotSix++;
                this.clearOperateInfo();
                return true;
            } else {
                this.nTimesNotSix = 0;
                return false;
            }
        }
    };

    this.generateDotLucky = function(){
        this.nDotLucky = Math.ceil(Math.random()*6);
        if(this.nDotLucky==6)   this.setPrizeGrid(enums.TypeGrid.ONE_MORE);// 产生6则奖励一次
        return this.nDotLucky;
    };

    this.moveOneFly = function(room, fInd){
        this.nIndFlying = fInd;
        var fly = this.arrFly[this.nIndFlying];
        if(fly.nIndGridLocal==-1) {// 起飞
            this.nSumFlying++;
            this.nTimesNotSix = 0;
        }
        var fliesConflict = fly.moveOperate(room, this);
        if(fly.typeGridTo==enums.TypeGrid.ONE_MORE)     this.setPrizeGrid(enums.TypeGrid.ONE_MORE);
        else if(fly.typeGridTo==enums.TypeGrid.PAUSE)     this.setPrizeGrid(enums.TypeGrid.PAUSE);
        return fliesConflict;
    };

    this.succeedFlyOne = function() {
        this.nSumFlying --;
        this.nSumFlied ++;
        if(this.nSumFlying==0)  this.nTimesNotSix = 0;
    };

    this.brokenOneFly = function(fInd){
        this.arrFly[fInd].beBroken();
        this.nSumFlying--;
        if(this.nSumFlying==0)  this.nTimesNotSix = 0;
    };

    this.amISucceed = function() {
        return this.nSumFlied == conf.SumFly;
    };

    this.clearOperateInfo = function(){
        if(this.nIndFlying == null)     return;
        this.arrFly[this.nIndFlying].clearOperateInfo();
        this.nDotLucky = this.nIndFlying = null;
    };

    this.setPrizeGrid = function(prize) {
        this.typeGridPrize = prize;
    };

    this.onDestroy = function() {

    };

};
module.exports = UserInfo;