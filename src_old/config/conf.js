

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

exports.SumOperateNotSix = 3;// 无出动棋子情况下摇骰子时的最大连续次数

exports.SumFly = 3;// 每个玩家的棋子个数

// exports.SumGridsFinshed = 46;// 一个棋子在地图上需要行走的总数

// exports.SumGridsPublic = 40;// 公共棋道步数

// exports.SumGridsSelf = 6;// 进入自己城堡后的棋道步数

exports.ArrGridsOriginal = [
    0, 2, 0, 0, 1, 0, 0, 2, 0, 0,
    0, 2, 0, 0, 1, 0, 0, 2, 0, 0,
    0, 2, 0, 0, 1, 0, 0, 2, 0, 0,
    0, 2, 0, 0, 1, 0, 0, 2, 0, 0
    //0, 0, 0, 0, 0, 0 // 6个入城堡的格子
];

/**
 * 
    棋牌格子布局：圆形公共格子一共有10*3（3人）/ 7*4（4人）个，直线专属格子有4个
    每个玩家的棋子数：3个
        骰子范围：1~6
        起飞数字：6
        无可飞行棋子时可以连续摇骰子的次数：3（骰子范围/2，使起飞概率达到50%）
        进入直飞道格子功能：轮回重来一圈惩罚功能（备注：跳色进入直飞道格子不受罚）
        进入专属赛道最后一个格子后的路线：在内部公共赛道里循环，可相杀
        跳色时是否可以杀敌棋：在落地格子上可以，起跳格子不可以
 */

