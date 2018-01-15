

module com_main {

    export class BoardGameMenu extends CView {


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
            console.log('BoardGameMenu : ', name, body);
            switch(name) {
                // case BoardDeskNav.UPDATE_INFO_GAME_MENU:
                //     break;
            }
        }

        protected onCreate() {
            
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




    }
}