/**
 * 缓存对象池
 */
module com_main {

    export class CachePool{
        public static cacheDict:Object = {};
        /**生产*/
        public static produce(classFactory:any){
            var key = classFactory.keyClass;
            if(this.cacheDict[key]==null){
                this.cacheDict[key] = [];
            }
            var arr = this.cacheDict[key];
            var result;
            if(arr.length>0) {
                result = arr.pop();
            } else {
                result = new classFactory();
                result.key = key;
            }
            // console.log('生产后的长度：', key, arr.length);
            return result;
        }
        /**回收*/
        public static reclaim(obj:any):void{
            var key = obj.key;
            if(this.cacheDict[key]==null)
                this.cacheDict[key] = [];
            var arr = this.cacheDict[key];
            if(arr.indexOf(obj) == -1){
                arr.push(obj);
                // console.log('回收后的长度：', key, arr.length);
            }
        }
        /**将某数组中含有另外一个数组中的元素移除掉并回收到对象池*/
        public static reclaimObjFromArr(arrOriginal:Array<any>,arrReclaim:Array<any>){
            for(var j in arrReclaim){
                var obj = arrReclaim[j];
                arrOriginal.splice(arrOriginal.indexOf(obj),1);
                CachePool.reclaim(obj);
            }
        }

    }
    export class PoolBM extends egret.Bitmap{
        private static cacheDict:Object = {};
        /**生产*/
        public static produce(textureName:string):PoolBM{
            if(this.cacheDict[textureName]==null){
                this.cacheDict[textureName] = [];
            }
            var dict:PoolBM[] = this.cacheDict[textureName];
            var water:PoolBM;
            if(dict.length>0) {
                water = dict.pop();
            } else {
                water = new PoolBM(textureName);
            }
            //console.warn('生产后的长度：',dict.length);
            //water.textureName = textureName;
            return water;
        }
        /**回收*/
        public static reclaim(water:PoolBM,textureName:string):void{
            if(this.cacheDict[textureName]==null)
                this.cacheDict[textureName] = [];
            var dict:PoolBM[] = this.cacheDict[textureName];
            if(dict.indexOf(water)!=-1){
                dict.push(water);
                console.warn('回收后的长度：',dict.length);
            }
        }

        //public textureName:string;

        public constructor(textureName:string) {
            super(RES.getRes(textureName));
        }
    }

    export class PoolTF extends egret.TextField{
        private static cacheDict:Object = {};
        /**生产*/
        public static produce(textShow:string):PoolTF{
            if(this.cacheDict[textShow]==null){
                this.cacheDict[textShow] = [];
            }
            var dict:PoolTF[] = this.cacheDict[textShow];
            var water:PoolTF;
            if(dict.length>0) {
                water = dict.pop();
            } else {
                water = new PoolTF(textShow);
            }
            //console.warn('生产后的长度：',dict.length);
            //water.textShow = textShow;
            return water;
        }
        /**回收*/
        public static reclaim(water:PoolTF,textShow:string):void{
            if(this.cacheDict[textShow]==null)
                this.cacheDict[textShow] = [];
            var dict:PoolTF[] = this.cacheDict[textShow];
            if(dict.indexOf(water) == -1){
                dict.push(water);
                //console.warn('回收后的长度：',dict.length);
            }
        }

        //public textShow:string;

        public static key = 'ADD_SCORE';
        public constructor(textShow:string) {
            super();
            Utils.setProps(this,{text:''+textShow,textAlign:'center',textColor:0xf5c51e,size:30,fontFamily:'Microsoft Yahei'},[0.5,1]);

        }
        public setText(textString:string){
            this.text = '' + textString;
        }
    }

}