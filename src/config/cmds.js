module.exports = {
    LOGIN           : 1,// 登录
    CREATE_ROOM     : 2,// 创建房间
    JOIN_ROOM       : 3,// 加入房间
    START_GAME      : 4,// 开始游戏

    OPERATE_LUCKY_NEXT    : 5,// S广播C下一个操作位置 
    OPERATE_LUCKY_END     : 6,// C告知S操作结束，S广播此次操作点数 
    OPERATE_FLY          : 7,// C告知S选择哪只飞机走动(如果只有一个可走动的话则自动发送)，S再广播并告知相关特殊结果（如果有）

    RESULT_GAME           : 8,// 结束结算

    BROADCAST_OPERATE_INFO : 100,// S告知C上一位的操作结果和下一位操作者的位置
    BROADCAST_ROOM_INFO : 101 // S告知C某玩家进出房间和上下线的情况
};


