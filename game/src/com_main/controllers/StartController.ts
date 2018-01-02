module com_main {
    export class StartController extends AGame.Controller{
        public constructor() {
            super();
        }
        

        public register(){
            let r = AGame.R;
            let arrCmd :number[] = [StartNav.ADD_START, StartNav.ADD_TOP_INVITE, StartNav.ADD_TOP_SHARE, StartNav.ADD_TOP_BLOCK_REQUEST];
            for(let i in arrCmd)    r.registerRouter(arrCmd[i], StartController);
        }

        public execute(notification: AGame.INotification) {
            let name = notification.getName();
            let body = notification.getBody();
            console.log('StartController ', name, body);
            switch(name) {
                case StartNav.ADD_START:
                    SceneManager.change(SceneTypes.START);
                    break;
                case StartNav.ADD_TOP_INVITE:
                    
                    break;
                case StartNav.ADD_TOP_SHARE:
                    new CompShare();
                    break;
                case StartNav.ADD_TOP_BLOCK_REQUEST:
                    com_main.CompUIBlockRequest.toggleShow(body);
                    break;
            }
        }
    }
}