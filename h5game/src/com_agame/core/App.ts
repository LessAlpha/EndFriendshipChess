module AGame {
	export class App extends egret.HashObject{
        /**
         * 整个游戏不同显示层的容器
         *
         */
		private m_pRoot: eui.UILayer;//根
        private m_pMapLevel: egret.DisplayObjectContainer;//地图层
        private m_pMenuLevel: egret.DisplayObjectContainer;//菜单层
        private m_pPopupLevel: egret.DisplayObjectContainer;//菜单层 ，弹窗层
        private m_pTopLevel: egret.DisplayObjectContainer;//顶层
        private m_pGuideLevel: egret.DisplayObjectContainer;//任务指引层

        public static isNative = egret.Capabilities.runtimeType != egret.RuntimeType.WEB;

		public constructor() {
			super();
        }

        /**
         * 初始化各个显示层
         * @param root      游戏主容器
         */
		public registerView(root: eui.UILayer) {

            this.m_pRoot = root;

            this.m_pMapLevel = new egret.DisplayObjectContainer();
            this.m_pMapLevel.name = "map";
            this.m_pRoot.addChild(this.m_pMapLevel);

            this.m_pMenuLevel = new egret.DisplayObjectContainer();
            this.m_pMenuLevel.name = "menu";
            this.m_pMenuLevel.height = this.stageHeight;
            this.m_pRoot.addChild(this.m_pMenuLevel);

            this.m_pPopupLevel = new egret.DisplayObjectContainer();
            this.m_pPopupLevel.name = "popUp";
            this.m_pRoot.addChild(this.m_pPopupLevel);

            this.m_pTopLevel = new egret.DisplayObjectContainer();
            this.m_pTopLevel.name = "top";
            this.m_pRoot.addChild(this.m_pTopLevel);

            this.m_pGuideLevel = new egret.DisplayObjectContainer();
            this.m_pGuideLevel.name = "guide";
            this.m_pRoot.addChild(this.m_pGuideLevel);
        }

		public get stageWidth(): number {
            return this.m_pRoot.stage.stageWidth;
        }

        public get stageHeight(): number {
            return this.m_pRoot.stage.stageHeight;
        }

        public get screenWidth(): number {
            return egret.Capabilities.boundingClientWidth;
        }

        public get screenHeight(): number {
            return egret.Capabilities.boundingClientHeight;
        }

        /**
         * 通过调整面板缩放系数重新自适应舞台的宽高
         * @param height
         * @param width
         * @returns {number}
         */
        public screenScale(height, width): number {
            var screenScale: number = this.screenHeight / this.screenWidth;// 显示屏的高宽比值
            var standardScale: number = height / width;// 预设高宽比值，如1136/640
            var scale: number = screenScale / standardScale + 0.1;//浏览器占用差值,
            var tmpScale: number = screenScale / 1.5;
            if (scale > 0.95 && scale < 1) {
                scale = tmpScale < 1 ? (scale - 0.1) : 0.95;
            } else if (scale < 0.95) {
                // scale -= 0.1;
            }
            return scale > 1 ? 1 : scale;
        }

        public get mapLevel(): egret.DisplayObjectContainer {
            return this.m_pMapLevel;
        }

        public get menuLevel(): egret.DisplayObjectContainer {
            return this.m_pMenuLevel;
        }

        public get popUpLevel(): egret.DisplayObjectContainer {
            return this.m_pPopupLevel;
        }

        public get topLevel(): egret.DisplayObjectContainer {
            return this.m_pTopLevel;
        }

        public get guideLevel(): egret.DisplayObjectContainer {
            return this.m_pGuideLevel;
        }

        public get root(): eui.UILayer {
            return this.m_pRoot;
        }

		protected static instance:App;
		
		static get Instance():App
		{
			if( !App.instance )
				App.instance = new App();

			return App.instance;
		}
	}
}