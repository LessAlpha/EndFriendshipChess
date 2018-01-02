
var enums = require('../enum/enums');
var tool = require('../utils/tool');
var conf = require('../config/conf');

var TypeGrid = {
    NONE            : 0,// 普通
    FLY             : 1,// 直飞航道
    ASK             : 2,// 未知 - 由下面4个中挑选一个

    FORWARD         : 3,// 前进x步
    BACKWARD        : 4,// 后退x步
    ONE_MORE        : 5,// 增加一次机会
    PAUSE           : 6 // 减少一次机会（即暂停一轮）
};

var Grids = function(room) {
    this.room = room;
    this.arrGrids = [];
    for(var i=conf.ArrGridsOriginal.length-1; i>-1; i--)    this.arrGrids[i] = conf.ArrGridsOriginal[i];

    this.flyOne = function(userInfo) {
        // var fly = userInfo.arrFly[userInfo.nIndFlying];
    };

    this.destroy = function () {
        this.arrGrids = null;
        this.room = null;
    }



};


module.exports = Grids;