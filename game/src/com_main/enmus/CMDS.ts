enum CMDS {
    //CONNECT = 'connect',
    //DISCONNECT = 'disconnect',
    //ERROR = 'error',

    LOGIN           = 1,
    CREATE_ROOM     = 2,
    JOIN_ROOM       = 3,
    START_GAME      = 4,
    OPERATE_LUCKY_NEXT    = 5,// S广播C下一个操作位置 S ind
    OPERATE_LUCKY_END     = 6,// C告知S操作结束，S广播此次操作点数 C: res S: res ind n
    OPERATE_FLY           = 7,// C告知S选择哪只飞机走动(如果只有一个可走动的话则自动发送)，S再广播并告知相关特殊结果（如果有） C ind S

    RESULT_GAME           = 8,// 结算


    BROADCAST_OPERATE_INFO = 100,
    BROADCAST_ROOM_INFO = 101
}