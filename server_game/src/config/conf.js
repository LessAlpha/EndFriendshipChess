/**
 * 配置文件
 */
exports.StatusCode = {

    NONE            : 0,// 无错误
    ROOM_NO_THIS    : 100,// 没有该房间
    ROOM_FULL       : 101,// 房间已经满人
    ROOM_PLAYING    : 102,// 房间已经开战

    NOT_HOST_OF_ROOM        : 103,// 不是房主
    NOT_ENOUGH_USERS_PLAY   : 104,//房间内只有房主

    NOT_YOU_OPERATE         : 105 // 不是轮到你出牌


};

exports.Cmds = {

    COMMON_RESP     : 100,

    LOGIN           : 1,// 登录
    CREATE_ROOM     : 2,// 创建房间
    JOIN_ROOM       : 3,// 加入房间
    START_GAME      : 4,// 开始游戏

    OPERATE_LUCKY_NEXT    : 5,// S广播C下一个操作位置 
    OPERATE_LUCKY_END     : 6,// C告知S操作结束，S广播此次操作点数 
    OPERATE_FLY          : 7,// C告知S选择哪只飞机走动(如果只有一个可走动的话则自动发送)，S再广播并告知相关特殊结果（如果有）

    RESULT_GAME           : 8,// 结束结算

    BROADCAST_OPERATE_INFO : 100,// S告知C上一位的操作结果和下一位操作者的位置
    BROADCAST_ROOM_INFO : 101, // S告知C某玩家进出房间和上下线的情况

};


exports.SumOperateNotSix = 3;// 无出动棋子情况下摇骰子时的最大连续次数

exports.SumFly = 3;// 每个玩家的棋子个数

exports.MapGrids = [
    {
        NSumRound: 30,
        NSumRoad: 4,
        NSumOneColorRound: 10
    },
    {
        NSumRound: 28,
        NSumRoad: 4,
        NSumOneColorRound: 7
    }
];

