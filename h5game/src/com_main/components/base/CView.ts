module com_main {
	export class CView extends AGame.View{
		// protected lan:any;
		public popType :number = 1;// UpManager.STYLE_UP;  eui实例化时遇到这枚举时会解析报错，原因未明
		public nAlphaMask :number = 0.5;// 背面遮罩透明度
		public bCanTouchShadowToClose:boolean = true;// 是否可以通过触摸黑色背景遮罩关闭该显示
		public bIsHistoryBack :boolean = true;// 是调用Upmanager的history()还是close()方法, 默认history
        public sceneType:SceneTypes;

		public constructor() {
			super();
			// this.lan = L.getInstance().getObject(); 
		}

		public disableTouchShadowToClse() {
			this.bCanTouchShadowToClose = false;
		}

		public setAlphaMaskBtm(nAlpha:number) {
			this.nAlphaMask = nAlpha;
		}

		// $onRemoveFromStage(isclear = true): void {
		// 	this.lan = null;
        //     super.$onRemoveFromStage(isclear);
        // }

		public onDestroy(): void {
			EventManager.removeEventListeners(this);
			super.onDestroy();
		}
	}
}