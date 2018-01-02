
module com_main {

    export class CompUIBlockRequest extends LoadComponent{

        // public imgRound :eui.Image ; 
        private rectShadow :eui.Rect;
        private lbInfo :eui.Label;
        private mcRotate :egret.MovieClip;

        constructor(notifyMethod:Function, notifyContext:any){
            super(notifyMethod, notifyContext);
            this.skinName = '<?xml version="1.0" encoding="utf-8"?><e:Skin class="CompUIBlockRequest" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" width="720" height="1250"><e:Label id="lbInfo" text="" horizontalCenter="0" verticalCenter="150" bold="true"/></e:Skin>';
            this.rectShadow = new eui.Rect(AGame.R.app.stageWidth, AGame.R.app.stageHeight);
            this.rectShadow.fillAlpha = 0.2;
            this.rectShadow.fillColor = 0x000000;
            this.addChild(this.rectShadow);
            var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes('comp_top_load_json'), RES.getRes('comp_top_load_png'));
            this.mcRotate = new egret.MovieClip(mcDataFactory.generateMovieClipData("comp_top_load"));
            this.addChild(this.mcRotate);
            this.height = AGame.R.app.stageHeight;
        }

        public resize() {
            this.width = this.rectShadow.width = AGame.R.app.stageWidth;
            Utils.setProps(this.mcRotate,{x:AGame.R.app.stageWidth/2+10, y:AGame.R.app.stageHeight/2+80});
        }
        public addSelf() {
            this.resize();
            this.ctrlMc(true);
            AGame.R.app.topLevel.addChild(this);
        }
        public loading(nLoaded:number, nTotal:number) {
            var percentLoaded :number = Math.floor(nLoaded/nTotal*100);
            this.setLbInfo('加载资源中 '+ percentLoaded + '% ...');
        }

        public onDestroy(){
            super.onDestroy();
            this.ctrlMc(false);
            this.mcRotate = null;
        }

        public ctrlMc(bPlay:boolean){
            if(bPlay)   this.mcRotate.gotoAndPlay(0,-1);
            else    this.mcRotate.stop();
        }
        public setLbInfo(strInfo :string) {
            // var percentLoaded :number = Math.floor(current/total*100);
            this.lbInfo.text = '' + strInfo;
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        private static inst :CompUIBlockRequest;
        static toggleShow(bShow:boolean) {
            if(!this.inst)  this.inst = new CompUIBlockRequest(null, null);
            if(!this.inst.visible && !bShow)    return;
            if(bShow) {
                this.inst.addSelf();
            } else {
                this.inst.ctrlMc(false);
                if(this.inst.parent)    this.inst.parent.removeChild(this.inst);
            }
        }

    }


}
