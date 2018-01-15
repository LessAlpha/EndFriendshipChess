//module AGame {
//    /**
//     * @author
//     */
//    export class CSocketWeb {
//        public static CONNECTED_LOGIN:number = 500001;//连接成功
//        public static CONNECTED_CLOSE:number = 500002;//连接关闭
//        private static TIMER: number = 30;
//        private static _instance: CSocketWeb;
//
//        public static getInstance() {
//            if (!CSocketWeb._instance) {
//                CSocketWeb._instance = new CSocketWeb();
//            }
//            return CSocketWeb._instance;
//        }
//
//        private m_pIp: string;
//        private m_iPort: number;
//        private m_pSocket: egret.WebSocket;
//        private m_bIsConnected: Boolean = false;
//
//        private m_pHeartbeatTimer;
//
//        public constructor() {
//            this.m_pSocket = new egret.WebSocket();
//            this.m_pSocket.type = egret.WebSocket.TYPE_BINARY;
//            this.m_pSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceive, this);
//            this.m_pSocket.addEventListener(egret.Event.CONNECT, this.onConnected, this);
//            this.m_pSocket.addEventListener(egret.Event.CLOSE, this.onClose, this);
//            this.m_pSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
//
//            this.m_pHeartbeatTimer = new egret.Timer(1000 * CSocketWeb.TIMER, 0);
//            this.m_pHeartbeatTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
//        }
//
//        private onReceive() {
//            var byteArray: egret.ByteArray = new egret.ByteArray();
//            this.m_pSocket.readBytes(byteArray);
//
//            var packet:Packet = new Packet();
//            packet.onReacive(byteArray);
//
//            var data = ServiceBuilder.decode(packet.protocol, packet.buffer.buffer);
//            ServiceBuilder.notifyProtoHandler(packet.protocol, data);
//
//            packet.onClear();
//        }
//
//        private onConnected() {
//            console.log("onConnected");
//            this.m_bIsConnected = true;
//            this.m_bIsShowClose = true;
//            ServiceBuilder.notifyProtoHandler(CSocketWeb.CONNECTED_LOGIN);
//        }
//
//        private m_bIsShowClose = true;
//
//        public close() {
//            if (this.m_bIsConnected) {
//                this.m_bIsShowClose = false;
//                this.m_pSocket.close();
//                this.onClose(false);
//            }
//        }
//
//        public onClose(isShow = true) {
//            this.m_bIsConnected = false;
//            this.stopHeartbeat();
//            ServiceBuilder.notifyProtoHandler(CSocketWeb.CONNECTED_CLOSE);
//            this.onClear();
//        }
//
//        private onClear(): void {
//            if (!this.m_pSocket) return;
//            this.m_pSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceive, this);
//            this.m_pSocket.removeEventListener(egret.Event.CONNECT, this.onConnected, this);
//            this.m_pSocket.removeEventListener(egret.Event.CLOSE, this.onClose, this);
//            this.m_pSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
//            this.m_pSocket = null;
//            CSocketWeb._instance = null;
//        }
//
//        private onError() {
//            this.m_bIsConnected = false;
//        }
//
//        public setConnectInfo(ip: string, port: number) {
//            this.m_pIp = ip;
//            this.m_iPort = port;
//        }
//
//        public connect() {
//            this.m_pSocket.connect(this.m_pIp, this.m_iPort);
//        }
//
//        public sendProtocol(protocol: number, sendData: any) {
//            var packet:Packet = new Packet();
//
//            packet.onWrite(protocol, sendData);
//            this.sendBytes(packet.buffer);
//
//            packet.onClear();
//        }
//
//        public sendBytes(bytes: egret.ByteArray) {
//            this.m_pSocket.writeBytes(bytes);
//            this.m_pSocket.flush();
//        }
//
//        //是否已经连接成功
//        public isConnected() {
//            return this.m_bIsConnected;
//        }
//
//        //开始发送心跳包
//        private startHeartbeat() {
//            this.onTimer();
//            this.m_pHeartbeatTimer.start();
//        }
//
//
//        private stopHeartbeat() {
//            this.m_pHeartbeatTimer.stop();
//        }
//
//        public onTimer() {
//        }
//    }
//}
