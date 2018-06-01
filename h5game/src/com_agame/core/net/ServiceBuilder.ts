
module AGame {

	export class ServiceBuilder {
		/**
		 * 提供数据发送与接收的相关接口
		 */
		// private m_pBuilder: any = new ProtoBuilder();
		private m_pObserver: HandlerObserver = new HandlerObserver();
		private m_pProtocolMap: any = {};
		private m_pViewEvents: any = {};

		/** 注册接收数据后的数据解析回调 */
		public registerModel(protocol: number, commandClassRef: any, reqClass: string, resClass: string = null) {
			if (resClass) {
				this.m_pProtocolMap[protocol] = [commandClassRef, reqClass, resClass];
			} else {
				this.m_pProtocolMap[protocol] = [commandClassRef, reqClass];
			}
		}
		/** 派发接收数据后的数据解析回调 */
		public notifyModel(protocol: number, data: any) {
			if (this.m_pProtocolMap[protocol]) {
				var model = this.getProtoModel(protocol);
				if (model && model.execute) {
					model.execute(new Notification(protocol, data));
				}
			}
		}

		/** 注册接收数据后的协议回调，如果已经注册则返回 */
		public registerProxy(proxyName: any, notify: Function, target: any): void {
			if(notify){
				var events:any[] = this.m_pViewEvents[ target.hashCode ];
				if(events && events.indexOf(proxyName) > -1)	return;
				this.m_pObserver.registerObserver(proxyName, new Observer( notify, target ));
				if( events )
					events.push( proxyName );
				else
					this.m_pViewEvents[ target.hashCode ] = [ proxyName ];
			}
		}
		/** 派发接收数据后的协议回调 */
		public notifyProxy(notification: INotification) {
			this.m_pObserver.notifyObservers(notification);
		}
		/** 移除接收数据后的协议回调 */
		public removeProxy(target: any): void {
			var events: any[] = this.m_pViewEvents[target.hashCode];
			if (!events) return;

			for (var i: number = 0; i < events.length; i++) {
				this.m_pObserver.removeObserver(events[i], target);
			}
			delete this.m_pViewEvents[target.hashCode];
		}

		private getProtoModel(protocol: number) {
			return this.m_pProtocolMap[protocol][0];
		}

		private getProtoByReq(protocol: number) {
			var protos: any[] = this.m_pProtocolMap[protocol];
			return this.m_pProtocolMap[protocol][1];
		}

		private getProtoByResp(protocol: number) {
			var protos: any[] = this.m_pProtocolMap[protocol];
			if (!protos) return null;
			return protos.length == 2 ? protos[1] : protos[2];
		}

		/** 解码服务端发送过来的数据，接收到数据时解析 */
		public encode(protocol: number, dataSend: any) {
			
			return ;//this.m_pBuilder.encode(this.getProtoByReq(protocol), dataSend);
		}
		/** 解码服务端发送过来的数据，接收到数据时解析 */
		public decode(protocol: number, buffer: any) {
			return ;//this.m_pBuilder.decode(this.getProtoByResp(protocol), buffer);
		}

		private static REQ_RESP_DIFF = 0;
		private static _instance: ServiceBuilder;

		public static get Instance() {
			if (!ServiceBuilder._instance) {
				ServiceBuilder._instance = new ServiceBuilder();
			}
			return ServiceBuilder._instance;
		}

		/** 添加一项从服务端接收数据后的解析和事件派发 */
		public static addProtoHandler(protocol: number, commandClassRef: any, reqClass: string, resClass: string = null) {
			ServiceBuilder.Instance.registerModel(protocol, commandClassRef, reqClass, resClass);
		}
		/** 从服务端接收数据后的解析和事件派发 */
		public static notifyProtoHandler(protocol: number, dataProto: any) {
            let data = ServiceBuilder.decode(protocol, dataProto);
			ServiceBuilder.Instance.notifyModel(protocol - ServiceBuilder.REQ_RESP_DIFF, data);
		}

		/** 注册接收数据后的协议回调 */
		public static registerProxy(proxyName: any, notify: Function, target: any): void {
			ServiceBuilder.Instance.registerProxy(proxyName, notify, target);
		}
		/** 派发接收数据后的协议回调 */
		public static notifyProxy(notification: INotification) {
			ServiceBuilder.Instance.notifyProxy(notification);
		}
		/** 移除接收数据后的协议回调 */
		public static removeProxy(target: any): void {
			ServiceBuilder.Instance.removeProxy(target);
		}

		/** 编码服务端发送过来的数据，接收到数据时加密 */
		public static encode(protocol: number, buffer: any) {
			return ServiceBuilder.Instance.encode(protocol, buffer);
		}
		/** 解码服务端发送过来的数据，接收到数据时解析 */
		public static decode(protocol: number, buffer: any) {
			return ServiceBuilder.Instance.decode(protocol, buffer);
		}

		/** 发送协议数据，可同时注册回调 */
		public static sendMessage(protocol:number, sendData: any, notify?: Function, target?: any) {
			let dataEncode = ServiceBuilder.Instance.encode(protocol, sendData);
			ServiceBuilder.Instance.registerProxy(protocol, notify, target);
			SocketIO.SocketCur.sendProtocol(protocol, dataEncode);
		}
	}
}