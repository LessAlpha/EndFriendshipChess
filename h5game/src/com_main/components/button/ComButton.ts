
module com_main {
	export class ComButton extends CComponent {

		public static ST_SRED = 1;
		public static ST_BLUE = 2;

		private ylb_text: eui.Label;
		private yimg_BtnBg:eui.Image;
		private Coin_Icon: eui.Image;
		public sdata:Object;
		private yOld_text_style:any;
		public gray_tip:string;

		private rhText: CCRichText = null;

		private m_bIsGary:boolean = false;

		public isClear:boolean = true;

		public constructor() {
			super();
			this.yOld_text_style = {};
		}

		private m_iLanIndex:number = 0;
		public set alan(lan:number){
			this.m_iLanIndex = lan;
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			this.commitProperties();
			this.updateStyleValue();
			if(this.rhText == null){
				this.rhText = new CCRichText(this.ylb_text);
				this.ylb_text.parent.addChild(this.rhText);
			}
			this.rhText.imageScale = 0.8;
			this.rhText.textAlign = true;
			if (this.m_iLanIndex > 0){
				this.ylb_text.text = L.getLanguage(this.m_iLanIndex);
			}
		}

		private updateStyleValue():void
		{
			if (!this.m_bIsGary){
				this.yOld_text_style.textColor = this.ylb_text.textColor;
				this.yOld_text_style.strokeColor = this.ylb_text.strokeColor;
				this.yOld_text_style.stroke = this.ylb_text.stroke;
				this.yOld_text_style.source = this.yimg_BtnBg.source;
				this.yOld_text_style.width = this.ylb_text.width;
			}
		}

		$onRemoveFromStage(): void {
			// debug("ComButton $onRemoveFromStage");
			this.yOld_text_style = null;
			this.sdata = null;
			egret.Tween.removeTweens(this);
			super.$onRemoveFromStage(this.isClear);
		}

		public setStyle(style) {
			if (style == ComButton.ST_SRED) {
				this.yimg_BtnBg.source = "FCommon_ButtonSRed_png";
			} else if (style == ComButton.ST_BLUE) {
				this.yimg_BtnBg.source = "FCommon_ButtonBlue_png";
			}
		}

		public set text(str:string){
			this.setCoinText(str);
		}

		/**
 		* coinType货币类型
 		* text
 		*/
		public setCoinText(text:string, coinType:number = null, color:any = null){
			var colorStr = color == null? text : "<color=#"+color+">"+text+"</color>";
			var temp = coinType == null ? colorStr :"[img]com_coin"+coinType+"_png"+"[/img]"+ colorStr;
			if(!this.rhText)
			{
				this.rhText = new CCRichText(this.ylb_text);
				this.ylb_text.parent.addChild(this.rhText);
			}
			this.rhText.text = temp;
		}

		public setText(str: string) {
			this.ylb_text.text = str;
		}

		public set disabled(isGray:boolean){
			this.enabled = !isGray;
			this.gray = isGray;
		}

		public set gray(isGray:boolean){
			if(this.m_bIsGary == isGray) return;
			var btnBg =this.yOld_text_style.source;
			this.m_bIsGary = isGray;
			if(isGray){
				btnBg = "Common_Btn2_png";
				this.ylb_text.strokeColor = 0x505050;
			}else{
				this.ylb_text.strokeColor = this.yOld_text_style.strokeColor;
				this.ylb_text.stroke = this.yOld_text_style.stroke;
				this.ylb_text.textColor = this.yOld_text_style.textColor;
			}
			this.yimg_BtnBg.source = btnBg;
			this.commitProperties();
			this.validateNow();
		}

		public get gray(){
			return this.m_bIsGary;
		}

		public get disabled(){
			return !this.enabled;
		}

		public setImages(image:string){
			this.yimg_BtnBg.source = image;
		}

		public changeCurrentState(state: string): void{
			if(this.currentState == state) return;
			this.commitProperties();
			// todo 检查 state 的正确性
			this.gray = false;
			this.currentState = state;
			this.updateStyleValue();
		}
	}
}

