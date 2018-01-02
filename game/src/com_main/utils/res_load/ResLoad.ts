/**
 *  资源加载控制器
 */
module com_main {
    
    export class ResLoad {

        /** 保存加载完成回调函数及作用域的对象 */
        private arrCallLoaded :LoadComponent[] = [];
        public constructor(){
            this.registerEvents();
        }

        /**  加载临时资源-数组形式 */
        public loadResTemp(arrRes:Array<string>,fun:Function,scope:any, viewName:string) {
            var groupName :string = 'res_temp';
            RES.createGroup(groupName, arrRes, true);
            this.beginLoadGroup(groupName, fun, scope, viewName);
        }

        /** 注册已经加载完某个组的资源 */
        public loadGroupWithCall(arrNameGroup:string[], fun:Function, scope:any, viewName:string) {
            if(arrNameGroup.length>1) {// 加载多个组
                let arrRes :string[] = [];
                for(var i in arrNameGroup) {
                    var arrResOneGroup = RES.getGroupByName(arrNameGroup[i]);
                    for(var j in arrResOneGroup) {
                        arrRes.push(arrResOneGroup[j].name);
                    }
                }
                this.loadResTemp(arrRes, fun, scope, viewName);
            } else this.beginLoadGroup(arrNameGroup[0], fun, scope, viewName);
        }

        ////////////////////////////////////////////////////////////////////////////////////////
        private beginLoadGroup(nameGroup :string, fun:Function, scope:any, viewName:string) {
            if(this.arrCallLoaded[nameGroup])   this.arrCallLoaded[nameGroup].onDestroy(); // 防错处理
            var clazz = egret.getDefinitionByName(viewName);
            var ca :LoadComponent = new clazz(fun, scope);
            ca.addSelf();
            this.arrCallLoaded[nameGroup] = ca;
            RES.loadGroup(nameGroup);
        }
        /** 加载完成事件 */
        private onResourceLoadComplete(event:RES.ResourceEvent):void {
            console.info('加载完成 - ', event.groupName)
            let comp:LoadComponent = this.arrCallLoaded[event.groupName];
            if(!comp)   return;
            comp.loaded();
            comp.onDestroy();
            comp = null;
            this.arrCallLoaded[event.groupName] = null;
        }
        /** 加载进度事件 */
        private onResourceProgress(event:RES.ResourceEvent):void {
            let comp:LoadComponent = this.arrCallLoaded[event.groupName];
            if(!comp)   return;
            comp.loading(event.itemsLoaded, event.itemsTotal);
        }
        private onResourceLoadError(event:RES.ResourceEvent):void {
            console.warn("Item:" + event.groupName + " - " + event.resItem + " has failed to load");
            this.onResourceLoadComplete(event);
        }

        private registerEvents(){
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }
        private static inst:ResLoad;
        static getInst():ResLoad{
            if(!this.inst)
                this.inst = new ResLoad;
            return this.inst;
        }
    }
}
