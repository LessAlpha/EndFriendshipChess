
exports.TypeGrid = {
    NONE            : 0,// 普通
    FLY             : 1,// 直飞航道
    ASK             : 2,// 未知 - 由下面4个中任意挑选一个

    FORWARD         : 3,// 前进6步
    BACKWARD        : 4,// 后退6步
    ONE_MORE        : 5,// 增加一次机会
    PAUSE           : 6 // 减少一次机会（即暂停一轮）
};

exports.StatusFly = {
    NOT_FLY : 0,
    FLYING  : 1,
    SUCCEED : 2
};

