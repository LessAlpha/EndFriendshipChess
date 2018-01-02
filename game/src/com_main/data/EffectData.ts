/**
 * Created on 2016/12/20.
 */
class EffectData{
    private static m_pEffConfig;

    public static initConfig(){
        this.m_pEffConfig = {};
        //this.m_pEffConfig[IETypes.EMap_Move] = this.createCfgItem();
        //this.m_pEffConfig[IETypes.EMap_BirdFly] = this.createCfgItem(3,1,true);
    }


    public static createCfgItem(fHao = 3,fileNum = 1,isRepeat = false){
        var item :any = {};
        item.fHold = fHao;
        item.fType = FrameAnimNumType.num;
        item.isRepeat = isRepeat;
        item.fileNum = fileNum;
        return item;
    }

    public static loadConfig(eff_type){
        return this.m_pEffConfig[eff_type];
    }
}
