module com_main {
    export class MulTouch extends egret.DisplayObject{

        private static ResetFlag = -2;
 
        private static border:number = 10; //边界：10个像素
        private _distance:number = 0;
        private _angele:number = 0;
        private _simulator:boolean = false;
        private _container:egret.DisplayObjectContainer =null;
        private _objs:Object = {};
        private _scale = MulTouch.ResetFlag;
        

        public constructor(container:egret.DisplayObjectContainer,simulator:boolean = false) {
            super();
            this._container = container;
            container.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            container.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
            container.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);

            this.addEventListener(egret.Event.REMOVED,this.remove,this);

            if(simulator == true)
            {
                var pc = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
                if(pc == true)
                {
                    this._simulator = simulator;
                }
            }
        }

        private remove()
        {
            this._container.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this._container.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
            this._container.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        }

        private testNext = false;
        private testNext2= false;

        private testCount = 0;

        private mouseDown(evt:egret.TouchEvent)
        {
            //模拟开始
            this.testCount ++;
            if(this.testCount == 4)
            {
                this.testNext = false;
                this.testNext2= false;
            }

            if(this._simulator == true && this.testNext == false)
            {
                if(this.testCount == 2 || this.testCount == 4)
                {
                    this.testNext= true;

                    var x = this._container.width >> 1;
                    var y = this._container.height >> 2;
                    
                    var e:egret.TouchEvent = new egret.TouchEvent(egret.TouchEvent.TOUCH_BEGIN,false,false,x,y,20161108);
                    this.addPoint(e);
                    e = new egret.TouchEvent(egret.TouchEvent.TOUCH_MOVE,false,false,x,y + 1,20161108);
                    this.onMove(e);
                }
            }
            // 模拟结束 
            if(this.getUnNullPropertyNames(this._objs).length < 2)
            {
                this.addPoint(evt);
            }
            
            if(this.getUnNullPropertyNames(this._objs).length == 2)
            {
                var o1 = this._objs[ this.getUnNullPropertyNames(this._objs)[0] ];
                var o2 = this._objs[ this.getUnNullPropertyNames(this._objs)[1] ];

                var event:MulTouchEvent = new MulTouchEvent(MulTouchEvent.MULTOUCH_BEGIN);
                event.center = this.getCenterPoint(o1,o2);
                this.dispatchEvent(event);
            }

        }

        private mouseMove(evt:egret.TouchEvent)
        {
            this.onMove(evt);
            
            //egret.log(this.touchCount);
            if(this.getUnNullPropertyNames(this._objs).length >= 2)
            {
                this.dispenseMove();
            }
        }

        private mouseUp(evt:egret.TouchEvent)
        {
            this.removePoint(evt);

            if(this._simulator == true && this.testNext2 == false)
            {
                if(this.testCount == 2 || this.testCount == 4)
                {
                    this.testNext2 = true;
                    var e:egret.TouchEvent = new egret.TouchEvent(egret.TouchEvent.ENDED,false,false,0,0,20161108);
                    this.removePoint(e);
                }
            }


            this._scale = MulTouch.ResetFlag;
            var event = new MulTouchEvent(MulTouchEvent.MULTOUCH_END);

            if(this.getUnNullPropertyNames(this._objs).length != 0)
            {
                event.remain = <number><any>this.getUnNullPropertyNames(this._objs)[0];
            }

            this.dispatchEvent(event);
            this._objs = {};
        }

        // private getTouchDistance():number

        // {
        //     var _distance:number = 0;
        //     var names = this.touchPoints["names"];
        //     _distance = egret.Point.distance( this.touchPoints[names[names.length-1]],
        //         this.touchPoints[names[names.length-2]]);
        //     return _distance;
        // }
        

        // private c:number = 0.017453292; //2PI/360
        // private getTouchAngle():number
        // {
        //     var ang:number = 0;
        //     var names = this.touchPoints["names"];
        //     var p1:egret.Point = this.touchPoints[names[names.length-1]];
        //     var p2:egret.Point = this.touchPoints[names[names.length-2]];

        //     ang = Math.atan2((p1.y-p2.y),(p1.x-p2.x)) / this.c;
        //     return ang;
        // }

        private getCenterPoint(o1:MulTouchObject,o2:MulTouchObject):egret.Point
        {
            var p1:egret.Point = o1.start;
            var p2:egret.Point = o2.start;
            return new egret.Point((p1.x + p2.x)/2,(p1.y + p2.y)/2);
        }

        //move的时候，记录起来每一个点移动的距离，然后下一帧去去找出移动距离最大的两个点，用这两个点来进行缩放和选择

        private cloneTouen(event:egret.TouchEvent)
        {
            var obj:MulTouchObject = new MulTouchObject(event);
            return obj;
        }

        private dispenseMove()
        {
            var o1 = this._objs[ this.getUnNullPropertyNames(this._objs)[0] ];
            var o2 = this._objs[ this.getUnNullPropertyNames(this._objs)[1] ];

            var scale = MulTouchObject.GetScale(o1,o2);

            var scaleChange = 0;
            if(this._scale == MulTouch.ResetFlag)
            {
                this._scale = scale;
            }
            else
            {
                scaleChange = scale - this._scale;
                this._scale = scale;
            }
            
            var event = new MulTouchEvent(MulTouchEvent.MULTOUCH_MOVE);
            event.scale = scale;
            event.scaleChange = scaleChange;
            event.center = this.getCenterPoint(o1,o2);
            this.dispatchEvent(event);
        }

        private addPoint(event:egret.TouchEvent)
        {
            //如果列表里面没有，就添加，有就不添加
            var key:string = <string><any>event.touchPointID;
            if(this._objs[key] == undefined)
            {
                var obj:MulTouchObject = this.cloneTouen(event);
                this._objs[key] = obj;
            }
            
        }

        private removePoint(event:egret.TouchEvent)
        {
            var key:string = <string><any>event.touchPointID;
            if(this._objs[key] != undefined)
            {
                this._objs[key] = undefined;
            }
        }

        private onMove(event:egret.TouchEvent)
        {
            if(this.check(event) == false)
            {
                this.removePoint(event);
                return ;
            }

            //移动尝试去添加
            this.addPoint(event);
            //记录移动距离
            var key:string = <string><any>event.touchPointID;
            if(this._objs[key] != undefined)
            {
                var obj = this._objs[key];
                obj.onMove(event);
            }
        }

        private check(event:egret.TouchEvent)
        {
            //超出地图边界就舍弃
            var x = event.stageX;
            var y = event.stageY;
            
            if(x < MulTouch.border || x > this.stage.width - 10)
            {
                return false;
            }

            if(x < MulTouch.border || x > this.stage.height - 10)
            {
                return false;
            }
            
        }

        
        public getUnNullPropertyNames(obj:Object):Array<any>
        {
            var result:Array<any> = [];
            for(var key in obj)
            {
                if(obj[key] != undefined)
                {
                    result.push(key);
                }
            }
            return result;
        }
        
        
    }
}
