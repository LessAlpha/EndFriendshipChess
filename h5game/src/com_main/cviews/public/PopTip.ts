
enum TypePopTip {
    SMALL       = 0,
    MIDDLE      = 1,
    // BIG         = 2,
    // BIGGER      = 3
}

module com_main {
    export class PopTip extends CView {

        private arrSkinPop = ['public/PopTipSizeSmall.exml', 'public/PopTipSizeMiddle.exml'];
        private imgBtnClose :eui.Image;
        private lbTitle :eui.Label;
        private lbTip :eui.Label;
        private imgTitle :eui.Image;
        private btnSure :eui.Button;
        private btnCancel :eui.Button;

        private strTitle :string;
        private strTip :string;
        private strSourceTitle:string;
        private callSure :Function;
        private callContex :any;
        private callCancel :Function;
        private labelBtnLeft:string;
        private labelBtnRight:string;

        private bOnlySure :boolean;
        private bHasBtnClose:boolean;

        // {strTip:'', bOnlySure:false, strSourceTitle:'', callSure:, callContex:, callCancel:}
        constructor(typePop:TypePopTip, strLbTitle:string, strTip:string, bOnlySure:boolean, bHasBtnClose:boolean, strSourceTitle?:string, callSure?:Function, callContex?:any, callCancel?:Function, labelBtnLeft?:string, labelBtnRight?:string,) {
            super();
            this.callSure = callSure;
            this.callContex = callContex;
            this.callCancel = callCancel;
            this.bOnlySure = bOnlySure;
            this.bHasBtnClose = bHasBtnClose;
            if(strSourceTitle)      this.strSourceTitle = strSourceTitle;
            this.labelBtnLeft = labelBtnLeft;
            this.labelBtnRight = labelBtnRight;
            this.strTip = strTip;
            this.strTitle = strLbTitle;
            
            this.bCanTouchShadowToClose = false;// 不允许触摸背部遮罩关闭页面
            this.initApp(this.arrSkinPop[typePop]);
        }

        protected onCreate() {
            this.resize();
            EventManager.addTouchScaleListener(this.imgBtnClose, this, this.touchCancel);
            EventManager.addEventListener(this.btnSure, egret.TouchEvent.TOUCH_TAP, this, this.touchSure);
            EventManager.addEventListener(this.btnCancel, egret.TouchEvent.TOUCH_TAP, this, this.touchCancel);
            this.imgTitle.source = this.strSourceTitle;
            this.lbTitle.text = this.strTitle;
            this.lbTip.text = this.strTip;
            if(this.bOnlySure) {
                this.btnSure.horizontalCenter = "0";
                this.btnCancel.visible = false;
            } 
            if(this.bHasBtnClose)   this.imgBtnClose.visible = true;
            if(this.labelBtnLeft)   this.btnSure.label = this.labelBtnLeft;
            if(this.labelBtnRight)  this.btnCancel.label = this.labelBtnRight;

        }
        public resize() {
            UpManager.resizeOnStageCenter(this);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////

        private touchSure() {
            if(this.callSure)   this.callSure.call(this.callContex);
            this.closePop();
        }
        private touchCancel() {
            if(this.callCancel)     this.callCancel.call(this.callContex);
            this.closePop();
        }

        private closePop() {
            UpManager.history();
        }

    }
}