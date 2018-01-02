module com_main {
	export class MulTouchObject {

		private touchId:string;

		private _start:egret.Point;
		private _end:egret.Point;


		public constructor(event:egret.TouchEvent) {
			this.touchId = <string><any>event.touchPointID;
			this._start = new egret.Point(event.stageX,event.stageY);
		}

		get start():egret.Point
		{
			return this._start;
		}

		get end():egret.Point
		{
			return this._end;
		}



		public static GetScale(o1:MulTouchObject,o2:MulTouchObject)
		{
			if(o1.check() == false || o2.check() == false)
			{
				return 1;
			}
			
			var startDistance:number = egret.Point.distance(o1.start,o2.start);
			startDistance = startDistance == 0 ? 1:startDistance;
			var endDistance:number = egret.Point.distance(o1.end,o2.end);
			return endDistance/startDistance;
		}

		public onMove(event:egret.TouchEvent)
		{
			if(this._end == null)
			{
				this._end = new egret.Point();
			}

			this._end.x = event.stageX;
			this._end.y = event.stageY;
		}

		public getDistance():number
		{
			if(this.check() == true)
			{
				return egret.Point.distance(this._start,this._end);
			}
			else
			{
				return 0;

			}
		}

		public check():boolean
		{
			if (this._start == null || this._end == null)
			{
				return false;
			}
			return true;
		}
	}
}