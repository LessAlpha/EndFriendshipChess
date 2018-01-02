module com_main {

    export class SceneIndex extends CView {

        private lbJoin :eui.Label;
        private lbCreate :eui.Label;
        private lbIdRoom :eui.Label;

        constructor(){
            super();
            this.sceneType = SceneTypes.INDEX;
            this.initApp('scene_index/SceneIndex.exml');
        }

		// protected listNotificationInterests():any[]
		// {
		// 	return [];
		// }
		// protected handleNotification(notification: AGame.Notification)
		// {
		// }

		protected onCreate()
		{
            this.resize();
            EventManager.addTouchFloatListener(this.lbJoin, this, this.touchJoin);
            EventManager.addTouchFloatListener(this.lbCreate, this, this.touchCreate);
		}
        public onDestroy() {
            super.onDestroy();
        }
        public resize() {
            this.width = AGame.R.app.stageWidth;
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////// 

        private touchJoin() {

            if(this.lbIdRoom.text=='')   return;
            console.log('nIdRoom =', this.lbIdRoom.text)
            var cmd = CMDS.JOIN_ROOM;
            var obj = AGame.ServiceBuilder.newClazz(cmd);
            obj.nIdRoom = parseInt(this.lbIdRoom.text);
            AGame.ServiceBuilder.sendMessage(cmd, obj, this.receiveJoin, this);
        }
        private receiveJoin(notif:AGame.Notification){
            // console.log('receiveJoin - ');
            if(notif.getBody().res!=0)  return;
            this.toGame();
        }

        private touchCreate() {
            var cmd = CMDS.CREATE_ROOM;
            var obj = AGame.ServiceBuilder.newClazz(cmd);
            obj.nSumUser = 4;
            obj.skin = AccountInfo.SKIN_USING;
            AGame.ServiceBuilder.sendMessage(cmd, obj, this.receiveCreate, this);
        }
        private receiveCreate(notif:AGame.Notification){
            // console.log('receiveCreate - ');
            if(notif.getBody().res!=0)  return;
            this.toGame();
        }

        private toGame(){
            SceneManager.change(SceneTypes.GAME);
        }
    }

}