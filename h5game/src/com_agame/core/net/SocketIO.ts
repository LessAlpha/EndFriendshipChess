
module AGame {

    export class SocketIO {
        
        private static TIMER: number = 60;
        public static SocketCur: SocketIO;// 当前连接的socket，平台服或游戏服

        private uri: string;
        protected socket: SocketIOClient.Socket;
        private connected: Boolean = false;

        private heartbeatTimer;
        private willNotifyDisconnected = true;

        public constructor (opts: SocketIOClient.ConnectOpts = { autoConnect:false }) {
            this.socket = io(opts);
            this.initHeartbeat();
            this.addConnectListeners();
            this.addCustomListeners();
        }
        
        public set uriOfSocket(uri: string) {
            this.uri = uri;
        }

        public connect() {
            this.socket.io.uri = this.uri;
            this.socket.connect();
        }
        

        /////////////////////////////////////////////////////////////////////////////////////////////////////

        protected addConnectListeners() {
            this.socket.on("connect", ()=>{this.onConnected();});
            this.socket.on("disconnect", ()=>{this.disconnected();});
            this.socket.on("error", ()=>{this.onError()});
        }

        protected addCustomListeners() {
        }

        protected onReceive(cmd:number, dataProto:any) {
            // console.info('receive', cmd);
            ServiceBuilder.notifyProtoHandler(cmd, dataProto);
        }


        public closeManually() {
            if (this.isConnected) {
                this.willNotifyDisconnected = false;
                this.socket.close();
                // this.disconnected();
            }
        }

        protected onConnected() {
            console.log('onConnected');
            this.connected = true;
            this.willNotifyDisconnected = true;
            this.startHeartbeat();
        }

        protected disconnected() {
            this.connected = false;
            this.stopHeartbeat();
            this.onClear();
        }

        private onClear(): void {
            if (!this.socket) return;
            this.socket.removeAllListeners();
            this.socket = null;
        }

        private onError() {
            this.connected = false;
        }

        public sendProtocol(protocol: number, bytes: any) {
            console.info('send', protocol, bytes);
            this.socket.emit(''+protocol, bytes);
        }

        public isConnected() {
            return this.isConnected;
        }

        private initHeartbeat() {
            this.heartbeatTimer = new egret.Timer(1000 * SocketIO.TIMER, 0);
            this.heartbeatTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        }

        private startHeartbeat() {
            this.onTimer();
            this.heartbeatTimer.start();
        }

        private stopHeartbeat() {
            this.heartbeatTimer.stop();
        }

        public onTimer() {

        }
    }

}