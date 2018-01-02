
// declare function io();
module AGame {

    /**
     * @author
     */
    export class CSocket {
        public static CONNECTED_LOGIN:number = 500001;
        public static CONNECTED_CLOSE:number = 500002;
        private static TIMER: number = 30;
        private static _instance: CSocket;

        public static getInstance() {
            if (!CSocket._instance) {
                CSocket._instance = new CSocket();
            }
            return CSocket._instance;
        }

        private m_pIp: string;
        private m_iPort: number;
        private m_pSocket;
        private m_bIsConnected: Boolean = false;

        private m_pHeartbeatTimer;

        public connect(url:string) {
            var socket = window['io'](url);
            socket.on("connect", ()=>{this.onConnected();});
            socket.on("disconnect", ()=>{this.onClose()});
            socket.on("error", ()=>{this.onError()});

            socket.on(''+CMDS.LOGIN, (data)=>{this.onReceive(CMDS.LOGIN, data)});
            socket.on(''+CMDS.CREATE_ROOM, (data)=>{this.onReceive(CMDS.CREATE_ROOM, data)});
            socket.on(''+CMDS.JOIN_ROOM, (data)=>{this.onReceive(CMDS.JOIN_ROOM, data)});
            socket.on(''+CMDS.START_GAME, (data)=>{this.onReceive(CMDS.START_GAME, data)});
            socket.on(''+CMDS.OPERATE_LUCKY_NEXT, (data)=>{this.onReceive(CMDS.OPERATE_LUCKY_NEXT, data)});
            socket.on(''+CMDS.OPERATE_LUCKY_END, (data)=>{this.onReceive(CMDS.OPERATE_LUCKY_END, data)});
            socket.on(''+CMDS.OPERATE_FLY, (data)=>{this.onReceive(CMDS.OPERATE_FLY, data)});
            
            socket.on(''+CMDS.BROADCAST_ROOM_INFO, (data)=>{this.onReceive(CMDS.BROADCAST_ROOM_INFO, data)});
            // socket.connect('http://127.0.0.1:18080');
            this.m_pSocket = socket;

            this.m_pHeartbeatTimer = new egret.Timer(1000 * CSocket.TIMER, 0);
            this.m_pHeartbeatTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);

        }

        private onReceive(cmd:number, dataProto:any) {
            var data = ServiceBuilder.decode(cmd, dataProto);
            console.info('receive', cmd, data);
            ServiceBuilder.notifyProtoHandler(cmd, data);
        }

        private onConnected() {
            console.log("socket onConnected");
            this.m_bIsConnected = true;
            this.m_bIsShowClose = true;
            ServiceBuilder.notifyProtoHandler(CSocket.CONNECTED_LOGIN);
        }

        private m_bIsShowClose = true;

        public close() {
            if (this.m_bIsConnected) {
                this.m_bIsShowClose = false;
                this.m_pSocket.close();
                this.onClose(false);
            }
        }

        public onClose(isShow = true) {
            this.m_bIsConnected = false;
            this.stopHeartbeat();
            ServiceBuilder.notifyProtoHandler(CSocket.CONNECTED_CLOSE);
            this.onClear();
        }

        private onClear(): void {
            if (!this.m_pSocket) return;
            //this.m_pSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceive, this);
            //this.m_pSocket.removeEventListener(egret.Event.CONNECT, this.onConnected, this);
            //this.m_pSocket.removeEventListener(egret.Event.CLOSE, this.onClose, this);
            //this.m_pSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
            this.m_pSocket = null;
            CSocket._instance = null;
        }

        private onError() {
            this.m_bIsConnected = false;
        }

        public setConnectInfo(ip: string, port: number) {
            this.m_pIp = ip;
            this.m_iPort = port;
        }

        //public connect() {
        //    //this.m_pSocket.connect(this.m_pIp, this.m_iPort);
        //}

        public sendProtocol(protocol: number, sendData: any) {
            //var packet:Packet = new Packet();
            //packet.onWrite(protocol, sendData);
            console.info('send', protocol, sendData);
            this.sendBytes(protocol, sendData.toArrayBuffer());
            //packet.onClear();
        }

        public sendBytes(protocal:number, bytes: egret.ByteArray) {
            //this.m_pSocket.writeBytes(bytes);
            //this.m_pSocket.flush();
            this.m_pSocket.emit(''+protocal, bytes);
        }

        public isConnected() {
            return this.m_bIsConnected;
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