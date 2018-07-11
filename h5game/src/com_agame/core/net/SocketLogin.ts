
module AGame {

    export class SocketLogin extends SocketIO {
        private static inst:SocketLogin;
        static get getInst(){
            if(!this.inst)  this.inst = new SocketLogin;
            return this.inst;
        }
        static CONNECTED_LOGIN = 50000;
        static DISCONNECTED_LOGIN = 50001;

        constructor() {
            super();
        }


        protected addCustomListeners() {
            this.socket.on(''+CMDS.LOGIN, (data)=>{this.onReceive(CMDS.LOGIN, data)});
        }


        protected onConnected() {
            super.onConnected();
            SocketIO.SocketCur = this;
            ServiceBuilder.Instance.notifyModel(SocketLogin.CONNECTED_LOGIN, null);

            
            var cmd = Number(CMDS.LOGIN);
            var obj = {
                uId : AccountInfo.USER_ID,
                nick : AccountInfo.NICK,
                photo : "",
                psw : ""
            }
            // this.sendProtocol(cmd, JSON.stringify(obj));
            AGame.ServiceBuilder.sendMessage(cmd, obj, this.receiveLogin, this);
            
        }

        private receiveLogin(notif:AGame.Notification) {
            AGame.warn("SL - ",notif.getBody());
        }

        
        protected disconnected() {
            super.disconnected();
            ServiceBuilder.Instance.notifyModel(SocketLogin.DISCONNECTED_LOGIN, null);
        }

    }
}