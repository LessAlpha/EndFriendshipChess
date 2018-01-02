/**
 * Created   on 2016/12/20.
 */

class EImageSprite extends egret.Bitmap {
    public eff_config;
    public EFF_NAME;
    public res_loaded;

    public constructor() {
        super();
        this.touchEnabled = false;
    }

    public set scale(scale){
        this.scaleX = scale;
        this.scaleY = scale;
    }
}

class ImageEffect {

    private static m_pAnimMap = {};

    public static load(eff_type:string,loader?: Function, loaderThis?: any){
        var sprite = new EImageSprite();
        var anim = ImageEffect.loadAni([sprite],eff_type,loader,loaderThis);
        this.m_pAnimMap[sprite.hashCode] = anim;
        sprite.visible = false;
        return sprite;
    }

    public static loadAni(sprites,eff_type:string,loader?: Function, loaderThis?: any){
        var eff_config = EffectData.loadConfig(eff_type);
        var anim = new com_main.SpriteAnimation(sprites,eff_type,eff_config.fHold,eff_config.fType);
        anim.isRepeat = eff_config.isRepeat;
        var paths = this.load_Common_files(eff_type,eff_config.fileNum);
        anim.loadFiles(paths,loader, loaderThis);
        return anim;
    }

    public static removeActions() {
        for (var key in this.m_pAnimMap){
            var anim = <com_main.SpriteAnimation>this.m_pAnimMap[key];
            anim.removeAction();
        }
        this.m_pAnimMap = null;
        this.m_pAnimMap = {};
    }

    public static removeAction(sprite: EImageSprite ,isClear = true) {
        if(sprite) {
            sprite.eff_config = null;
            var anim = <com_main.SpriteAnimation>this.m_pAnimMap[sprite.hashCode];
            if (anim){
                anim.removeAction(isClear);
            }
            anim = null;
            delete this.m_pAnimMap[sprite.hashCode];
            egret.Tween.removeTweens(sprite);
            if(sprite.parent) sprite.parent.removeChild(sprite);
            sprite = null;
        }

    }




    public static runAction(sprite: EImageSprite,callback?: Function,thisArg?: any,needReset:boolean=true) {
        sprite.visible = true;
        var anim = this.m_pAnimMap[sprite.hashCode];
        if(anim.anim)sprite.texture = anim.anim.getFrame();
        var showFunc = function() {
            sprite.visible = false;
            if(callback) callback.call(thisArg);
        }
        anim.runAction(showFunc,this,needReset);
    }

    public static stopAction(sprite: EImageSprite){
        sprite.visible = true;
        var anim = <com_main.SpriteAnimation> this.m_pAnimMap[sprite.hashCode];
        if(anim) {
            anim.stopAction();
        }else{
            egret.Tween.removeTweens(sprite);
            sprite.visible =false;
        }
    }

    private static load_Common_files(fileName,num) {
        var names = fileName.split('_');
        var paths = [];
        var src = "resource/assets/effects/" + names[0] + "/" + fileName + "/";
        if (num > 1){
            for (var i = 1; i <= num;i++){
                var path = src + fileName + "_" + i + ".json";
                paths.push(path);
            }
        }else{
            var path = src + fileName + ".json";
            paths.push(path);
        }
        return paths;
    }
}