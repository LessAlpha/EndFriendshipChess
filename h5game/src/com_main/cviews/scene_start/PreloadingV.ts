
// module com_main {

//     export class PreloadingV extends com_main.LoadComponent {

//         // private btnTrueName:TestBtn;
//         private btnShare:eui.Button;
//         private bmPhoto:eui.Image;
//         private txNick :eui.Label;
//         private listDemo :eui.List;
//         private accountInfo2:eui.Component;
        
//         constructor(notifyMethod:Function, notifyContext:any){
//             super(notifyMethod, notifyContext);
//             this.initApp('preloading.exml');
//             // this.initApp('login/preloading');
//             this.width = AGame.R.app.stageWidth;
//         }
        
//         public loading( nLoaded:number, nTotal:number){
//             // console.log(strNameGroup, nLoaded, nTotal);

//         }

//         public loaded(){
//             // console.log('loaded');
//             this.notifyMethod.call(this.notifyContext);
//             this.onDestroy();
//         }

// 		protected onCreate(){
            
//             // EventManager.addTouchScaleListener(this.btnTrueName, this, this.touchBtnTrueName);
//             // EventManager.addTouchFloatListener(this.accountInfo2['bmPhoto'], this, this.touchBtnTrueName);
//             // Utils.setGray(this.btnTrueName,true);
// 		}
//         private touchBtnTrueName(){
//             console.log('touchBtn')
//         }


//     }
// }