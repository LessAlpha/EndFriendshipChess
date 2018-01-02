module com_main {
	export class CComponent extends AGame.AComponent{
		protected lan:any;

		public constructor() {
			super();
			this.lan = L.getInstance().getObject();
		}

		$onRemoveFromStage(isclear = true): void {
			this.lan = null;
            super.$onRemoveFromStage(isclear);
        }
	}

	export class CCButton extends AGame.AButton {

    }

    export class CCRadioButton extends AGame.ARadioButton {
        public constructor() {
            super();
        }
    }

    export class CCHSlider extends AGame.AHSlider{
        public constructor() {
            super();
        }
    }

    export class CImage extends AGame.AImage{
        //$onRemoveFromStage(): void {
        //    let source = this.source;
        //
        //    if (source && typeof source == "string") {
        //        // RES.destroyRes(String(source));
        //        // debug("CCImage:"+String(source));
        //        //egret.log(source);
        //        if(!ImageManager.passCached(String(source)))
        //        {
        //            ImageManager.putUI(String(source), this.width, this.height);
        //        }
        //    }
        //    super.$onRemoveFromStage();
        //}
    }

    export class CList extends eui.List {
        $onRemoveFromStage(): void {
            var dataProvider = <eui.ArrayCollection>this.dataProvider;
            if(dataProvider){
                dataProvider.replaceAll([]);
                this.dataProvider = null;
                this.itemRenderer = null;
            }
            super.$onRemoveFromStage();
        }
    }

}