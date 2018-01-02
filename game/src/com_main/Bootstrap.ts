module com_main {
    /**
     * 启动器
     * 初始化控制器和模型
     * */
    export class Bootstrap {
        // private static m_pCallback: Function = null;
        // private static m_pTarget: any = null;
        // private static m_pLoadCnfEnd: boolean = false;

        public static startup(root: eui.UILayer): void {//, callback: Function, target: any
            AGame.R.startup(root);
            this.initDataLocal();
            this.initializeController();
            this.initializeModel();
            // this.m_pCallback = callback;
            // this.m_pTarget = target;
            // callback.call(target)
            // this.enterGame();
        }
        private static initDataLocal(){
            if(LocalData.getData(GameConst.LocalDataKey.SWITCH_SOUND)=='')     LocalData.setData(GameConst.LocalDataKey.SWITCH_SOUND, true);
        }
        /** 注册场景控制器 */
        private static initializeController(): void {
            (new PublicController()).register();
            (new StartController()).register();
            (new IndexController()).register();
            (new PlayController()).register();
        }
        /** 注册协议交互数据 */
        private static initializeModel(): void {
            StartModel.register();
            RoomModel.register();
            PlayModel.register();
        }
        // private static enterGame(): void {
        //     if (this.m_pCallback) {
        //         this.m_pCallback.call(this.m_pTarget);
                
        //     }
        // }

        // private static requestGame(){
        //     var wsGetIpGame :AGame.SocketGetGameIp = new AGame.SocketGetGameIp();
        //     wsGetIpGame.setConnectInfo(GameConst.IpRequestGame, GameConst.PortRequestGame);
        //     wsGetIpGame.connect(this.onRoleServer, this);
        // }
        // private static onRoleServer(body: any): void {
        //     if(body.RES!=0) {
        //         console.warn('获取游戏IP失败', body.RES);
        //         return;
        //     }
        //     var strAd :string = body.AD;
        //     GameConst.IpGame = strAd.substring(0,strAd.indexOf(':'));
        //     GameConst.PortGame = Number(strAd.substr(strAd.indexOf(':')+1));
        //     this.onConnectServer();
        // }

        // private static onConnectServer(): void {
        //     console.log(GameConst.IpGame, ':', GameConst.PortGame)
        //     AGame.CSocket.getInstance().setConnectInfo(GameConst.IpGame, GameConst.PortGame);
        //     AGame.CSocket.getInstance().connect();
        // }


    }
}