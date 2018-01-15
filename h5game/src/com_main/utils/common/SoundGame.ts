/**
 * 游戏音效的播放控制
 * Created by LazyLaing on 2017/5/2
 */

class SoundGame extends AGame.EventHandler {

    private arrSound :egret.Sound[];
    private arrSoundChannel :egret.SoundChannel[];

    constructor() {
        super();
        this.initLsMusic();
        this.arrCmdEvents = [
            SoundNav.PLAY, SoundNav.STOP
        ];        
        this.register();
    }
    
    public execute(notification: AGame.INotification) {
        var name = notification.getName();
        var body = notification.getBody();
        let nameMusic :SoundEnum = body[0];
        switch(name) {
            case SoundNav.PLAY:
                this.playSound(nameMusic);
                break;
            case SoundNav.STOP:
                this.stopSound(nameMusic);
                break;
        }
    }
    public onDestroy(){
        this.arrSound = null;
        this.arrSoundChannel = null;
        this.unRegister();
    }


    private playSound(nameMusic :SoundEnum) {

        let sound :egret.Sound = this.arrSound[nameMusic];
        if(!sound) {
            console.warn('no sound - play', nameMusic);
            return;
        }
        let soundChannel = this.arrSoundChannel[nameMusic];
        if(soundChannel && soundChannel.position!=0 )   return;
        soundChannel = sound.play(0,1);
        this.arrSoundChannel[nameMusic] = soundChannel;
    }

    private stopSound(nameMusic :SoundEnum) {
        let sound :egret.Sound = this.arrSound[nameMusic];
        if(!sound) {
            console.warn('no sound - stop', nameMusic);
            return;
        }
        let soundChannel = this.arrSoundChannel[nameMusic];
        if(soundChannel && soundChannel.position!=0)    soundChannel.stop();
    }

    private initLsMusic() {
        let arrSound :egret.Sound[] = [];
        // let nSum :number = SoundEnum.TIMEOUT_NEARLY;
        // for(let i:number=0; i<=nSum; i++) {
        //     var sound :egret.Sound = RES.getRes('m'+i);
        //     arrSound.push(sound);
        // }
        this.arrSound = arrSound;
        this.arrSoundChannel = [];
    }

}

