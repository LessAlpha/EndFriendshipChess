/**
 * created by LazyLaing on 2017/2/7
 */
module com_main {
    
    export class LoadComponent extends CView{
        

        protected notifyMethod:Function;
        protected notifyContext:any;
        constructor(notifyMethod:Function, notifyContext:any){
            super();
            this.notifyMethod = notifyMethod;
            this.notifyContext = notifyContext;
        }
        public addSelf(){
            // AGame.R.app.topLevel.addChild(this);
        }
        public loading(nLoaded:number, nTotal:number){
            
        }

        public loaded(){
            if(this.notifyMethod)   this.notifyMethod.call(this.notifyContext);
        }

        public onDestroy(){
            // super.onDestroy();
            this.notifyMethod = this.notifyContext = null;
            this.removeFromParent();
        }

        public loadError() {
            console.warn('load error');
            this.loaded();
        }


    }

}