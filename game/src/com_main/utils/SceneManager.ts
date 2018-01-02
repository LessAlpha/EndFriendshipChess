enum SceneTypes {
    START       = 0,
    INDEX       = 1,
    GAME        = 2
}

module com_main {
    export class SceneManager {

        public static curScene:CView;

        public static sceneStart :SceneStart;
        public static sceneIndex :SceneIndex;
        public static sceneGame :SceneGame;

        public static change(type:SceneTypes, params?){
            console.warn('scene-change', type);
            switch(type) {// 资源加载
                case SceneTypes.START:
                    this.newScene(type, params);
                    break;
                case SceneTypes.INDEX:
                    com_main.ResLoad.getInst().loadGroupWithCall(['index'], ()=>{
                        this.newScene(type, params);
                    }, this, 'com_main.CompUIBlockRequest');
                    break;
                case SceneTypes.GAME:
                    let arrResGroup :string[] = ['game'];
                    if(LocalData.getData(GameConst.LocalDataKey.SWITCH_SOUND))  arrResGroup.push('sound');
                    com_main.ResLoad.getInst().loadGroupWithCall(arrResGroup, ()=>{
                        this.newScene(type, params);
                    }, this, 'com_main.CompUIBlockRequest');
            }
            
            // if (this.curScene && this.curScene.sceneType == type) {// 同一个场景
            // } else {
            // }
            // this.curScene.enter(params);
        }

        // public static backIndexFromGameReady() {
        //     this.sceneGame.visible = false;
        //     this.newScene(SceneTypes.INDEX);
        // }
        public static backGameFromIndex() {
            if(this.curScene.sceneType==SceneTypes.GAME||this.curScene.sceneType==SceneTypes.START)    return;
            this.curScene.onDestroy();
            this.curScene.removeFromParent();
            this.curScene = this.sceneGame;
            this.sceneGame.visible = true;
        }

        private static newScene(type:SceneTypes, params?) {

            if (this.curScene) this.curScene.onDestroy();
            AGame.R.app.mapLevel.removeChildren();
            UpManager.close();

            let scene_name = this.getScene(type);
            let clazz = egret.getDefinitionByName(scene_name);
            let ca = new clazz(params);
            ca.sceneType = type;
            this.curScene = ca;
            switch(type) {
                case SceneTypes.START:
                    this.sceneStart = ca;
                    break;
                case SceneTypes.INDEX:
                    this.sceneIndex = ca;
                    // GameData.destroyInst();
                    break;
                case SceneTypes.GAME:
                    this.sceneGame = ca;
            }
            AGame.R.app.mapLevel.addChild(ca);
        }
        
        private static getScene(type){
            let scene_name = "";
            switch (type) {
                case SceneTypes.INDEX:
                    scene_name = "com_main.SceneIndex";
                    break;
                case SceneTypes.GAME:
                    scene_name = "com_main.SceneGame";
                    break;
                case SceneTypes.START:
                    scene_name = "com_main.SceneStart";
            }
            return scene_name;
        }


        public static stageSizeChanged() :void {
            if(this.curScene)   this.curScene.resize();
            // if(this.sceneGame&&this.curScene!=this.sceneGame&&this.sceneGame.parent)   this.sceneGame.resize();
        }

    }
}