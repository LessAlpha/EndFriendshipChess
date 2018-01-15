module com_main {
    /**
     *
     * @author
     *
     */
    export class CustomEvent{
        public constructor() {
        }
        public isTapBegin:boolean = false;
        public target: egret.EventDispatcher = null;
        public type:string = "";
        public listener: Function = null;
        public thisObject: egret.DisplayObject = null;
        public argObject:Object = null;
        public useCapture: boolean = false;
        public isStopBubble: boolean = false;

        public static create(target: egret.EventDispatcher, type:string, listener: Function,
                             thisObject: egret.DisplayObject,argObject?: Object,isStopBubble?:boolean,useCapture?:boolean):CustomEvent{
            var evt:CustomEvent = new CustomEvent();
            evt.target = target;
            evt.type = type;
            evt.listener = listener;
            evt.thisObject = thisObject;
            evt.argObject = argObject;
            evt.isStopBubble = isStopBubble;
            evt.useCapture = useCapture;

            return evt;
        }

        public dispose():void{
            this.target = null;
            this.listener = null;
            this.thisObject = null;
            this.argObject = null;
        }
    }

    export class EventManager{
        private static _instance: EventManager;
        private m_pEventLists:any = {};
        private m_pNotifies:any = {};

        public static getInstance() {
            if(!EventManager._instance) {
                EventManager._instance = new EventManager();
            }
            return EventManager._instance;
        }

        protected listener(event: egret.Event):void{
            var object:egret.DisplayObject = <egret.DisplayObject>event.currentTarget;

            if(this.m_pEventLists[object.hashCode] && this.m_pEventLists[object.hashCode][event.type]){
                var ce: CustomEvent = <CustomEvent>this.m_pEventLists[object.hashCode][event.type];
                ce.listener.call(ce.thisObject, event);
                //if(event.type === egret.TouchEvent.TOUCH_TAP){
                    //Sound.play("BtnClick");
                    //console.error("BtnClick  listener")
                //}
            }
            // console.warn('2 - ',this.m_pEventLists,this.m_pEventLists.length,this.m_pEventLists[object.hashCode]);//[object.hashCode] , this.m_pEventLists[object.hashCode][event.type])
        }

        private pushEventList(object:any, type:string,listener: Function, thisObject: any,
                              argObject?:any,isStopBubble?:boolean,useCapture?:boolean):void{
            if(!this.m_pEventLists[object.hashCode]) this.m_pEventLists[object.hashCode] = {};
            this.m_pEventLists[object.hashCode][type] = CustomEvent.create(object, type, listener,thisObject,argObject, isStopBubble, useCapture);
            // console.warn('0 - ',this.m_pEventLists,this.m_pEventLists.length, this.m_pEventLists[object.hashCode])
        }

        private addNotify(object: any,type: string, listener: Function, thisObject: any,
                          useCapture?: boolean, priority?: number): void {
            object.addEventListener(type, listener, thisObject, useCapture, priority);

            if(!this.m_pNotifies[object.hashCode]) this.m_pNotifies[object.hashCode] = [];
            this.m_pNotifies[object.hashCode].push(CustomEvent.create(object, type, listener,thisObject, null, useCapture));
        }

        public addEventListener(object: egret.EventDispatcher,type: string,thisObject: any,listener: Function,
                                useCapture?: boolean,priority?: number,argObject?: Object): void {
            this.addNotify(object, type, this.listener, this, useCapture, priority);
            this.pushEventList(object, type, listener, thisObject, argObject, false, useCapture);
        }

        private doAnimScale(object: any,cevt: CustomEvent):void{
            var tw = TweenAnim.get(object);
            var scale = cevt.argObject ? cevt.argObject : 1;
            var bigScale = Number(scale) * 1.1;

            tw.to({ scaleX: bigScale,scaleY: bigScale },100).to({ scaleX: scale,scaleY: scale },100)
                .call(function(cevt:CustomEvent){
                    cevt.isTapBegin = false;
                    TweenAnim.removeTweens(object);
                }, this, [cevt]);
        }

        protected onScaleTouch(event: egret.Event) {
            var object: egret.DisplayObject = <egret.DisplayObject>event.currentTarget;
            var eventList: any = this.m_pEventLists[object.hashCode];
            //if(!eventList || !eventList[event.type])    return;
            if(eventList && eventList[event.type]) {
                var cevt: CustomEvent = <CustomEvent>eventList[event.type];
                if (cevt.isStopBubble){
                    event.stopImmediatePropagation();
                }

                var tapBeginEvent: CustomEvent = <CustomEvent>eventList[egret.TouchEvent.TOUCH_BEGIN];
                switch(event.type) {
                    case egret.TouchEvent.TOUCH_BEGIN:
                        var tw = TweenAnim.get(event.currentTarget);
                        cevt.isTapBegin = true;
                        tw.to(cevt.argObject, 100);
                        break;
                    case egret.TouchEvent.TOUCH_MOVE:
                        var scale = cevt.argObject ? cevt.argObject : 1;
                        if(!cevt || cevt.isTapBegin || !tapBeginEvent.isTapBegin || event.currentTarget.scaleX == scale)return;
                        cevt.isTapBegin = true;
                        this.doAnimScale(event.currentTarget,cevt);
                        tapBeginEvent.isTapBegin = false;
                        break;
                    case egret.TouchEvent.TOUCH_END:
                    case egret.TouchEvent.TOUCH_RELEASE_OUTSIDE:
                        var scale = cevt.argObject ? cevt.argObject : 1;
                        if(!cevt || cevt.isTapBegin || !tapBeginEvent.isTapBegin || event.currentTarget.scaleX == scale)return;
                        cevt.isTapBegin = true;
                        this.doAnimScale(event.currentTarget,cevt);
                        tapBeginEvent.isTapBegin = false;
                        if(cevt.listener && cevt.thisObject) {
                            cevt.listener.call(cevt.thisObject,event);
                        }
                        break;
                }
            }
        }
        private posAnchorCenter(object:egret.DisplayObject){
            if(object.anchorOffsetX!=0) return;
            object.anchorOffsetX = object.width/2;
            object.anchorOffsetY = object.height/2;
            object.x += object.anchorOffsetX;
            object.y += object.anchorOffsetY;
        }

        public addItemRenderAnim(object: any,scale: number = 0.95):void{
            this.addScaleListener(object, scale, null, null, 1, true);
        }


        public addScaleListener(object: any,scale: number = 0.95, thisObject?: any,listener?: Function, defaultScale?:number, isMoveEvent?:boolean,isStopBubble?:boolean) {
            this.addNotify(object, egret.TouchEvent.TOUCH_BEGIN, this.onScaleTouch, this);
            this.addNotify(object, egret.TouchEvent.TOUCH_END, this.onScaleTouch, this);
            if(isMoveEvent) this.addNotify(object, egret.TouchEvent.TOUCH_MOVE, this.onScaleTouch, this);
            this.addNotify(object, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onScaleTouch, this);

            this.pushEventList(object, egret.TouchEvent.TOUCH_BEGIN, listener, thisObject, { scaleX: scale,scaleY: scale }, isStopBubble);
            this.pushEventList(object, egret.TouchEvent.TOUCH_END, listener, thisObject, defaultScale, isStopBubble);
            if(isMoveEvent) this.pushEventList(object, egret.TouchEvent.TOUCH_MOVE, listener, thisObject, defaultScale, isStopBubble);
            this.pushEventList(object, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, listener, thisObject, defaultScale, isStopBubble);

            this.posAnchorCenter(object);
        }

        private onFloatTouch(event:egret.Event){
            var object: egret.DisplayObject = <egret.DisplayObject>event.currentTarget;
            var eventList: any = this.m_pEventLists[object.hashCode];
            //if(!eventList || !eventList[event.type])    return;
            if(eventList && eventList[event.type]) {
                var cevt: CustomEvent = <CustomEvent>eventList[event.type];
                if (cevt.isStopBubble){
                    event.stopImmediatePropagation();
                }

                var tapBeginEvent: CustomEvent = <CustomEvent>eventList[egret.TouchEvent.TOUCH_BEGIN];
                switch(event.type) {
                    case egret.TouchEvent.TOUCH_BEGIN:
                        var tw = TweenAnim.get(event.currentTarget);
                        cevt.isTapBegin = true;
                        tw.to(cevt.argObject, 100);
                        break;
                    case egret.TouchEvent.TOUCH_END:
                    case egret.TouchEvent.TOUCH_RELEASE_OUTSIDE:
                        var yValPos = cevt.argObject['y'];
                        if(!cevt || cevt.isTapBegin || !tapBeginEvent.isTapBegin || event.currentTarget.y == yValPos)return;
                        cevt.isTapBegin = true;
                        var tw = TweenAnim.get(event.currentTarget);
                        tw.to(cevt.argObject, 100)
                        .call(function(cevt:CustomEvent){
                            cevt.isTapBegin = false;
                        }, this, [cevt]);;
                        tapBeginEvent.isTapBegin = false;
                        if(cevt.listener && cevt.thisObject) {
                            cevt.listener.call(cevt.thisObject,event);
                        }
                        break;
                }
            }
        }
        
        public addFloatListener(object: any, yValFloat:number = 3, thisObject?: any, listener?: Function, isStopBubble?:boolean){
            this.addNotify(object, egret.TouchEvent.TOUCH_BEGIN, this.onFloatTouch, this);
            this.addNotify(object, egret.TouchEvent.TOUCH_END, this.onFloatTouch, this);
            // if(isMoveEvent) this.addNotify(object, egret.TouchEvent.TOUCH_MOVE, this.onFloatTouch, this);
            this.addNotify(object, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFloatTouch, this);

            this.pushEventList(object, egret.TouchEvent.TOUCH_BEGIN, listener, thisObject, {y:object.y+yValFloat}, isStopBubble);
            this.pushEventList(object, egret.TouchEvent.TOUCH_END, listener, thisObject, {y:object.y}, isStopBubble);
            // if(isMoveEvent) this.pushEventList(object, egret.TouchEvent.TOUCH_MOVE, listener, thisObject, null, isStopBubble);
            this.pushEventList(object, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, listener, thisObject, {y:object.y}, isStopBubble);
        }

        public removeEventListener(object: egret.DisplayObject): void{
            var hashCode = object.hashCode;
            var events: CustomEvent[] = this.m_pNotifies[hashCode];
            var event:CustomEvent;
            var dict:any = this.m_pEventLists[hashCode];
            if(events) {
                for(var i:number = 0; i < events.length; i++){
                    event = events[i];
                    object.removeEventListener(event.type, event.listener, event.thisObject, event.useCapture);
                    event.dispose();
                    event = null;
                }
                for(var type in dict){
                    event = dict[type];
                    event.dispose();
                    event = null;
                    delete dict[type];
                }
            }
            this.m_pNotifies[hashCode] = null;
            this.m_pEventLists[hashCode] = null;
            delete this.m_pNotifies[hashCode];
            delete this.m_pEventLists[hashCode];
        }

        public removeEventListeners(thisObject:egret.DisplayObject):void{
            for(var code in this.m_pEventLists) {
                var events: Object = this.m_pEventLists[code];
                if(events) {
                    for(var type in events) {
                        var ce: CustomEvent = <CustomEvent>events[type];
                        if(ce.thisObject && ce.thisObject.hashCode == thisObject.hashCode){
                            this.removeEventListener(<egret.DisplayObject>ce.target);
                        }
                    }
                }
            }
        }

        public constructor() {
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /** 给某个对象添加自定义事件 */
        public static addEventListener(object: egret.EventDispatcher ,type: string,thisObject: any,listener: Function,
                                       useCapture?: boolean,priority?: number,argObject?: Object): void {
            EventManager.getInstance().addEventListener(object,type,thisObject,listener,useCapture,priority);
        }

        /** 给某个对象添加TouchTap事件 */
        public static addTouchTapListener(object: egret.EventDispatcher,thisObject: any,listener: Function,
                                          useCapture?: boolean,priority?: number,argObject?: Object){
            EventManager.addEventListener(object,egret.TouchEvent.TOUCH_TAP,thisObject,listener,useCapture,priority,argObject);
        }
        /** 给某个对象添加TouchTap事件并缩放 */
        public static addTouchScaleListener(object: egret.DisplayObject,thisObject: any,listener: Function,
                                            useCapture?: boolean,priority?: number,argObject?: Object) {
            EventManager.addScaleListener(object,0.95,thisObject);
            EventManager.addEventListener(object,egret.TouchEvent.TOUCH_TAP,thisObject,listener,useCapture,priority);
        }
        /** 给某个对象添加TouchTap事件并升降浮动 */
        public static addTouchFloatListener(object: egret.DisplayObject, thisObject: any,listener: Function,
                                            useCapture?: boolean, priority?: number, argObject?: Object) {
            EventManager.addFloatListener(object, 3, thisObject);
            EventManager.addEventListener(object,egret.TouchEvent.TOUCH_TAP,thisObject,listener,useCapture,priority,argObject);
        }
        
        public static addTouchScaleStopBubbleListener(object: egret.DisplayObject,thisObject: any,listener: Function,
                                                      useCapture?: boolean,priority?: number,argObject?: Object) {
            EventManager.addScaleStopBubbleListener(object,0.95,thisObject);
            EventManager.addEventListener(object,egret.TouchEvent.TOUCH_TAP,thisObject,listener,useCapture,priority);
        }

        public static addScaleListener(object: any,scale: number = 0.95, thisObject?: any,listener?: Function,defaultScale?:number) {
            EventManager.getInstance().addScaleListener(object,scale,thisObject,listener,defaultScale);
        }
        public static addFloatListener(object: any, yValFloat: number = 3, thisObject?: any, listener?: Function){
            EventManager.getInstance().addFloatListener(object, yValFloat, thisObject, listener);
        }

        public static addScaleStopBubbleListener(object: any,scale: number = 0.95, thisObject?: any,listener?: Function,defaultScale?:number){
            EventManager.getInstance().addScaleListener(object,scale,thisObject,listener,defaultScale,false,true);
        }

        public static addItemRenderAnim(object: any,scale: number = 0.95): void {
            EventManager.getInstance().addItemRenderAnim(object,scale);
        }
        /** 移除掉某个对象所有的事件 */
        public static removeEventListeners(thisObject: egret.DisplayObject): void {
            if ( ! thisObject ) {
                return;
            }
            EventManager.getInstance().removeEventListeners(thisObject);
        }
    }
}
