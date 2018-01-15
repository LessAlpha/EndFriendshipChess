module com_main {
    export class SceneStart extends CView {

        // private progLoading :eui.ProgressBar;
        private imgBtnTouristLogin :eui.Image ;
        private imgBtnWxLogin :eui.Image;
        private imgBanner :eui.Image;
        private inpUserId :eui.EditableText;

        private isResourceLoadEnd :boolean = false;
        private isLogined :boolean = false;

        constructor() {
            super();
            this.initApp('scene_start/SceneStart.exml');
        }

        protected onCreate() {
            this.resize();
            //AGame.ServiceBuilder.registerProxy(AGame.CSocket.CONNECTED_LOGIN, this.connectServerRole, this);
            EventManager.addTouchScaleListener(this.imgBtnTouristLogin, this, this.touchLogin);
            // EventManager.addTouchScaleListener(this.imgBtnWxLogin, this, this.touchLogin);
            this.modifyUserId(LocalData.getData('USER_ID')); // GameConst.AccountInfo.USER_ID);
            Utils.setProps(this.imgBtnWxLogin,{touchEnabled:false, alpha:0.7});
            RES.loadGroup('index');
            // this.drawGrids(3, 10);
            this.drawGrids(4, 7);
        }
        private drawGrids(nSumColor:number, nSumGridOneColor: number){
            let nSumGrids: number = nSumColor * nSumGridOneColor,
                nDegreeGap: number = 360 / nSumGrids;
            var nDegreeGapLine: number = 360/nSumColor;
            for(let j:number=0; j<nSumColor; j++){
                var shp: egret.Shape = new egret.Shape;
                shp.graphics.lineStyle(5, 0xaaaaaa);
                shp.x = this.stage.stageWidth/2;
                shp.y = this.stage.stageHeight/2;
                shp.graphics.moveTo(0, 0);
                shp.graphics.lineTo(318, 0);
                shp.rotation = 90 + j * nDegreeGapLine;
                this.addChild(shp);
            }
            for(let i=0; i<nSumGrids; i++ ) {
                var imgColor: eui.Image = new eui.Image("g1_"+(i%nSumColor+1));
                imgColor.width = imgColor.height = 40;
                imgColor.anchorOffsetX = 320;
                imgColor.anchorOffsetY = imgColor.height/2;
                imgColor.x = this.stage.stageWidth/2;
                imgColor.y = this.stage.stageHeight/2;
                imgColor.rotation = i * nDegreeGap + (nSumColor==3 ? nDegreeGap/2 : 0);
                this.addChild(imgColor);
            }
            this.drawInnerGridsAndStaight(nSumColor);

        }
        private drawInnerGridsAndStaight(nSumColor:number){
            if(nSumColor==3){

                var shp0: egret.Shape = new egret.Shape;
                shp0.graphics.lineStyle(5, 0xaaaaaa);
                shp0.x = this.stage.stageWidth/2;
                shp0.y = this.stage.stageHeight/2 + 240;
                shp0.graphics.moveTo(0, 0);
                shp0.graphics.lineTo(324, 0);
                shp0.anchorOffsetX = shp0.width/2;
                this.addChild(shp0);

                var shp0: egret.Shape = new egret.Shape;
                shp0.graphics.lineStyle(5, 0xaaaaaa);
                shp0.x = this.stage.stageWidth/2 - 208;
                shp0.y = this.stage.stageHeight/2 - 115;
                shp0.rotation = -60;
                shp0.graphics.moveTo(0, 0);
                shp0.graphics.lineTo(324, 0);
                shp0.anchorOffsetX = shp0.width/2;
                this.addChild(shp0);

                var shp0: egret.Shape = new egret.Shape;
                shp0.graphics.lineStyle(5, 0xaaaaaa);
                shp0.x = this.stage.stageWidth/2 + 208;
                shp0.y = this.stage.stageHeight/2 - 115;
                shp0.rotation = 60;
                shp0.graphics.moveTo(0, 0);
                shp0.graphics.lineTo(324, 0);
                shp0.anchorOffsetX = shp0.width/2;
                this.addChild(shp0);
                
                for(let i=0; i<nSumColor; i++ ) {
                    for(let l:number=0; l<4; l++){
                        var imgColor: eui.Image = new eui.Image("g1_"+(i%nSumColor+1));
                        imgColor.width = imgColor.height = 40;
                        imgColor.anchorOffsetX = 320 - (l+1) * 62;
                        imgColor.anchorOffsetY = imgColor.height/2;
                        imgColor.x = this.stage.stageWidth/2;
                        imgColor.y = this.stage.stageHeight/2;
                        imgColor.rotation = i * 360 / nSumColor + 150;
                        this.addChild(imgColor);
                    }
                }
            } else {
                
                for(let i=0; i<nSumColor; i++ ) {
                    for(let l:number=0; l<4; l++){
                        var imgColor: eui.Image = new eui.Image("g1_"+(i%nSumColor+1));
                        imgColor.width = imgColor.height = 40;
                        imgColor.anchorOffsetX = 320 - (l+1) * 62;
                        imgColor.anchorOffsetY = imgColor.height/2;
                        imgColor.x = this.stage.stageWidth/2;
                        imgColor.y = this.stage.stageHeight/2;
                        imgColor.rotation = i * 360 / (nSumColor);
                        this.addChild(imgColor);
                    }
                }

            }
        }

        public resize() {
            this.width = AGame.R.app.stageWidth;
            Utils.setProps(this.imgBanner,{x:this.width/2},[0.5,0.5]);
            Utils.setProps(this.imgBtnTouristLogin,{x:this.width/2},[0.5,0.5]);
            Utils.setProps(this.imgBtnWxLogin,{x:this.width/2},[0.5,0.5]);
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////

        private touchLogin() {
            this.modifyUserId(this.inpUserId.text);
            this.sendLogin();
        }

        private sendLogin() {

            var cmd = Number(CMDS.LOGIN);
            var obj = AGame.ServiceBuilder.newClazz(cmd);
            obj.uId = AccountInfo.USER_ID;
            obj.nick = AccountInfo.NICK;
            obj.photo = "";
            obj.psw = "";
            AGame.ServiceBuilder.sendMessage(cmd, obj, this.receiveLogin, this);
            // var wsGetIpGame :AGame.SocketGetGameIp = new AGame.SocketGetGameIp();
            // wsGetIpGame.setConnectInfo(GameConst.IpRequestGame, GameConst.PortRequestGame);
            // wsGetIpGame.connect(this.logined, this);
        }

        
        private receiveLogin(notif:AGame.Notification) {
            LocalData.setData(GameConst.LocalDataKey.USER_ID, this.inpUserId.text);
            AGame.R.notifyObserver(StartNav.ADD_TOP_BLOCK_REQUEST, false);
            AGame.R.notifyObserver(IndexNav.ADD_INDEX);
        }

        private modifyUserId(strUserId:string) {// .AccountInfo USER_ID第一位数字不能为0 !
            let strId :string = '';
            if(strUserId=='') {
                for(let i:number=0; i<6; i++) {
                    strId += Math.ceil(9*Math.random());
                }
            } else {
                strId = strUserId;
            }
            AccountInfo.USER_ID = this.inpUserId.text = strId;
            AccountInfo.NICK = '游客' + strId;
        }

        // private onResourceLoadComplete():void {
        //     this.isResourceLoadEnd = true;
        //     this.toIndex();
        // }
        // private bHasInRoom :boolean;
        // private logined(body: any) {
        //     if(body.RES!=0) return;
        //     var strAd :string = body.AD;
        //     GameConst.IpGame = strAd.substring(0,strAd.indexOf(':'));
        //     GameConst.PortGame = Number(strAd.substr(strAd.indexOf(':')+1));
        //     AGame.CSocket.getInstance().setConnectInfo(GameConst.IpGame, GameConst.PortGame);
        //     AGame.CSocket.getInstance().connect();
        // }

        // private connectServerRole(notif:AGame.Notification) {
        //     let infoReceive:any = notif.getBody();
        //     this.isLogined = true;
        //     this.toIndex();
        // }
    }
}