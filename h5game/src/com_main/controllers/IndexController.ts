module com_main {
    export class IndexController extends AGame.Controller{
        public constructor() {
            super();
        }
        

        public register(){
            let r = AGame.R;
            let arrCmd :number[] = [
                IndexNav.ADD_INDEX
            ];
            for(let i in arrCmd)    r.registerRouter(arrCmd[i], IndexController);
        }

        public execute(notification: AGame.INotification) {
            let name = notification.getName();
            let body = notification.getBody();
            console.log('IndexController ', name, body);
            switch(name) {
                case IndexNav.ADD_INDEX:
                    SceneManager.change(SceneTypes.INDEX);
                    break;
            }
        }
    }
}