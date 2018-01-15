module com_main {

    export class ConfigCollector {
        
        static TimeTween = {// 押注的筹码动画时长
            // PUSH_JETTON : 160, 
                        
        };
        
        static ARR_BLOCK_REQUEST = [// 阻塞请求指令
            // ConfigCollector.cmds.CONNECT

        ];


        static SumOperateNotSix = 3;// 无出动棋子情况下摇骰子时的最大连续次数

        static SumFly = 3;// 每个玩家的棋子个数

        static SumGridsFinshed = 46;// 一个棋子在地图上需要行走的总数

        static SumGridsPublic = 40;// 公共棋道步数

        static SumGridsSelf = 6;// 进入自己城堡后的棋道步数

        static ArrGridsOriginal = [
            0, 2, 0, 0, 1, 0, 0, 2, 0, 0,
            0, 2, 0, 0, 1, 0, 0, 2, 0, 0,
            0, 2, 0, 0, 1, 0, 0, 2, 0, 0,
            0, 2, 0, 0, 1, 0, 0, 2, 0, 0
            //0, 0, 0, 0, 0, 0 // 6个入城堡的格子
        ];

    }
}