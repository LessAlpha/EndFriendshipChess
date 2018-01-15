
enum FrameAnimNumType {num,string};

module com_main {
    /**
     *
     * @author
     *
     */
    export class FrameAnim {
        public framesToHold: number = 3;
        public frameToCenter: string = '';
        public frameNumType:number = 0;  // 0. 1,2,3, 1. 01,02,03

        public isFrameFinished: boolean = false;
        private m_bIsReverse:boolean = false; //是否倒序

        private m_pNextFrameIndex: number = 0;
        private m_pFrameIndex: number = 0;
        private m_pActionName: string = '';
        private m_pNumFrames: number = 0;

        public get AcitonName(){
            return this.m_pActionName;
        }

        public constructor(actionName?: string) {
            this.actionName = actionName;
        }

        public set numFrames(len: number) {
            this.m_pNumFrames = len;
        }

        public get numFrames(): number {
            return this.m_pNumFrames;
        }

        public set isReverse(bool){
            this.m_bIsReverse = bool;
            this.resetFrameIndex();
        }

        // public set(key,texture: any): void {
        //     if ( ! this.m_pAnimations ) {
        //         return;
        //     }
        //     this.m_pAnimations[key] = texture;
        //     this.numFrames = Utils.objectLenght(this.m_pAnimations);
        // }

        // public set animations(anim: any) {
        //     this.m_pAnimations = anim;
        //     this.numFrames = Utils.objectLenght(anim);
        // }

        public set actionName(name: string) {
            this.m_pActionName = name;
        }

        public nextFrame(): void {
            ++this.m_pNextFrameIndex;
            if(this.m_pNextFrameIndex >= this.framesToHold) {
                this.m_pNextFrameIndex = 0;
                if (this.m_bIsReverse){
                    --this.m_pFrameIndex;
                    this.isFrameFinished = this.m_pFrameIndex < 0;
                    if(this.isFrameFinished) {
                        this.m_pFrameIndex = this.m_pNumFrames - 1;
                    }
                }else{
                    ++this.m_pFrameIndex;
                    
                    this.isFrameFinished = this.m_pFrameIndex >= this.numFrames;
                    if(this.isFrameFinished) {
                        this.m_pFrameIndex = 0;
                    }
                }
            }
        }

        public resetFrameIndex(){
            if (this.m_bIsReverse){
                this.m_pFrameIndex = this.m_pNumFrames - 1;
            }else{
                this.m_pFrameIndex = 0;
            }
        }


        public getLastFrame(){
            var last_index = this.m_bIsReverse ? 0 : this.m_pNumFrames - 1;
            var name;
            var suffix = "_png";
            if(this.frameNumType == 0){
                name = this.m_pActionName + '_' + this.frameToCenter + last_index;
            }else{
                name = this.m_pActionName + '_' + this.num2Zero(last_index);
            }
            return FrameManager.getFrame(this.m_pActionName,name + suffix);
        }

        public getFrame(): any {
            var name;
            var suffix = "_png";
            if(this.frameNumType == 0){
                name = this.m_pActionName + '_' + this.frameToCenter + this.m_pFrameIndex;
            }else{
                name = this.m_pActionName + '_' + this.num2Zero(this.m_pFrameIndex);
            }

            return FrameManager.getFrame(this.m_pActionName,name + suffix);
        }

        private num2Zero(index):string{
            var str = index < 10 ? "0" + index : "" + index;
            return str;
        }


        public clear(): void {
            FrameManager.removeFrames(this.m_pActionName);
        }

        public static createAnim(framesToHold: number = 3,actionName?: string,frameNumType: number = 0): FrameAnim {
            var action: FrameAnim = new FrameAnim(actionName);
            action.framesToHold = framesToHold;
            action.frameNumType = frameNumType;
            return action;
        }
    }

    export class SpriteAnimation extends Animate {
        public isRepeat: boolean = false;
        private m_pNumComplete: number;
        private m_pLoaderNum: number;
        private m_pLoaded: boolean = false;
        private m_pIsStart: boolean = false;
        private m_pFrameAnim: FrameAnim;

        private m_pActionBitmaps: Array<EImageSprite>;
        private m_pThisArg: any = null;
        private m_pCallback: Function = null;
        private m_pLoaderComplete: Function = null;
        private m_pLoaderCompleteThis: any = null;



