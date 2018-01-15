

module com_main {

    export class BoardOperate extends CView {

        private btnOperate :eui.Label;
        private lbValLucky :eui.Label;

        constructor() {
            super();
            this.registerEvtCreated();
        }

        protected listNotificationInterests() {
            return  [PlayNav.DESK_TURN_ONE_OPERATE, PlayNav.DESK_SHOW_LUCKY_NUM];
        }

        protected handleNotification(notification: AGame.INotification) {
            let name = notification.getName();
            let body = notification.getBody();
            console.log('BoardOperate : ', name, body);
            switch(name) {
                case PlayNav.DESK_TURN_ONE_OPERATE:
                    this.turnOneOpereate(body);
                    break;
                case PlayNav.DESK_SHOW_LUCKY_NUM:
                    this.showLucky(body);
                    break;
            }
        }

        protected onCreate() {
            EventManager.addEventListener(this.btnOperate,egret.TouchEvent.TOUCH_END, this, this.touchBtnOperate);
            this.resize();
        }
        public resize() {
            //this.width = AGame.R.app.stageWidth;

        }
        public onDestroy() {
            this.removeFromParent();
            super.onDestroy();
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private turnOneOpereate(body) {
            var bIsMe = body==GameData.userInfoMe.nPos;
            this.btnOperate.visible = bIsMe;
        }

        private showLucky(body) {
            Utils.setProps(this.lbValLucky,{text:''+body, visible:true});
            egret.Tween.get(this.lbValLucky).set({rotation:-359}).to({rotation:0},1000).call(()=>{
                // AGame.R.notifyObserver(PlayNav.DESK_SELECT_FLY)
            },this);
        }

        private touchBtnOperate(){
            var cmd = CMDS.OPERATE_LUCKY_END;
            var obj = AGame.ServiceBuilder.newClazz(cmd);
            obj.nPos = GameData.userInfoMe.nPos;
            AGame.ServiceBuilder.sendMessage(cmd, obj);
            this.btnOperate.visible = false;
        }


    }
}