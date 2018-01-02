// enum ProcessState{
// 	STADE_RED = 1,
// 	STADE_BLUE,
// 	STADE_YELLOW
// }
// module com_main{
// 	export class CCProgress extends eui.ProgressBar {
// 		private speed:number;
		
// 		public constructor() {
// 			super();
// 		}

// 		protected childrenCreated(){
// 			super.childrenCreated();
// 			// this.skinName = Utils.getComSkin("Progress/CCProgress.exml");
// 			this['labelDisplay'].visible = false;
// 		}

// 		public set Speed(speed:number){
// 			this.speed = speed;
// 		}

// 		public setLabelText(text){
// 			this['label'].text = text;
// 		}

// 		public setValue(value:number){
// 			super.setValue(value);
// 			if (this.speed){
// 				if (this.slideDuration == 500){
// 					this.slideDuration = 0;
// 				}
// 				else{
// 					this.slideDuration = this.speed;
// 				}
// 			}
// 			this.value = value;
// 		}

// 		public setLableHiden(){
// 			this['labelDisplay'].visible = false;
// 			this['label'].visible = false;
// 		}

// 		public setLableShow(){
// 			this['label'].visible = true;
// 		}

// 		public setState(state){
// 			this.commitProperties();
// 			if(state == ProcessState.STADE_RED){
// 				(<eui.Image>this['thumb']).source = "Common_jdutiao_2_png";
// 			}
// 			else if(state == ProcessState.STADE_BLUE){
// 				(<eui.Image>this['thumb']).source = "Common_bar_bg1_png";
// 			}
// 			else{
// 				(<eui.Image>this['thumb']).source = "";
// 			}
// 		}

// 		public get Speed(){
// 			return this.speed;
// 		}
	
// 		public getValue(){
// 			return this.value;
// 		}
// 	}
// }