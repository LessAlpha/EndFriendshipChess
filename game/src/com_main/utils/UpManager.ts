module com_main {

    export class UpManager {
        /**
         * 弹窗显示管理器
         *
         * 涉及到的类：AGame.R, CView, APopUp
         */

        public constructor() {
        }

        private static m_pPanels: CView[] = [];
        private static m_pCurrentPanal: CView = null;   //当前面板
        public static m_pMask: eui.Rect;

        public static STYLE_UP: number = 1;			//普通弹窗
        public static STYLE_FULL: number = 2;		//全屏弹窗
        public static STYLE_MAIN_FULL: number = 3;  //顶置全屏普通关闭事件关不了

        // public static IsClickBackClose = true;
        // public static IsShowMenu = true;

        public static get CurrentPanel(): CView {
            return this.m_pCurrentPanal;
        }

        public static get panelSize(): number {
            return this.m_pPanels.length;
        }

        public static stageSizeChanged() :void {
            if(this.m_pCurrentPanal)   this.m_pCurrentPanal.resize();
            for(let i in this.m_pPanels)    this.m_pPanels[i].resize();
            if (this.m_pMask)  this.m_pMask.width = AGame.R.app.stageWidth;
        }

        /**
         * 往面板数组队列添加此面板并显示弹窗面板到最顶层 PopUpLevel
         * @param node
         * @param title
         * @param style
         * @param preVisible
         */
        public static popView(node: any, title?: string, style: number = this.STYLE_UP, preVisible = false) {
            this.addPanel(false, preVisible);
            this.m_pCurrentPanal = node;
            AGame.R.app.popUpLevel.addChild(node);
            if (title) {
                APopUp.setTitle(node, title);
            }
            this.m_pCurrentPanal.popType = style;
            this.resize();
            this.mask();
            if (this.panelSize == 0) this.popUpShow(this.m_pCurrentPanal);
        }

        /**
         * 往面板数组队列添加此面板并显示小弹窗面板到最顶层 PopUpLevel
         * @param node          面板
         * @param title         标题
         * @param isClear       是否清除所有其它面板
         * @param point         该面板的xy位置点，如果是舞台中间则省略此参数
         */
        public static popSmallView(node: any, title?: string, isClear?: boolean, point?): void {
            this.addPanel(isClear, true);
            this.m_pCurrentPanal = node;
            AGame.R.app.popUpLevel.addChild(node);
            APopUp.setTitle(node, title,false);
            if(!point) {
                this.setPanelCenter(node);
            } else {
                node.anchorOffsetX = node.width*point.anchorX;
                node.anchorOffsetY = node.height*point.anchorY;
                node.x = point.x;
                node.y = point.y;
            }
            this.m_pCurrentPanal.validateNow();
            this.mask(true);
        }
        
        /**
         * 关闭移除全部面板    
         * @param bAnima            是否带有动画
         * @param isSuper           isSuper参数意义未明，猜测是是否在顶层?
         */
        public static close(bAnima: boolean = true, isSuper: boolean = false): void {
            var THIS = this;
            // if(this.m_pCurrentPanal)    bAnima = this.m_pCurrentPanal.bShowTwRemove; 
            var callback: Function = function () {
                THIS.removePanel(THIS.m_pCurrentPanal, isSuper);
                THIS.m_pCurrentPanal = null;
                var isReturn = false;

                for (var i: number = 0; i < THIS.m_pPanels.length; i++) {
                    var panel = THIS.m_pPanels[i];
                    if (!isSuper && panel.popType == THIS.STYLE_MAIN_FULL) {// 遇到xx面板时刷新面板，而且不移除  
                        THIS.m_pCurrentPanal = panel;
                        THIS.m_pCurrentPanal.touchEnabled = true;
                        THIS.m_pCurrentPanal.onRefresh();
                        isReturn = true;
                    }
                    THIS.removePanel(panel);
                }
                THIS.m_pPanels = [];
                THIS.mask(false);
                if (isReturn) {
                    return;
                }
            };
            this.twClose(this.CurrentPanel, callback);
            // if (bAnima) {
            //     this.twClose(this.CurrentPanel, callback);
            // } else {
            //     callback();
            //     //ImageManager.cleanUI();
            // }
        }

        /**
         * 关闭当前置前面板，回到之前面板 , 在APopUp组件里面触发响应
         * @param bAnima
         */
        public static history(bAnima: boolean = true): void {
            // console.warn('history',this.m_pPanels.length);
            var THIS = this;
            // bAnima = this.m_pCurrentPanal.bShowTwRemove;
            var callback: Function = function () {
                 THIS.removePanel( THIS.m_pCurrentPanal, true);

                 THIS.mask(false);
                 THIS.m_pCurrentPanal = null;

                if ( THIS.m_pPanels.length > 0) {
                     THIS.m_pCurrentPanal =  THIS.m_pPanels.pop();
                }

                if ( THIS.m_pCurrentPanal) {
                    // debug(" THIS.history onrefresh");
                     THIS.m_pCurrentPanal.visible = true;
                     THIS.m_pCurrentPanal.touchEnabled = true;
                     THIS.m_pCurrentPanal.onRefresh();
                     THIS.mask();
                } else {

                }
            };
            this.twClose(this.m_pCurrentPanal, callback);
            // if (bAnima) {// this.panelSize == 0 && 
            //     this.twClose(this.m_pCurrentPanal, callback);
            // } else {
            //     callback();
            // }
        }

        /**
         * 移除所有面板 或 往面板数组队列添加当前的面板
         * @param isClear           是否移除所有面板
         * @param isVisible         设置当前面板的显示属性
         */
        private static addPanel(isClear?: boolean, isVisible: boolean = false): void {
            if (isClear) {
                this.close();
            } else if (this.m_pCurrentPanal) {
                if (this.m_pCurrentPanal.popType != this.STYLE_MAIN_FULL) {// 不是满屏面板则隐藏
                    this.m_pCurrentPanal.visible = isVisible;
                }
                this.m_pCurrentPanal.touchEnabled = false;
                this.m_pPanels.push(this.m_pCurrentPanal);
            }
        }

        /**
         * 移除面板
         * @param panel         需要移除的面板
         * @param isSuper       是否在顶层
         */
        private static removePanel(panel: CView = null, isSuper: boolean = false): void {
            if (!panel) panel = this.m_pCurrentPanal;
            if (!panel) return;
            // let bRem :boolean = panel.bWillRemOnManager;
            if (isSuper) {
                panel.onDestroy();
                if (panel.parent) {
                    panel.parent.removeChild(panel);
                    panel = null;
                }
            } else {
                if (panel.popType != this.STYLE_MAIN_FULL) {
                    panel.onDestroy();
                    if (panel.parent) {
                        panel.parent.removeChild(panel);
                        panel = null;
                    }
                }
            }
        }

        /**
         * 播放面板的缩放动画，移除面板后回调
         * @param panel         需要移除的面板
         * @param callback      回调
         */
        private static twClose(panel: CView, callback?: Function): void {
            if (panel) {// 动画缩放后回调
                let twRemFromStage :WayTw = panel.twRemFromStage;
                switch(twRemFromStage){
                    case null:
                        if (callback) callback();
                        break;
                    case WayTw.SCALE_BOUNCE_FADE_OUT:
                        LibTw.inst.twBounceFadeOut(panel, callback);
                        break;
                    case WayTw.TO_TOP:
                        LibTw.inst.twToStageTop(panel, 300, false, callback);
                        break;
                    case WayTw.TO_RIGHT:
                        LibTw.inst.twToStageRight(panel, 300, false, callback);
                        break;
                    case WayTw.TO_BOTTOM:
                        LibTw.inst.twToStageBtm(panel, 300, false, callback);
                        break;
                    case WayTw.TO_LEFT:
                        LibTw.inst.twToStageLeft(panel, 300, false, callback);
                        break;                    
                }
                // var tw: TweenAnim = TweenAnim.get(panel);
                // var scale: number = panel.scaleX;
                // tw.to({ scaleX: 1.05 * scale, scaleY: 1.05 * scale }, 50)
                //     .to({ scaleX: scale, scaleY: scale }, 150)
                //     .to({ alpha: 0.01 }, 180)
                //     .call(function () {
                //         if (callback) callback();
                //         TweenAnim.removeTweens(panel);
                //     });
            } else {
                if (callback) callback();
            }
        }

        /**
         * 弹出某个面板后回调
         * @param panel
         * @param callback
         */
        private static popUpShow(panel: CView, callback?: Function): void {
            var tw: egret.Tween = egret.Tween.get(panel);
            panel.alpha = 0.01;
            tw.to({ alpha: 1 }, 150);
            if (callback) tw.call(function () {
                callback();
            });
        }

        /**
         * 通过调整面板缩放系数重新自适应舞台的宽高后定位到舞台正中
         * @param panel
         */
        public static resize(panel: CView = this.m_pCurrentPanal): void {
            if (panel) {
                panel.resize();
                var app = AGame.R.app;
                var scale: number = app.screenScale(AGame.R.app.stageHeight, AGame.R.app.stageWidth);
                if (panel.popType == this.STYLE_UP) {
                    panel.scaleX = scale;
                    panel.scaleY = scale;
                }
                this.setPanelCenter(panel);
            }
        }

        /**
         * 设置面板的位置到舞台正中央
         * @param panel
         */
        public static setPanelCenter(panel: egret.DisplayObject = this.m_pCurrentPanal) {
            panel.anchorOffsetX = panel.width / 2;
            panel.anchorOffsetY = panel.height / 2;
            panel.x = (AGame.R.app.stageWidth) / 2;
            panel.y = (AGame.R.app.stageHeight) / 2;
        }

		public static resizeOnStageCenter(node:egret.DisplayObject, nGapPermit:number= 60) {
			// let nContainerHeight = AGame.R.app.stageHeight - nGapPermit;
            // let nScale :number = node.height > nContainerHeight ? (nContainerHeight / node.height) : 1;
            // node.scaleX = node.scaleY = nScale;
            // node.x = (AGame.R.app.stageWidth - node.width*nScale) / 2 + node.anchorOffsetX * nScale;
            // node.y = (AGame.R.app.stageHeight - node.height*nScale) / 2 + node.anchorOffsetY * nScale;
            this.resizeOverWidth(node);
		}

        public static resizeOverWidth(node:egret.DisplayObject, nGapPermit:number= 60){
			let nContainerWidth = AGame.R.app.stageWidth - nGapPermit;
            let nScale :number = node.width > nContainerWidth ? (nContainerWidth / node.width) : 1;
            node.scaleX = node.scaleY = nScale;
            node.x = (AGame.R.app.stageWidth - node.width*nScale) / 2 + node.anchorOffsetX * nScale;
            node.y = (AGame.R.app.stageHeight - node.height*nScale) / 2 + node.anchorOffsetY * nScale;
        }

        /**
         * 添加透明度0.5的黑色背景浮层
         * @param visible
         */
        public static mask(visible: boolean = true): void {
            var layer: egret.DisplayObjectContainer = AGame.R.app.popUpLevel;
            if (!this.m_pMask) {
                this.m_pMask = new eui.Rect(AGame.R.app.stageWidth, AGame.R.app.stageHeight, 0x000000);
                layer.addChild(this.m_pMask);
                this.m_pMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMaskClickListener, this);
            }
            this.m_pMask.alpha = this.m_pCurrentPanal?this.m_pCurrentPanal.nAlphaMask:0;
            var index: number = layer.numChildren - 2 > 0 ? layer.numChildren - 2 : 0;
            layer.setChildIndex(this.m_pMask, index);
            this.m_pMask.visible = visible;
        }
        
        /** 舞台分辨率尺寸变化响应 */
        public static stageResize(){
            if(this.m_pCurrentPanal)  this.setPanelCenter(this.m_pCurrentPanal);
        }

        private static onMaskClickListener() {
            // if(this.CurrentPanel._popType == this.STYLE_FULL || this.CurrentPanel._popType == this.STYLE_MAIN_FULL)return;
            // if (this.IsClickBackClose) {
            if(!this.CurrentPanel.bCanTouchShadowToClose)   return;
            if(this.CurrentPanel.bIsHistoryBack)    this.history();
            else    this.close();
            
        }
    }
}