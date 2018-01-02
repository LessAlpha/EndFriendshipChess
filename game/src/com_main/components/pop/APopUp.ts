module com_main {

	export class APopUp extends CComponent {

		public static NAME: string = "APopUp";

		private m_pCloseBtn: eui.Image;
		private m_pBackBtn: eui.Image;
		private m_pTitleLbl: eui.Label;

		public isSuper: boolean = false;
		private m_pOnlyClose: boolean = false;
		private funcObj: any;
		private funcSelect: Function;

		public constructor() {
			super();
			this.name = APopUp.NAME;
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			EventManager.removeEventListeners(this);
			EventManager.addTouchScaleListener(this.m_pCloseBtn, this, this.onCloseClick);
			EventManager.addTouchScaleListener(this.m_pBackBtn, this, this.onBackClick);
		}

		public set historyShow(show: boolean) {
			this.m_pBackBtn.visible = show;
			this.m_pOnlyClose = !show;
		}

		/**
		 * 关闭事件
		 * @param e
		 */
		private onCloseClick(e: egret.TouchEvent) {
			if (this.m_pOnlyClose) {
				this.onBackClick(e);
			} else {
				UpManager.close(true, this.isSuper);
			}
			e.stopImmediatePropagation();
		}

		/**
		 * 返回事件
		 * @param e
		 */
		private onBackClick(e: egret.TouchEvent) {
			if (this.funcSelect) {
				this.funcSelect.call(this.funcObj);
			} else {
				UpManager.history();
			}
			e.stopImmediatePropagation();
		}

		/**
		 * 设置返回事件回调
		 * @param obj
		 * @param func
		 */
		public addBackListener(obj: any, func: Function) {
			this.funcObj = obj;
			this.funcSelect = func;
		}

		public static getPopUp(panel: any) {
			if (panel) {
				return <APopUp>(panel.getChildByName(APopUp.NAME));
			}
			return null;
		}


		public static setTitle(panel: any, title: string, historyShow: boolean = true) {
			var popUpComponent: APopUp = APopUp.getPopUp(panel);
			if (popUpComponent) {
				popUpComponent.setTitle(title);
				popUpComponent.historyShow = historyShow;
			}
		}

		public setTitle(title: string) {
			if (title != "") {
				this.m_pTitleLbl.text = title;
			}
		}
	}
}