module com_main {

    /**  */
    export class PlayController extends AGame.Controller{
        public constructor() {
            super();
        }

        public register(){
            var r = AGame.R;            
            let arrCmd :number[] = [
                PlayNav.ADD_PLAY
            ];
            for(let i in arrCmd)    r.registerRouter(arrCmd[i], PlayController);
        }

        public execute(notification: AGame.INotification) {
            var name = notification.getName();
            var body = notification.getBody();
            console.log('PlayController ', name, body);
            switch(name) {
                case PlayNav.ADD_PLAY:
                    SceneManager.change(SceneTypes.GAME);
                    break;
            }
        }
    }
}