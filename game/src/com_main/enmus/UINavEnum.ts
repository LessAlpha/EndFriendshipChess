/** 
 * 用来添加显示界面的指令
 * 在XXController.ts 或 XXView.ts中注册
 */

enum StartNav {
    ADD_START               = 101,
    ADD_TOP_INVITE          = 102,// 提示邀请弹窗
    ADD_TOP_SHARE           = 103,// 提示分享弹窗
    // CONNECTED_ROLE_SERVER   = 104,
    ADD_TOP_BLOCK_REQUEST   = 105,// 阻塞请求提示组件
    // SET_INFO_ON_TOP_BLOCK   = 106,// 设置
}
enum PublicNav{
    ADD_POP_TIP                 = 201,
    ADD_TIP_DURATION            = 202,
    ADD_POP_TIP_OFFLINE         = 203
}
enum IndexNav {
    ADD_INDEX                   = 201,
}

enum PlayNav {
    ADD_PLAY                = 301,
    USER_JOIN               = 302,
    USER_OFFLINE            = 303,

    DESK_TURN_ONE_OPERATE        = 304,
    DESK_TURN_ME_OPERATE         = 305,
    DESK_MOVE_FLY                = 306,
    DESK_SELECT_FLY              = 308,
    DESK_SHOW_LUCKY_NUM          = 309,



    START_GAME                   = 307,

}

/////////////////////////////////////////////////////////////////


enum SoundNav {
    PLAY                    = 701,
    STOP                    = 702,
    // DESTROY                 = 703    
}

