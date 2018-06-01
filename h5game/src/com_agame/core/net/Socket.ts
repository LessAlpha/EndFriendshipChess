
module AGame {

    export class SocketIO {
        
        private static TIMER: number = 60;
        public static SocketCur: SocketIO;// 当前连接的socket，平台服或游戏服

        private m_pUri: string;
        private m_pSocket: SocketIOClient.Socket;
        private m_bIsConnected: Boolean = false;

        private m_pHeartbeatTimer;
        private m_bWillNotifyDisconnected = true;

        public constructor (opts: SocketIOClient.ConnectOpts = { autoConnect:false }) {
            this.m_pSocket = io(opts);
            this.addConnectListeners();
        }
        
        public set uriOfSocket(uri: string) {
            this.m_pUri = uri;
        }

        
        public connect() {
            this.m_pSocket.io.uri = this.m_pUri;
            this.m_pSocket.connect();
        }

        private addConnectListeners() {
            this.m_pSocket.on("connect", ()=>{this.onConnected();});
            this.m_pSocket.on("disconnect", ()=>{this.disconnected();});
            this.m_pSocket.on("error", ()=>{this.onError()});
        }

        protected addCustomListeners() {
            
        }

        private onReceive(cmd:number, dataProto:any) {
            // console.info('receive', cmd);
            ServiceBuilder.notifyProtoHandler(cmd, dataProto);
        }

        public closeManually() {
            if (this.m_bIsConnected) {
                this.m_bWillNotifyDisconnected = false;
                this.m_pSocket.close();
                // this.disconnected(); ?
            }
        }

        protected onConnected() {
            this.m_bIsConnected = true;
            this.m_bWillNotifyDisconnected = true;
        }

        protected disconnected() {
            this.m_bIsConnected = false;
            this.stopHeartbeat();
            this.onClear();
        }

        private onClear(): void {
            if (!this.m_pSocket) return;
            this.m_pSocket.removeAllListeners();
            this.m_pSocket = null;
        }

        private onError() {
            this.m_bIsConnected = false;
        }

        public sendProtocol(protocol: number, bytes: any) {
            console.info('send', protocol, bytes);
            // this.sendBytes(protocol, sendData.toArrayBuffer());
            this.m_pSocket.emit(''+protocol, bytes);
        }

        public isConnected() {
            return this.m_bIsConnected;
        }

        private initHeartbeat() {
            this.m_pHeartbeatTimer = new egret.Timer(1000 * SocketIO.TIMER, 0);
            this.m_pHeartbeatTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        }

        private startHeartbeat() {
            this.onTimer();
            this.m_pHeartbeatTimer.start();
        }

        private stopHeartbeat() {
            this.m_pHeartbeatTimer.stop();
        }

        public onTimer() {

        }
    }

}