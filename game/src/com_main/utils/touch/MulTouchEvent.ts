module com_main {
    export class MulTouchEvent extends egret.Event {

		public static MULTOUCH_BEGIN:string = "mul_touch_begin"
		public static MULTOUCH_MOVE:string = "mul_touch_move";
		public static MULTOUCH_END:string = "mul_touch_end";
		public oldDistance:number;
		public oldAnage:number;
		public newDistance:number;
		public newAnage:number;
		public scale:number;
		public scaleChange:number;
		public center:egret.Point;
		public remain:number;
		public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
		{
			super(type,bubbles,cancelable);
		}

	}
}