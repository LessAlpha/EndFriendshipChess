module com_main {
    export class PublicController extends AGame.Controller{
        public constructor() {
            super();
        }
        

        public register(){
            let r = AGame.R;
            let arrCmd :number[] = [
                PublicNav.ADD_POP_TIP, PublicNav.ADD_TIP_DURATION, PublicNav.ADD_POP_TIP_OFFLINE
            ];
            for(let i in arrCmd)    r.registerRouter(arrCmd[i], PublicController);
        }

        public execute(notification: AGame.INotification) {
            let name = notification.getName();
            let body = notification.getBody();
            console.log('PublicController ', name, body);
            switch(name) {
                case PublicNav.ADD_POP_TIP:
                    let popTip = new PopTip(body.typePop, body.strLbTitle, body.strTip, body.bOnlySure, body.bHasBtnClose, body.strSourceTitle, body.callSure, body.callContex, body.callCancel);
                    UpManager.popSmallView(popTip);
                    break;
                case PublicNav.ADD_TIP_DURATION:
                    TipDuration.popOne(body.strTip, body.nDuration);
                    break;
                case PublicNav.ADD_POP_TIP_OFFLINE:
                    let popOffline = new PopTipOffline ;
                    UpManager.popSmallView(popOffline);
                    
            }
        }
    }
}