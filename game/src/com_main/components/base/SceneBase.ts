// /**
//  * Created   on 2016/12/24.
//  */
// module com_main {
//     export class SceneBase extends CView {
//         public _sceneType:SceneTypes;
//         public constructor() {
//             super();
//         }

//         public setPosition(x: number,y: number) {
//             this.x = x;
//             this.y = y;
//         }

//         public getPosition(): egret.Point {
//             return egret.Point.create(this.x,this.y);
//         }

//         public set scale(scale){
//             this.scaleX = this.scaleY = scale;
//         }

//         public get scale(){
//             return this.scaleX;
//         }

//         public enter(params?){

//         }
        
//         public enableTouch(bCanTouch:boolean=true){
//             this.touchEnabled = this.touchChildren = bCanTouch;
//         }

//         public onDestroy(): void {
//             this.removeEvents();
//             if(this.parent)     this.parent.removeChild(this);
//         }

//         protected listNotificationInterests():any[] {
//             return [];
//         }

//         protected handleNotification(notification: AGame.INotification) {

//         }

//         protected registerEvents( ):void
//         {
//             var interests:string[] = this.listNotificationInterests();
//             var len:Number = interests.length;
//             if(!AGame.R.router) return;
//             var router = AGame.R.router.getObserver();
//             if( len>0 )
//             {
//                 var observer:AGame.IObserver = new AGame.Observer( this.handleNotification, this );
//                 for( var i:number = 0;  i < len; i++ ){
//                     router.registerObserver( interests[i],  observer );
//                 }
//             }
//         }

//         protected removeEvents( ):void
//         {
//             var interests:string[] = this.listNotificationInterests();
//             var i:number = interests.length;
//             var router = AGame.R.router.getObserver();
//             while( i-- )
//                 router.removeObserver( interests[i], this );
//         }
//     }
// }