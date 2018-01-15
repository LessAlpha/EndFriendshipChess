
module com_main {
    export class TipDuration extends eui.Component {

        static keyClass :string = 'com_main.TipDuration';
        private lbTip :eui.Label;
        constructor(){
            super();
            this.skinName = '<?xml version="1.0" encoding="utf-8"?><e:Skin class="TipDuration" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" width="464" height="36"><e:Image source="bg_scroll_text_png" /><e:Label id="lbTip" text="提示文字" textColor="0xD3A93C" horizontalCenter="0" verticalCenter="0" size="21" bold="true"/></e:Skin>';            
        }
        public showTip(strTip:string, nDuration:number) {
            this.lbTip.text = strTip;
            Utils.setProps(this,{x:(AGame.R.app.stageWidth-this.width)/2, y:AGame.R.app.stageHeight/2*0.4});
            AGame.R.app.topLevel.addChild(this);
            egret.Tween.get(this).to({y:this.y-20},500).wait(nDuration).call(this.remSelf, this);
        }
        private remSelf(){
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
            CachePool.reclaim(this);
        }

        public static popOne(strTip:string, nDuration:number=5000) {
            let one :TipDuration = CachePool.produce(TipDuration);
            one.showTip(strTip, nDuration);
        }

    }

}