enum WayTw {
    FROM_TOP,
    FROM_RIGHT,
    FROM_BOTTOM,
    FROM_LEFT,
    TO_TOP,
    TO_RIGHT,
    TO_BOTTOM,
    TO_LEFT,
    SCALE_BOUNCE_FADE_IN,
    SCALE_BOUNCE_FADE_OUT
}

class LibTw {

    public shineAlphaObj(obj:any, nTwTime:number=600, funCall?:Function, scopeCall?:any) {
        egret.Tween.removeTweens(obj);
        let nTimeOne :number = nTwTime/6;
        egret.Tween.get(obj)
            .to({alpha:0.3},nTimeOne).to({alpha:1},nTimeOne)
            .to({alpha:0.3},nTimeOne).to({alpha:1},nTimeOne)
            .to({alpha:0.3},nTimeOne).to({alpha:1},nTimeOne)
            .call(()=>{
                egret.Tween.removeTweens(obj);
                if(funCall)     funCall.call(scopeCall);
            });
    }
    public shineScaleObj(obj:any, nTwTime:number=600, nOffsetScale :number=0.2, funCall?:Function,scopeCall?:any) {
        var nScaleTarget :number = 1 - nOffsetScale;
        egret.Tween.removeTweens(obj);
        let nTimeOne :number = nTwTime/6;
        egret.Tween.get(obj)
            .to({scaleX:nScaleTarget, scaleY:nScaleTarget},nTimeOne).to({scaleX:1, scaleY:1},nTimeOne)
            .to({scaleX:nScaleTarget, scaleY:nScaleTarget},nTimeOne).to({scaleX:1, scaleY:1},nTimeOne)
            .to({scaleX:nScaleTarget, scaleY:nScaleTarget},nTimeOne).to({scaleX:1, scaleY:1},nTimeOne)
            .call(()=>{
                egret.Tween.removeTweens(obj);
                if(funCall)     funCall.call(scopeCall);
            });
    }
    /**  */
    public twShakeObj(obj:egret.DisplayObject, nOffsetPos :number = 10, funCall?:Function,scopeCall?:any) {
        var xyObj = {x:obj.x, y:obj.y};
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj)
            .to({x:xyObj.x-nOffsetPos, y:xyObj.y+nOffsetPos},50).to({x:xyObj.x+nOffsetPos, y:xyObj.y-nOffsetPos},50)
            .to({x:xyObj.x-nOffsetPos, y:xyObj.y+nOffsetPos},50).to({x:xyObj.x, y:xyObj.y},50)
            .to({x:xyObj.x-nOffsetPos, y:xyObj.y+nOffsetPos},50).to({x:xyObj.x+nOffsetPos, y:xyObj.y-nOffsetPos},50)
            .to({x:xyObj.x-nOffsetPos, y:xyObj.y+nOffsetPos},50).to({x:xyObj.x, y:xyObj.y},50)
            .call(()=>{
                egret.Tween.removeTweens(obj);
                //egret.setTimeout(()=>{utils.setProps(obj,{x:obj.x, y:obj.y});}, this, 200);// 震动屏幕时有时位置偏移
                if(funCall)     funCall.call(scopeCall);
            });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 跳进舞台与跳出舞台
    
