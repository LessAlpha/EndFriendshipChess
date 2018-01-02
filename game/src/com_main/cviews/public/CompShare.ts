
module com_main {

    export class CompShare extends eui.Component {

        private mcHand :egret.MovieClip;
        constructor(){
            super();
            this.skinName = '<?xml version="1.0" encoding="utf-8"?><e:Skin class="CompShare" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" minWidth="903" minHeight="530"><e:Rect width="100%" height="100%" fillColor="0x000000"  fillAlpha="0.4"/></e:Skin>'
            this.width = AGame.R.app.stageWidth;
            this.height = AGame.R.app.stageHeight;
            AGame.R.notifyObserver(StartNav.ADD_TOP_BLOCK_REQUEST, true);
            AGame.ResUtils.loadGroups([["pop_share",0]], this.onResourceLoadComplete, ()=>{}, this);
            AGame.R.app.topLevel.addChild(this);
        }
        private onResourceLoadComplete(groupName:string):void {
            if (groupName != "pop_share")   return;
            AGame.R.notifyObserver(StartNav.ADD_TOP_BLOCK_REQUEST, false);
            var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes('hand_share_json'), RES.getRes('hand_share_png'));
            this.mcHand = new egret.MovieClip(mcDataFactory.generateMovieClipData("hand_share"));
            // Utils.setProps(this.mcHand,{rotation:-90, y:this.mcHand.height-25});
            Utils.setProps(this.mcHand,{x:this.width-120});
            this.addChild(this.mcHand);
            this.mcHand.once(egret.Event.COMPLETE, this.remSelf, this);
            this.mcHand.play(5);
        }

        private remSelf(){
            // this.mcHand.stop();
            this.mcHand = null;
            if(this.parent)    this.parent.removeChild(this);
        }

    }

}
