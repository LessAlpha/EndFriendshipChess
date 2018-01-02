///**
// * 提示框
// *
// */
//
//module com_main{
//    export class InfoTips extends CView{
//        private Lbl_Tip:eui.Label;
//        private rhText: CCRichText = null;
//        private mTimer:egret.Timer;
//        private mCount:number = 0;
//        private mtipType:number = 0;
//
//        public constructor(type){
//            super();
//            this.initCom("Pop/InfoTip.exml");
//            this.mtipType = type;
//            this.rhText = new CCRichText(this.Lbl_Tip);
//            this.Lbl_Tip.parent.addChild(this.rhText);
//        }
//        public onDestroy()
//        {
//            super.onDestroy();
//            this.rhText = null;
//            this.mCount = null;
//            this.mtipType = null;
//            if(this.mTimer)
//            {
//                this.mTimer.stop();
//                Utils.removeTimer(this.mTimer,this.TimerFunc,this);
//                this.mTimer = null;
//            }
//        }
//        protected onCreate():void{
//            super.onCreate();
//            this.typeofDialog();
//        }
//        public typeofDialog()
//        {
//            if(this.mtipType == TipDiaLogTypes.NOT_ENOUGH_DIAMONDS)
//            {
//                var temp = "<color=7FFF00><clk=%s>"+L.getLanguage(300057)+"</clk></color>"
//                var target = L.getLanguageFormat(300056,temp);
//                this.setText(target);
//                this.rhText.addEventListener(RichTextEvent.Link,this.Recharge,this);
//            }
//            if(!this.mTimer)
//            {
//                this.mTimer = Utils.createTimer(this.TimerFunc,this);
//                this.mTimer.start();
//            }
//            else
//            {
//                if(this.mTimer&&this.mCount<3)
//                {
//                    this.mTimer.start();
//                }
//                else
//                {
//                    this.mTimer.stop();
//                }
//            }
//        }
//        /**
//         * 充值的回调
//         */
//        private Recharge(evt:RichTextEvent)
//        {
//            debug("gotoPay");
//        }
//        // 设置提示内容
//        public setText(text:string):void{
//            if (!this.rhText) {
//                this.rhText = new CCRichText(this.Lbl_Tip);
//                this.Lbl_Tip.parent.addChild(this.rhText);
//            }
//            this.rhText.text = text;
//        }
//        private TimerFunc()
//        {
//            debug(this.mCount);
//            this.mCount ++;
//            if(this.mCount>=3)
//            {
//                this.mCount = 0;
//                if(this.mTimer && this.mCount == 0)
//                {
//                    this.mTimer.stop();
//                    Utils.removeTimer(this.mTimer,this.TimerFunc,this);
//                    this.mTimer = null;
//                }
//                com_main.UpManager.history(false);
//            }
//
//        }
//        public resize(): void {
//            this.height = AGame.R.app.stageHeight;
//        }
//    }
//}
