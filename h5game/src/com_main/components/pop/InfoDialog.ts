/**
 * Created  0523 on 2016/12/22.
 */

module com_main {
    export class InfoDialog extends CView {
        private Lbl_Title: eui.Label;
        private Lbl_Content: eui.Label;
        private Img_Close: com_main.CImage;
        private Btn_OK: com_main.ComButton;

        private funcCallBack: Function;
        private callBackObj: Object;

        private btnIcon:string;

        private rhText: CCRichText = null;

        public constructor() {
            super();
            this.initCom("Pop/InfoDlg.exml");
            this.rhText = new CCRichText(this.Lbl_Content);
            this.Lbl_Content.parent.addChild(this.rhText);
        }

        public onDestroy(): void {
            super.onDestroy();
            this.funcCallBack = null;
            this.callBackObj = null;
            this.rhText = null;
            EventManager.removeEventListeners(this.Btn_OK);
            EventManager.removeEventListeners(this.Img_Close);
            debug("InfoDialog destory");
        }

        protected onCreate(): void {
            super.onCreate();
            // 注册事件
            EventManager.addTouchScaleListener(this.Btn_OK, this, this.onOkClick);
            EventManager.addTouchScaleListener(this.Img_Close, this, this.onCloseClick);
            this.onRefresh();
        }

        /**
         * 刷新界面
         * @param body
         */
        public onRefresh(body?): void {
            if (this.btnIcon != "") {
                // this.Btn_OK.icon = this.btnIcon;
            }
        }

        // 关闭窗口
        protected onCloseClick(): void {
            this.funcCallBack = null;
            this.callBackObj = null;
            this.rhText = null;
            UpManager.history(false);
        }

        // 确认事件
        protected onOkClick(): void {
            if (this.funcCallBack) {
                this.funcCallBack.call(this.callBackObj);
            }
            this.onCloseClick()
        }

        // 设置标题
        public set title(title: string) {
            this.Lbl_Title.text = title;
        }

        // 设置富文本
        public setRichText(text: string) {
            if (!this.rhText) {
                this.rhText = new CCRichText(this.Lbl_Content);
                this.Lbl_Content.parent.addChild(this.rhText);
            }
            this.rhText.text = text;
        }

        // 设置按钮文本
        public setBtnTextAndIcon(text: string, showIcon: number = null) {
            // this.Btn_OK.text = text;
            // this.btnIcon = showIcon;
            this.Btn_OK.setCoinText(text,showIcon);
        }

        // 设置确认事件
        public setBtnOkCallBack(func: Function, obj: Object) {
            this.funcCallBack = func;
            this.callBackObj = obj;
        }

        public resize(): void {
            this.height = AGame.R.app.stageHeight;
        }

    }
}