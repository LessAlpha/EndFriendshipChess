

module com_main {

    export class BoardGrid extends CView {

        private arrFlyUsers :Array<Array<eui.Image>> ;


        constructor() {
            super();
            this.registerEvtCreated();
        }

        protected listNotificationInterests() {
            return  [PlayNav.USER_JOIN, PlayNav.DESK_MOVE_FLY, PlayNav.DESK_SELECT_FLY];
        }
        
        protected handleNotification(notification: AGame.INotification) {
            let name = notification.getName();
            let body = notification.getBody();
            console.log('BoardGrid : ', name, body);
            switch(name) {
                 case PlayNav.USER_JOIN:
                     this.userJoin(body);
                     break;
                 case PlayNav.DESK_MOVE_FLY:
                     break;
                 case PlayNav.DESK_SELECT_FLY:
                     this.touchChildren = body==GameData.userInfoMe.nPos;

                     break;

            }
        }

        protected onCreate() {
            var arrFlyUsers :Array<Array<eui.Image>> = [];
            for(var i=0; i<3; i++) {
                var arr :Array<eui.Image> = [];
                var bIsMe = GameData.userInfoMe.nPos==i;
                for(var j=0; j<3; j++){
                    var fly = this['u'+i+'_'+j];
                    fly.visible = false;
                    if(bIsMe)   EventManager.addTouchTapListener(fly, this, this.selectedMove);
                    arr.push(fly);
                }
                arrFlyUsers.push(arr);
            }
            this.arrFlyUsers = arrFlyUsers;
            this.initialComp();
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

        private initialComp(){
            var arrUsers = GameData.arrUserInfo;
            for(var i in arrUsers)  this.userJoin(arrUsers[i]);
        }
        private userJoin (userInfo:UserInfo){
            var nPos = userInfo.nPos;
            var arrFlies = this.arrFlyUsers[nPos];
            for(var i in arrFlies)  arrFlies[i].visible = true;
        }

        private selectedMove(evt:egret.TouchEvent){
            this.touchChildren =false;

            var nInd = this.arrFlyUsers[GameData.userInfoMe.nPos].indexOf(evt.target);
            var cmd = CMDS.OPERATE_FLY;
            var obj = AGame.ServiceBuilder.newClazz(cmd);
            obj.fInd = nInd;
            AGame.ServiceBuilder.sendMessage(cmd, obj);
        }



    }
}