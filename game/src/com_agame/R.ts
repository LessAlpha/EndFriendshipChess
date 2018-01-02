module AGame {
	export class R {
		private static m_pApp:App;
		private static m_pRouter:Router;

		public constructor() {
		}

		public static startup(root?:eui.UILayer):void
		{
			this.initialize();
			if(root)
			{
				this.m_pApp.registerView(root);
			}
		}

		public static get app():App{
			return this.m_pApp;
		}

		public static get router():Router{
			return this.m_pRouter;
		}

		public static initialize():void
		{
			if( !this.m_pApp )
				this.m_pApp = App.Instance;

			if( !this.m_pRouter )
				this.m_pRouter = Router.Instance;
		}

		/** 注册回调指令 */
		public static registerRouter(notificationName: any, commandClassRef: Function): void
		{
			this.m_pRouter.registerRouter(notificationName, commandClassRef);
		}
		/** 派发回调指令 */
		public static notifyObserver ( nameNotification: any, bodyNotification?:any ):void
		{
			let notification:INotification = new Notification(nameNotification, bodyNotification);
			this.m_pRouter.notifyObservers( notification );
		}
		/** 派发回调指令 */
		// public static notifyObservers ( notification:INotification ):void
		// {
		// 	this.m_pRouter.notifyObservers( notification );
		// }
		/** 移除指令 */
		public static removeObservers(notificationName: any, contexObserver:any):void
		{
			this.m_pRouter.getObserver().removeObserver(notificationName, contexObserver);
		}
	}
}