module AGame {
	export class Controller implements IController{
		protected m_name:string;
		/** 注册全局指令 */
		public register(){
		}
		/** 由全局指令派发过来 */
		public execute(notification: INotification){
		}
		/** 由类名获取显示对象的实例 */
		public getView(viewName,param?){
			var clazz = egret.getDefinitionByName(viewName);
			var ca = new clazz(param);
			return ca;
		}

	}
}