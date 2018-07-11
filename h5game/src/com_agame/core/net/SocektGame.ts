
module AGame {

    export class SocektGame extends SocketIO {
       
        private static inst:SocektGame;
        static getInst(){
            if(!this.inst)  this.inst = new SocektGame;
            return this.inst;
        }

       constructor(){
           super();

       }

        protected onConnected() {
            super.onConnected();
            SocketIO.SocketCur = this;
            // ServiceBuilder.notifyProtoHandler(SocketLogin.CONNECTED_LOGIN);
        }
       

    }

}