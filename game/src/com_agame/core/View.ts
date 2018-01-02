module AGame {
	export class View extends AComponent{

		public twAddToStage :WayTw = null;// 添加到舞台的缓动动画方式
		public twRemFromStage :WayTw = null;// 从舞台移除的缓动动画方式

		public constructor() {
			super();
			this.registerEvents();
		}

		/** 与控制器之间通信的指令号 */
		protected listNotificationInterests():any[]
		{
			return [];
		}
		/** 处理与控制器之间的交互指令 */
		protected handleNotification(notification: INotification)
		{
		}


		protected onCreate()
		{
		}
		/** 销毁自身时调用 移除事件和协议回调 */
		public onDestroy(): void {
			this.removeEvents();
			ServiceBuilder.Instance.removeProxy(this);// todo 
		}

		/** 刷新组件 */
		public onRefresh(body?): void {}

		public enter(body?:any){}
		/** 舞台尺寸变化时 */
		public resize(): void {}
		protected listProxy():number[]{
			return [];
		}
		protected handleProxy(notification:Notification){

		}
		////////////////////////////////////////////////////////////////////////////////////////////////////////

		protected resizeOnStageCenter(nGapPermit:number= 60){
			let nMaxHeight = AGame.R.app.stageHeight - nGapPermit;
			if(this.height*this.scaleY > nMaxHeight) {
				let nScale = (this.height*this.scaleY) / nMaxHeight;
				this.scaleX = this.scaleY = nScale;
			}
		}

		/** 设置场景皮肤，以"resource/skins/app/"做根目录 */
		protected initApp(skinName: string = ''): void {
            this.init('app/' + skinName);
        }
		/** 设置组件皮肤，以"resource/skins/components/"做根目录 */
        protected initCom(skinName: string = ''): void {
            this.init('components/' + skinName);
        }

        protected init(skinName: string = ''): void {
			this.registerEvtCreated();
            this.skinName = "resource/skins/" + skinName;
        }
		protected registerEvtCreated(){
            this.once(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
		}

		private createCompleteEvent(event: egret.Event): void {
            this.onCreate();
        }
		protected registerProxy(){
			let arrProxy = this.listProxy();
			for(let i in arrProxy)	ServiceBuilder.Instance.registerProxy(arrProxy[i], this.handleProxy, this);
		}
		/** 注册与控制器之间的交互指令  */
		protected registerEvents( ):void
		{
			var interests:string[] = this.listNotificationInterests();
			var len:Number = interests.length;
			if(!R.router) return;
			var router = R.router.getObserver();
			if( len>0 )
			{
				var observer:IObserver = new Observer( this.handleNotification, this );
				for( var i:number = 0;  i < len; i++ ) {
					router.registerObserver( interests[i],  observer );
				}
			}
		}
		/** 移除与控制器之间的交互指令 */
		protected removeEvents( ):void
		{
			var interests:string[] = this.listNotificationInterests();
			var i:number = interests.length;
			var router = R.router.getObserver();
			while( i-- ){
				router.removeObserver( interests[i], this );
			}
		}

	}
}