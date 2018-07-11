module com_main {
    export class PopTipOffline extends CView {

        private imgBtnClose :eui.Image;
        private lbTitle :eui.Label;
        private lbTip :eui.Label;
        private imgTitle :eui.Image;
        private btnSure :eui.Button;
        private btnCancel :eui.Button;

        constructor() {
            super();
            this.bCanTouchShadowToClose = false;
            this.initApp('public/PopTipSizeSmall.exml');
        }

        // protected listNotificationInterests():any[] {
        //     return [];
        // }

        // protected handleNotification(notification: AGame.INotification) {
        //     var name = notification.getName();
        //     var body = notification.getBody();
        //     console.log('PopTipOffline', name, body);
        //     switch(name) {
        //     }
        // }
        protected onCreate() {
            this.resize();
            this.lbTip.text = '掉线中，即将自动重连···';
            this.imgBtnClose.visible = this.btnSure.visible = this.btnCancel.visible = false;
            //egret.setTimeout(this.sendLogin, this, 2000);// 延时重连是为了防止销毁游戏中数据是使掉线前游戏中有延时操作报错
            // TimerUtils.startTimer(2000, 1, this.sendLogin, this);
        }
        public onDestroy() {
            this.removeFromParent();
            super.onDestroy();
        }
        public resize() {
            UpManager.resizeOnStageCenter(this);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////

        private sendLogin(){
            //var wsGetIpGame :AGame.SocketGetGameIp = new AGame.SocketGetGameIp();
            //wsGetIpGame.setConnectInfo(GameConst.IpRequestGame, GameConst.PortRequestGame);
            //wsGetIpGame.connect(this.receiveLogin, this);
        }
        private receiveLogin(body:any) {
            // AGame.ServiceBuilder.registerProxy(AGame.CSocket.CONNECTED_LOGIN, this.connected, this);
            // AGame.CSocket.getInstance().setConnectInfo(GameConst.IpGame, GameConst.PortGame);
            // AGame.CSocket.getInstance().connect();
        }

        private connected(notif:AGame.Notification) {
        }


        private touchClose(){
            UpManager.close();
        }

    }
}