        public constructor(targets: Array<EImageSprite>,actionName?: string,framesToHold: number = 3,frameNumType:number = 0) {
            super();
            this.isLife = false;
            this.m_pActionBitmaps = targets;
            this.m_pFrameAnim = FrameAnim.createAnim(framesToHold,actionName,frameNumType);
        }

        public set sprites(targets){
            this.m_pActionBitmaps = targets;
        }

        public get anim(): FrameAnim {
            return this.m_pFrameAnim;
        }

        public set isReverse(bool:boolean){
            this.m_pFrameAnim.isReverse = bool;
        }

        public set framesToHold(framesToHold){
            this.m_pFrameAnim.framesToHold = framesToHold;
        }

        public loadFiles(files: any[],callback?: Function, callbackThis?: any): void {

            this.m_pNumComplete = 0;
            this.m_pLoaderNum = files.length;
            this.m_pLoaderComplete = callback;
            this.m_pLoaderCompleteThis = callbackThis;

            if (FrameManager.isCheck(this.m_pFrameAnim.AcitonName)){
                if(this.m_pIsStart) this.isLife = true;
                this.m_pFrameAnim.numFrames = FrameManager.numFrames(this.m_pFrameAnim.AcitonName);
                if(this.m_pLoaderCompleteThis){
                    this.m_pLoaderComplete.call(this.m_pLoaderCompleteThis);
                }
            }else{
                for(var i: number = 0;i < this.m_pLoaderNum;i++) {
                    this.loadFile(files[i],RES.ResourceItem.TYPE_SHEET);
                }
            }
        }

        private loadFile(url: string,type?: string): void {
            RES.getResByUrl(url,this.onFileLoadComplete,this,type);
        }


        protected onFileLoadComplete(textureMap: any): void {
            var texture: any = textureMap['_textureMap'];
            ++this.m_pNumComplete;

            FrameManager.setFrames(this.m_pFrameAnim.AcitonName,texture,this.m_pNumComplete == this.m_pLoaderNum)
            if(this.m_pNumComplete == this.m_pLoaderNum) {
                this.m_pLoaded = true;
                if(this.m_pIsStart) this.isLife = true;
                this.m_pFrameAnim.numFrames = FrameManager.numFrames(this.m_pFrameAnim.AcitonName);
                if(this.m_pLoaderComplete) {
                    if(this.m_pLoaderCompleteThis){
                        this.m_pLoaderComplete.call(this.m_pLoaderCompleteThis, textureMap);
                    } else {
                        this.m_pLoaderComplete(textureMap);
                    }
                }
            }
        }


        public runAction(callback?: Function,thisArg?: any,needReset:boolean=true): void {
            this.m_pCallback = callback;
            this.m_pThisArg = thisArg;

            this.m_pIsStart = true;
            if(FrameManager.isCheck(this.m_pFrameAnim.AcitonName)){
                if(needReset)
                {
                    this.m_pFrameAnim.isFrameFinished = false;
                    this.m_pFrameAnim.resetFrameIndex();
                }
                this.isLife = true;
            }
        }

        public stopAction() {
            this.isLife = false;
        }

        public removeAction(isClear = true) {
            this.stopAction();
            this.onDestroy();
            if (isClear) this.m_pFrameAnim.clear();
            this.m_pActionBitmaps = null;
            this.m_pThisArg = null;
            this.m_pCallback = null;
            this.m_pLoaderComplete = null;
            this.m_pLoaderCompleteThis = null;
            this.m_pFrameAnim = null;
        }

        public onEnterFrame(delta: number): void {
            this.m_pFrameAnim.nextFrame();

            if(this.m_pFrameAnim.isFrameFinished) {
                if(!this.isRepeat) {
                    this.stopAction();
                    if(this.m_pCallback){
                        this.m_pCallback.call(this.m_pThisArg);
                        this.m_pCallback = null;
                        this.m_pThisArg = null;
                        return;
                    }
                }
            }

            for (var i = 0; i < this.m_pActionBitmaps.length;i++){
                var sp = this.m_pActionBitmaps[i];
                var texture = this.m_pFrameAnim.getFrame();
                if (sp) sp.texture = texture;
            }

        }

    }
}
