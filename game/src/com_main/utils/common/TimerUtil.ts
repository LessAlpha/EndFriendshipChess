
class TimerUtils extends egret.Timer {

    static keyClass :string = 'TimerUtils';
    private funTimer:Function;
    private funTimerComplete:Function;
    private contex:any;
    private objDataTimer:any;
    

    constructor(){
        super(0, 0);
    }
    public startTime(nTimeDelay, nRepeatTimes:number, funTimer:Function, contex:any, funTimerComplete?:Function) {
        this.delay = nTimeDelay;
        this.repeatCount = nRepeatTimes;
        this.funTimer = funTimer;
        this.funTimerComplete = funTimerComplete;
        this.contex = contex;
        this.reset();
        this.addEventListener(egret.TimerEvent.TIMER, this.timer, this);
        this.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
        this.start();
    }
    

    private timer(){
        if(this.funTimer)   this.funTimer.call(this.contex);
    }
    private timerComplete() {
        if(this.funTimerComplete)   this.funTimerComplete.call(this.contex);
        this.removeEventListener(egret.TimerEvent.TIMER, this.funTimer, this.contex);
        this.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
        this.funTimer = this.funTimerComplete = this.contex = this.objDataTimer = null;
        com_main.CachePool.reclaim(this);
    }

    static startTimer(nTimeDelay:number, nRepeatTimes:number, funTimer:Function, contex:any, funTimerComplete?:Function){
        let t :TimerUtils = com_main.CachePool.produce(TimerUtils);
        t.startTime(nTimeDelay, nRepeatTimes, funTimer, contex, funTimerComplete);
    }
}