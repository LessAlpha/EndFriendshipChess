
module AGame {

    export class LoginSocket extends SocketIO {

        static CONNECTED_LOGIN = 50000;
        static DISCONNECTED_LOGIN = 50001;

        constructor() {
            super();
        }



        protected onConnected() {
            super.onConnected();
            ServiceBuilder.notifyProtoHandler(LoginSocket.CONNECTED_LOGIN);
        }

        
        protected disconnected() {
            super.disconnected();
            ServiceBuilder.notifyProtoHandler(LoginSocket.CONNECTED_LOGIN);
        }

    }
}