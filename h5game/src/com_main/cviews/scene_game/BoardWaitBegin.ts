

module com_main {

    export class BoardWaitBegin extends CView {

        private lbStartGame :eui.Label;

        constructor() {
            super();
            // this.initApp('scene_game/BoardGameMenu.exml');
            this.registerEvtCreated();
        }

        protected listNotificationInterests() {
            return  [];
        }
        
        protected handleNotification(notification: AGame.INotification) {
            let name = notification.getName();
            let body = notification.getBody();
            console.log('BoardWaitBegin : ', name, body);
            switch(name) {
                // case BoardDeskNav.UPDATE_INFO_GAME_MENU:
                //     break;
            }
        }

        protected onCreate() {
            
            EventManager.addTouchFloatListener(this.lbStartGame, this, this.touchStartGame);
            this.resize();
        }
        public resize() {
            this.width = AGame.R.app.stageWidth;
            
        }
        public onDestroy() {
            this.removeFromParent();
            super.onDestroy();
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private touchStartGame(){
            
            var cmd = CMDS.START_GAME;
            var obj = AGame.ServiceBuilder.newClazz(cmd);
            obj.n = "";
            AGame.ServiceBuilder.sendMessage(cmd, obj, this.receiveStartGame, this);
        }
        
        private receiveStartGame(notif: AGame.Notification){
            
        }
        



    }
}