    public twBounceFadeIn(panel:any, callback:Function) {
        let scale: number = panel.scaleX;
        egret.Tween.get(panel).to({ scaleX: 1.05 * scale, scaleY: 1.05 * scale }, 50)
            .to({ scaleX: scale, scaleY: scale }, 150)
            // .to({ alpha: 0.01 }, 180)
            .call(function () {
                if (callback) callback();
                egret.Tween.removeTweens(panel);
            });
    }
    public twBounceFadeOut(panel:any, callback:Function) {
        let scale: number = panel.scaleX;
        egret.Tween.get(panel).to({ scaleX: 1.05 * scale, scaleY: 1.05 * scale }, 50)
            .to({ scaleX: scale, scaleY: scale }, 150)
            .to({ alpha: 0.01 }, 180)
            .call(function () {
                if (callback) callback();
                egret.Tween.removeTweens(panel);
            });
    }
    /** 从舞台上面掉下来 */
    public twFromStageTop(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any) {
        var nYObj :number = obj.y;
        var ptLocal :egret.Point = obj.parent.globalToLocal(0, 0);
        obj.y = ptLocal.y - (obj.height - obj.anchorOffsetY);
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({y:nYObj}, nTwTime, bHasEase ? egret.Ease.bounceOut : null).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall){
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
            
        },this);
        obj.visible = true;
    }
    /** 跳到舞台上边 */
    public twToStageTop(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any){
        var nYObj :number = obj.y;
        var ptLocal :egret.Point = obj.parent.globalToLocal(0, 0);
        var nYTarget :number = ptLocal.y - (obj.height - obj.anchorOffsetY);
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({y:nYTarget}, nTwTime, bHasEase ? egret.Ease.bounceIn : null).set({visible:false, y:nYObj}).call(()=>{//visible:false,
            egret.Tween.removeTweens(obj);
            if(funCall) {
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
        },this);
    }
    /** 从舞台下面升上来 */
    public twFromStageBtm(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any){
        var nYObj :number = obj.y;
        var ptLocal :egret.Point = obj.parent.globalToLocal(0, obj.parent.stage.stageHeight);
        obj.y = ptLocal.y+obj.anchorOffsetY;
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({y:nYObj}, nTwTime, bHasEase ? egret.Ease.bounceOut : null).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall) {
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
        },this);
        obj.visible = true;
    }
    /** 跳到舞台下边 */
    public twToStageBtm(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any){
        var nYObj :number = obj.y;
        var ptLocal :egret.Point = obj.parent.globalToLocal(0, obj.parent.stage.stageHeight);
        var nYTarget = ptLocal.y+obj.anchorOffsetY;
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({y:nYTarget}, nTwTime, bHasEase ? egret.Ease.bounceIn : null).set({visible:false, y:nYObj}).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall){
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
            
        },this);
    }
    /** 从舞台左边过来 */
    public twFromLeftToTarget(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any){
        var nXObj :number = obj.x;
        var ptLocal :egret.Point = obj.parent.globalToLocal(0,0);
        obj.x = ptLocal.x - (obj.width - obj.anchorOffsetX);
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({x:nXObj}, nTwTime, bHasEase ? egret.Ease.bounceOut : null).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall){
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
            
        },this);
        obj.visible = true;
    }
    /** 跳到舞台右边 */
    public twToStageRight(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any){
        var nXObj :number = obj.x;
        var ptLocal :egret.Point = obj.parent.globalToLocal(obj.stage.stageWidth, 0);
        var nXTarget = ptLocal.x - obj.anchorOffsetX;// + (obj.width - obj.anchorOffsetX); 
        // console.log(nXObj, ptLocal, nXTarget, obj.stage.stageWidth, AGame.R.app.stageWidth)
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({x:nXTarget}, nTwTime, bHasEase ? egret.Ease.bounceIn : null).set({visible:false, x:nXObj}).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall){
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
            
        },this);
    }
    /** 从舞台右边过来 */
    public twFromRightToTarget(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function, scopeCall?:any){
        var nXObj :number = obj.x;
        var ptLocal :egret.Point = obj.parent.globalToLocal(obj.stage.stageWidth,0);
        obj.x = ptLocal.x + obj.anchorOffsetX;
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({x:nXObj}, nTwTime, bHasEase ? egret.Ease.bounceOut : null).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall){
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
            
        },this);
        
        obj.visible = true;
    }
    /** 跳到舞台左边 */
    public twToStageLeft(obj:egret.DisplayObject, nTwTime:number=300, bHasEase:boolean=true, funCall?:Function,scopeCall?:any){
        var nXObj :number = obj.x;
        var ptLocal :egret.Point = obj.parent.globalToLocal(0, 0);
        var nXTarget = ptLocal.x - (obj.width - obj.anchorOffsetX);
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({x:nXTarget}, nTwTime, bHasEase ? egret.Ease.bounceIn : null).set({visible:false, x:nXObj}).call(()=>{
            egret.Tween.removeTweens(obj);
            if(funCall){
                if(scopeCall)   funCall.call(scopeCall);
                else    funCall();
            }
            
        },this);
    }

    // 跳进舞台与跳出舞台
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /** 往右上角振动的动画 */
    public twShakeObjToRightUp(obj:egret.DisplayObject,funCall?:Function,scopeCall?:any){
        var nOffsetPos :number = 10;
        var xyObj = {x:obj.x, y:obj.y};
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj)
            .to({x:xyObj.x-nOffsetPos, y:xyObj.y+nOffsetPos},50).to({x:xyObj.x+nOffsetPos, y:xyObj.y-nOffsetPos},50)
            .to({x:xyObj.x, y:xyObj.y},50/2)
            .call(()=>{
                egret.Tween.removeTweens(obj);
                if(funCall)     funCall.call(scopeCall);
            });
    }
    /** 往左下角振动的动画 */
    public twShakeObjToLeftBtm(obj:egret.DisplayObject,funCall?:Function,scopeCall?:any){
        var nOffsetPos :number = 10;
        var xyObj = {x:obj.x, y:obj.y};
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj)
            .to({x:xyObj.x+nOffsetPos, y:xyObj.y-nOffsetPos},50).to({x:xyObj.x-nOffsetPos, y:xyObj.y+nOffsetPos},50)
            .to({x:xyObj.x, y:xyObj.y},50/2)
            .call(()=>{
                egret.Tween.removeTweens(obj);
                if(funCall)     funCall.call(scopeCall);
            });
    }

    private static instance:LibTw;
    static get inst():LibTw{
        if(!this.instance)  this.instance = new LibTw;
        return this.instance;
    }
}