
class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        // console.info('调试提示：改变端口可在链接中添加port参数，如设置端口30100可添加“?port=30100”，默认31100')
        egret.registerImplementation("eui.IAssetAdapter",new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        com_main.ResLoad.getInst().loadGroupWithCall(['start'], this.onResourceLoadComplete, this, 'com_main.LoadComponent');
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        this.stage.addEventListener(egret.Event.RESIZE,this.stageResize,this);
    }
    private isThemeLoadEnd: boolean = false;
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    private onResourceLoadComplete():void {
        this.isResourceLoadEnd = true;
        this.createScene();
        AGame.HttpClient.serverUrl = RES.getRes('global').urlHttp;
        AGame.HttpClient.get((data)=>{
            AGame.info('/', data);
            RES.getRes('global').urlSocket = data.urlSocket;
            AGame.CSocket.getInstance().connect(data.urlSocket);
        }, this, '');
    }

    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd) {
            com_main.Bootstrap.startup(this);
            AGame.R.notifyObserver(StartNav.ADD_START);
        }
    }

    // 舞台尺寸发生变化的响应事件 
    private stageResize(evt:egret.Event) {
        com_main.SceneManager.stageSizeChanged();
        com_main.UpManager.stageSizeChanged();
    }
    
}
