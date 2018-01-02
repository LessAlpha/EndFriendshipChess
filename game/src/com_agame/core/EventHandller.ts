
module AGame {
	export class EventHandler implements IController{
        
        protected arrCmdEvents:any[] = [];

        constructor(){
            // this.register();
        }

        public register():void
		{
			let len:Number = this.arrCmdEvents.length;
			let router = AGame.R.router.getObserver();
            let observer:AGame.IObserver = new AGame.Observer( this.execute, this );
            for( var i:number = 0;  i < len; i++ ) {
                router.registerObserver( this.arrCmdEvents[i],  observer );
            }
		}
        public execute(notification: AGame.INotification) {
            // var name = notification.getName();
            // var body = notification.getBody();
            // switch(name) {

            // }
        }
        
        public unRegister() {
            let router = AGame.R.router.getObserver();
            for(let i in this.arrCmdEvents)    router.removeObserver( this.arrCmdEvents[i], this );
        }


		/** 由类名获取显示对象的实例 */
		public getView(viewName,param?){
			var clazz = egret.getDefinitionByName(viewName);
			var ca = new clazz(param);
			return ca;
		}
	}
}