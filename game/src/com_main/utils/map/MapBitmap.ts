
// module com_main {
//     export class MapBitmap extends egret.Bitmap {
//         private m_pRow: number = 0;
//         private m_pCol: number = 0;
//         private m_pLoopRow:number = 0;
//         private m_pLoopCol:number;
        
//         public constructor(name:string = '') {
//             super();
//             if(name){
//                 this.texture = RES.getRes(name);
//             }
//             this.touchEnabled = false;
//             this.scale = 1;
//         }

//         public showPos(){
//             var name = "lbl_" + this.hashCode;
//             var lbl =<eui.Label> this.parent.getChildByName(name);
//             if (!lbl){
//                 lbl = new eui.Label();
//                 lbl.name = name;
//                 // lbl.width = 300;
//                 // lbl.height = 30;
//                 lbl.size = 30;
//                 lbl.anchorOffsetX = -275;
//                 lbl.anchorOffsetY = -180;
//                 lbl.textAlign = egret.HorizontalAlign.CENTER;
//                 this.parent.addChild(lbl);
//             }

//             var text = "("+this.r+","+this.c+")";
//             if (lbl.text != text){
//                 lbl.text = text;
//                 // debug("绘制");
//             }
//             lbl.x = this.x;
//             lbl.y = this.y;
//         }
        
//         public set scale(scale:number){
//             this.scaleX = scale;
//             this.scaleY = scale;
//         }

//         public set r(row:number){
//             this.m_pRow = row;
//         }
//         public get r():number{
//             return this.m_pRow;
//         }
//         public set c(col: number) {
//             this.m_pCol = col;
//         }
//         public get c(): number {
//             return this.m_pCol;
//         }
        
//         public set loopRow(row: number) {
//             this.m_pLoopRow = row;
//         }
//         public get loopRow(): number {
//             return this.m_pLoopRow;
//         }
        
//         public set loopCol(col: number) {
//             this.m_pLoopCol = col;
//         }
//         public get loopCol(): number {
//             return this.m_pLoopCol;
//         }

//         public getIndexValue():number{
//             return
//         }

//     }
// }

