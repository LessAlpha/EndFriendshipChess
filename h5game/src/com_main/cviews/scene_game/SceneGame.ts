

module com_main {

    export class SceneGame extends CView {

        private boardGrid :BoardGrid;
        private boardGameMenu :BoardGameMenu;
        private boardWaitBegin :BoardWaitBegin;
        private boardOpereate :BoardOperate;

        constructor(){
            super();
            this.sceneType = SceneTypes.GAME;
            this.initApp('scene_game/SceneGame.exml');
        }

		/** 与控制器之间通信的指令号 */
		protected listNotificationInterests():any[]
		{
			return [PlayNav.START_GAME, ];
		}
		/** 处理与控制器之间的交互指令 */
		protected handleNotification(notification: AGame.Notification)
		{
            let name :number = notification.getName();
            let body :any = notification.getBody();
            console.log('SceneGame ',name, body);
            switch (name) {
                case PlayNav.START_GAME:
                    this.boardWaitBegin.onDestroy();
                    this.boardWaitBegin = null;
                    break;
                    
            }
		}

		protected onCreate()
		{
            this.resize();

            GameData.bUiReady = true;
		}
        public onDestroy() {
            super.onDestroy();
        }
        public resize () {
            this.width = AGame.R.app.stageWidth;
        }

        /////////////////////////////////////////////////////////////////////////////////////////


    }
}