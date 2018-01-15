/**
 * 棋子
 */
var enums = require('../enum/enums');
var tool = require('../utils/tool');
var conf = require('../config/conf');


var Fly = function() {

    //this.nIndGridLocal = -1;// -1表示未起飞， 0表示已经起飞，>0表示在航道上，conf.SumGridsFinshed表示到达终点
    //this.nIndGridGlobal = -1;
    this.nInd = -1;
    this.typeGridTo = null;

    this.clearOperateInfo = function(){
        this.typeGridTo = null;
    };

    this.moveOperate = function(room, userInfo) {

        if(this.nInd==-1) {// 起飞
            this.nInd = 0;
            this.adjustLocalAndGlobal(room, userInfo);
            return [];
        }
        this.computeIndLocalGlobal(room, userInfo);
        this.testPrizeGrid(room, userInfo);
        return this.testConflictOtherFly(room, userInfo);
    };

    this.computeIndLocalGlobal = function(room, userInfo){
        this.nInd += userInfo.nDotLucky;
        this.adjustLocalAndGlobal(room, userInfo);
    };

    this.testPrizeGrid = function(room, userInfo) {
        if(this.nInd>conf.SumGridsPublic)     return;

        var typeGrid = room.grids[this.nIndGridGlobal];
        switch (typeGrid) {
            case enums.TypeGrid.NONE:
                this.typeGridTo = enums.TypeGrid.NONE;
                break;
            case enums.TypeGrid.FLY:
                this.typeGridTo = enums.TypeGrid.FLY;
                this.nInd = this.nInd<=conf.SumGridsPublic ? this.nInd : (this.nInd-conf.SumGridsPublic);
                this.adjustLocalAndGlobal();
                break;
            case enums.TypeGrid.ASK:
                this.typeGridTo = this.generateTypeLucky();
                switch (this.typeGridTo){
                    case enums.TypeGrid.FORWARD:
                        this.nInd += 6;
                        this.nIndGridGlobal += 6;
                        break;
                    case enums.TypeGrid.BACKWARD:
                        this.nInd -= 6;
                        this.nIndGridGlobal -= 6;
                        break;

                }
                break;
        }

    };

    this.testConflictOtherFly = function(room, userInfo) {
        var arrFliesConflict = [];
        if(this.nInd>conf.SumGridsPublic)    return arrFliesConflict;

        if(this.typeGridTo==enums.TypeGrid.FLY) {// todo 直飞航道的相撞

        }

        var arrUsers = room.arrUserInfo;
        var arrFly;
        var fly;
        var user;
        for(var i=arrUsers.length-1; i>-1; i--) {
            user = arrUsers[i];
            if(!user || userInfo==user)   continue;
            arrFly = user.arrFly;
            for(var j=arrFly.length-1; j>-1; j--){
                fly = arrFly[j];
                if(fly.nInd>0 && fly.nIndGridGlobal==this.nIndGridGlobal) {
                    user.brokenOneFly(j);
                    arrFliesConflict.push([user.nPos, j]);// 玩家位置索引和玩家飞机的索引
                }
            }
        }
        return arrFliesConflict;
    };

    this.generateTypeLucky = function() {
        var typePrize;
        var nRan = Math.random();// @ 与enums.TypeGrid值有关
        if(nRan<0.4)            typePrize = enums.TypeGrid.FORWARD;
        else if(nRan<0.7)       typePrize = enums.TypeGrid.ONE_MORE;
        else if(nRan<0.85)      typePrize = enums.TypeGrid.BACKWARD;
        else                    typePrize = enums.TypeGrid.PAUSE;
        return typePrize;
    };

    this.prizeForward = function(){

    };

    this.prizeBackward = function(){

    };

    this.beBroken = function() {
        this.nInd = this.nIndGridGlobal = -1;
    };

    this.adjustLocalAndGlobal = function(room, userInfo) {
        if(this.nInd==conf.SumGridsFinshed) {// succeed
            userInfo.succeedFlyOne();
        } else if(this.nInd>conf.SumGridsFinshed) {// 超过了目标点
            this.nInd = conf.SumGridsFinshed - (this.nInd - conf.SumGridsFinshed);
        }
        this.nIndGridGlobal = tool.gridLocalToGlobal(room, userInfo, this);
    };


    
};

module.exports = Fly;