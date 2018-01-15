/**
 * Created by Yong on 2016/7/28.
 */
module com_main {
    export class UIMsgAnimLabel extends eui.Label {
        public constructor() {
            super();
            this.fontFamily = "dfh3Font";
            this.size = 35;
            this.textColor = 0xffffff;
            this.stroke = 2;
            this.strokeColor = 0x066b80;
            this.width = 750;
            this.height = 35;
            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;
            this.textAlign = "center";
            this.verticalAlign = "middle";
        }

        public setData(text:string){
            this.text = text;
        }

        public  StartTween() {
            var ani_view = this;
            var y = ani_view.y;
            var tw = egret.Tween.get(ani_view);
            tw.to({y:y-550},765);
            tw.to({alpha:0,scaleX:1.3,scaleY:1.3},255);
            tw.call(function(){
                egret.Tween.removeTweens(ani_view);
                ani_view.parent.removeChild(ani_view);
                UIMsgAnimManager.removeRunAniMap(ani_view);
            });
        }
    }



    export class UIMsgAnimManager{

        private static m_pQueue:UIMsgAnimLabel[] = [];
        private static m_pRunAniMap;
        private static m_pTimer:egret.Timer;
        private static m_iLastTime:number = 0;

        public static clearQueue():void{
            var label: UIMsgAnimLabel;
            var list: UIMsgAnimLabel[] = this.m_pQueue;

            if (this.m_pTimer){
                this.m_pTimer.stop();
                this.m_pTimer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
                this.m_pTimer = null;
            }

            for (var hs in this.m_pRunAniMap){
                label = this.m_pRunAniMap[hs];
                egret.Tween.removeTweens(label);
                label.parent.removeChild(label);
            }
            this.m_pRunAniMap = null;

            for(var i: number = list.length - 1;i >= 0;i--) {
                label = list[i];
                egret.Tween.removeTweens(label);
                label.parent.removeChild(label);
                list.splice(i,1);
                // debug("this.m_pQueue",this.m_pQueue);
            }
        }

        public static AddMessage(message: string): void {
            var label:UIMsgAnimLabel = new UIMsgAnimLabel();
            label.setData(message);
            this.m_pQueue.push(label);
            var levelScene = AGame.R.app.topLevel;
            var height = AGame.R.app.stageHeight;
            var width = AGame.R.app.stageWidth;
            label.x = width / 2;
            label.y = height - 450;
            label.visible = false;
            levelScene.addChild(label);

            if (!this.m_pTimer){
                this.m_pTimer = new egret.Timer(30,0);
                this.m_pTimer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            }
            if (!this.m_pTimer.running){
                this.playffect();
            }
        }

        public static playffect(){
            if (this.m_pQueue.length == 0){
                return;
            }
            this.m_pTimer.start();
        }

        private static timerFunc(){
            if (this.m_pQueue.length == 0 && this.m_pTimer){
                this.m_pTimer.stop();
                this.m_pTimer = null;
                return;
            }
            var now_time = new Date().getTime();
            if (now_time < this.m_iLastTime + 100){
                return;
            }
            this.m_iLastTime = now_time;
            var label =<UIMsgAnimLabel> this.m_pQueue.shift();
            label.visible = true;
            UIMsgAnimManager.setRunAniMap(label);
            label.StartTween();
        }

        public static setRunAniMap(lbl:UIMsgAnimLabel){
            if (!this.m_pRunAniMap){
                this.m_pRunAniMap = {};
            }
            this.m_pRunAniMap[lbl.hashCode] = lbl;
        }

        public static removeRunAniMap(lbl:UIMsgAnimLabel){
            this.m_pRunAniMap[lbl.hashCode] = null;
            delete this.m_pRunAniMap[lbl.hashCode];
        }

    }
}
