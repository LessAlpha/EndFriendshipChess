var egret = window.egret;window.skins={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.skins = {}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "i am button";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 2;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/app/public/CompRotateRound.exml'] = window.CompUIBlockRequest = (function (_super) {
	__extends(CompUIBlockRequest, _super);
	function CompUIBlockRequest() {
		_super.call(this);
		this.skinParts = ["imgRound","lbInfo"];
		
		this.height = 1334;
		this.width = 903;
		this.elementsContent = [this._Rect1_i(),this.imgRound_i(),this.lbInfo_i()];
	}
	var _proto = CompUIBlockRequest.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgRound_i = function () {
		var t = new eui.Image();
		this.imgRound = t;
		t.height = 185;
		t.horizontalCenter = 0;
		t.source = "round_rotate";
		t.verticalCenter = 0;
		t.width = 187;
		return t;
	};
	_proto.lbInfo_i = function () {
		var t = new eui.Label();
		this.lbInfo = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	return CompUIBlockRequest;
})(eui.Skin);generateEUI.paths['resource/skins/components/public/btn/BtnYellowMiddle.exml'] = window.BtnYellowMiddle = (function (_super) {
	__extends(BtnYellowMiddle, _super);
	function BtnYellowMiddle() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 70;
		this.width = 252;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0),
					new eui.SetProperty("_Rect1","strokeColor",0xd3a845),
					new eui.SetProperty("_Rect1","strokeWeight",3),
					new eui.SetProperty("labelDisplay","textColor",0xD3A845)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","textColor",0x000000)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.5),
					new eui.SetProperty("labelDisplay","alpha",0.5)
				])
		];
	}
	var _proto = BtnYellowMiddle.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xD3A845;
		t.height = 70;
		t.width = 252;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "按钮";
		t.verticalCenter = 0;
		return t;
	};
	return BtnYellowMiddle;
})(eui.Skin);generateEUI.paths['resource/skins/app/public/PopTipSizeMiddle.exml'] = window.PopTipSizeMiddle = (function (_super) {
	__extends(PopTipSizeMiddle, _super);
	function PopTipSizeMiddle() {
		_super.call(this);
		this.skinParts = ["imgTitle","lbTitle","imgBtnClose","lbTip","btnSure","btnCancel"];
		
		this.height = 530;
		this.width = 903;
		this.elementsContent = [this._Image1_i(),this.imgTitle_i(),this.lbTitle_i(),this.imgBtnClose_i(),this.lbTip_i(),this.btnSure_i(),this.btnCancel_i()];
	}
	var _proto = PopTipSizeMiddle.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 529.01;
		t.scale9Grid = new egret.Rectangle(58,58,10,6);
		t.source = "bg_tips_1";
		t.width = 903;
		t.y = 0;
		return t;
	};
	_proto.imgTitle_i = function () {
		var t = new eui.Image();
		this.imgTitle = t;
		t.horizontalCenter = 0;
		t.y = 38;
		return t;
	};
	_proto.lbTitle_i = function () {
		var t = new eui.Label();
		this.lbTitle = t;
		t.bold = true;
		t.fontFamily = "DFKai-SB";
		t.horizontalCenter = 0;
		t.size = 51;
		t.text = "提示";
		t.textColor = 0xd3a746;
		t.y = 39.01;
		return t;
	};
	_proto.imgBtnClose_i = function () {
		var t = new eui.Image();
		this.imgBtnClose = t;
		t.height = 71;
		t.includeInLayout = false;
		t.source = "btn_close_1";
		t.visible = false;
		t.width = 71;
		t.x = 832;
		t.y = -6.49;
		return t;
	};
	_proto.lbTip_i = function () {
		var t = new eui.Label();
		this.lbTip = t;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 8;
		t.multiline = true;
		t.text = "最小";
		t.textColor = 0xffffff;
		t.verticalCenter = -20;
		return t;
	};
	_proto.btnSure_i = function () {
		var t = new eui.Button();
		this.btnSure = t;
		t.horizontalCenter = -189.5;
		t.label = "确 定";
		t.skinName = "BtnYellowMiddle";
		t.y = 410;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.horizontalCenter = 189.5;
		t.label = "取 消";
		t.skinName = "BtnYellowMiddle";
		t.y = 410;
		return t;
	};
	return PopTipSizeMiddle;
})(eui.Skin);generateEUI.paths['resource/skins/app/public/PopTipSizeSmall.exml'] = window.PopTipSizeSmall = (function (_super) {
	__extends(PopTipSizeSmall, _super);
	function PopTipSizeSmall() {
		_super.call(this);
		this.skinParts = ["imgTitle","lbTitle","imgBtnClose","lbTip","btnSure","btnCancel"];
		
		this.width = 655;
		this.elementsContent = [this._Image1_i(),this.imgTitle_i(),this.lbTitle_i(),this.imgBtnClose_i(),this.lbTip_i(),this.btnSure_i(),this.btnCancel_i()];
	}
	var _proto = PopTipSizeSmall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 431.34;
		t.scale9Grid = new egret.Rectangle(58,58,10,6);
		t.source = "bg_tips_1";
		t.width = 655;
		t.y = 0;
		return t;
	};
	_proto.imgTitle_i = function () {
		var t = new eui.Image();
		this.imgTitle = t;
		t.horizontalCenter = 0;
		t.y = 38;
		return t;
	};
	_proto.lbTitle_i = function () {
		var t = new eui.Label();
		this.lbTitle = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "提  示";
		t.textColor = 0xd3a746;
		t.y = 39.01;
		return t;
	};
	_proto.imgBtnClose_i = function () {
		var t = new eui.Image();
		this.imgBtnClose = t;
		t.height = 71;
		t.includeInLayout = false;
		t.source = "btn_close_1";
		t.visible = false;
		t.width = 71;
		t.x = 588;
		t.y = -3.49;
		return t;
	};
	_proto.lbTip_i = function () {
		var t = new eui.Label();
		this.lbTip = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 8;
		t.multiline = true;
		t.text = "最小";
		t.textColor = 0xffffff;
		t.verticalCenter = -46.5;
		return t;
	};
	_proto.btnSure_i = function () {
		var t = new eui.Button();
		this.btnSure = t;
		t.horizontalCenter = -149.5;
		t.label = "确 定";
		t.skinName = "BtnYellowMiddle";
		t.y = 316.29;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.horizontalCenter = 149.5;
		t.label = "取 消";
		t.skinName = "BtnYellowMiddle";
		t.y = 316.29;
		return t;
	};
	return PopTipSizeSmall;
})(eui.Skin);generateEUI.paths['resource/skins/app/public/TipDuration.exml'] = window.TipDuration = (function (_super) {
	__extends(TipDuration, _super);
	function TipDuration() {
		_super.call(this);
		this.skinParts = ["lbTip"];
		
		this.height = 48;
		this.width = 627;
		this.elementsContent = [this._Image1_i(),this.lbTip_i()];
	}
	var _proto = TipDuration.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bg_scroll_text_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.lbTip_i = function () {
		var t = new eui.Label();
		this.lbTip = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "提示文字";
		t.textColor = 0xD3A93C;
		t.verticalCenter = 0;
		return t;
	};
	return TipDuration;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_game/BoardGrid.exml'] = window.BoardGrid = (function (_super) {
	__extends(BoardGrid, _super);
	function BoardGrid() {
		_super.call(this);
		this.skinParts = ["u0_0","u0_1","u0_2","u1_0","u1_1","u1_2","u2_0","u2_1","u2_2","u3_0","u3_1","u3_2"];
		
		this.height = 750;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i(),this._Image58_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this._Image62_i(),this._Image63_i(),this._Image64_i(),this._Image65_i(),this._Image66_i(),this._Image67_i(),this._Image68_i(),this._Image69_i(),this._Image70_i(),this._Image71_i(),this._Image72_i(),this._Image73_i(),this._Image74_i(),this._Image75_i(),this._Image76_i(),this._Image77_i(),this._Image78_i(),this._Image79_i(),this._Image80_i(),this.u0_0_i(),this.u0_1_i(),this.u0_2_i(),this.u1_0_i(),this.u1_1_i(),this.u1_2_i(),this.u2_0_i(),this.u2_1_i(),this.u2_2_i(),this.u3_0_i(),this.u3_1_i(),this.u3_2_i()];
	}
	var _proto = BoardGrid.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 170;
		t.y = 140;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 609;
		t.y = 175;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 170;
		t.y = 607;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 146;
		t.y = 169;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 6.92;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 13.84;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 20.76;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 27.68;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 34.60;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 42.52;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 48.44;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 55.36;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 62.28;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 69.2;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 76.12;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 83.03;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 89.96;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 96.88;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 103.8;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 110.72;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 117.64;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 124.56;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 131.48;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 138.4;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 145.32;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 152.24;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 159.16;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 166.08;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 173;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 179.92;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 186.84;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 193.76;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 200.68;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 207.6;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 214.52;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 221.44;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 228.36;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 235.28;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 242.2;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 249.12;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 256.04;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 262.96;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 269.88;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 276.8;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 283.72;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 290.64;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 297.56;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 304.48;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 311.4;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 318.32;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 325.24;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 332.16;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 339.08;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 346;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 352.92;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 180;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 180;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 180;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 180;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 180;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 180;
		t.source = "g0_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u0_0_i = function () {
		var t = new eui.Image();
		this.u0_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 261;
		t.source = "g1_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u0_1_i = function () {
		var t = new eui.Image();
		this.u0_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 270;
		t.source = "g1_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u0_2_i = function () {
		var t = new eui.Image();
		this.u0_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 279;
		t.source = "g1_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u1_0_i = function () {
		var t = new eui.Image();
		this.u1_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = -9;
		t.source = "g1_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u1_1_i = function () {
		var t = new eui.Image();
		this.u1_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 0;
		t.source = "g1_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u1_2_i = function () {
		var t = new eui.Image();
		this.u1_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 6.92;
		t.source = "g1_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u2_0_i = function () {
		var t = new eui.Image();
		this.u2_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 81;
		t.source = "g1_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u2_1_i = function () {
		var t = new eui.Image();
		this.u2_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 90;
		t.source = "g1_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u2_2_i = function () {
		var t = new eui.Image();
		this.u2_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 99;
		t.source = "g1_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u3_0_i = function () {
		var t = new eui.Image();
		this.u3_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 171;
		t.source = "g1_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u3_1_i = function () {
		var t = new eui.Image();
		this.u3_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 180;
		t.source = "g1_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u3_2_i = function () {
		var t = new eui.Image();
		this.u3_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 189;
		t.source = "g1_1";
		t.x = 375;
		t.y = 375;
		return t;
	};
	return BoardGrid;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_game/BoardGridThree.exml'] = window.BoardGrid = (function (_super) {
	__extends(BoardGrid, _super);
	function BoardGrid() {
		_super.call(this);
		this.skinParts = ["u0_0","u0_1","u0_2","u1_0","u1_1","u1_2","u2_0","u2_1","u2_2"];
		
		this.height = 750;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i(),this._Image58_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this.u0_0_i(),this.u0_1_i(),this.u0_2_i(),this.u1_0_i(),this.u1_1_i(),this.u1_2_i(),this.u2_0_i(),this.u2_1_i(),this.u2_2_i()];
	}
	var _proto = BoardGrid.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 170;
		t.y = 140;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 609;
		t.y = 175;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 170;
		t.y = 607;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "img_sep_hor_1";
		t.width = 410;
		t.x = 146;
		t.y = 169;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 6.92;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 20.76;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 27.68;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 34.60;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 48.44;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 55.36;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 62.28;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 76.12;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 83.03;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 89.96;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 103.8;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 110.72;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 117.64;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 131.48;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 138.4;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 145.32;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 159.16;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 166.08;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 173;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 186.84;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 193.76;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 200.68;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 214.52;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 221.44;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 228.36;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 242.2;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 249.12;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 256.04;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 269.88;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 276.8;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 283.72;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 297.56;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 304.48;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 311.4;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 325.24;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 332.16;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 339.08;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 9;
		t.rotation = 352.92;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 0;
		t.source = "g0_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 90;
		t.source = "g0_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 9;
		t.rotation = 270;
		t.source = "g0_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u0_0_i = function () {
		var t = new eui.Image();
		this.u0_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 261;
		t.source = "g1_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u0_1_i = function () {
		var t = new eui.Image();
		this.u0_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 270;
		t.source = "g1_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u0_2_i = function () {
		var t = new eui.Image();
		this.u0_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 279;
		t.source = "g1_2";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u1_0_i = function () {
		var t = new eui.Image();
		this.u1_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = -9;
		t.source = "g1_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u1_1_i = function () {
		var t = new eui.Image();
		this.u1_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 0;
		t.source = "g1_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u1_2_i = function () {
		var t = new eui.Image();
		this.u1_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 6.92;
		t.source = "g1_3";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u2_0_i = function () {
		var t = new eui.Image();
		this.u2_0 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 81;
		t.source = "g1_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u2_1_i = function () {
		var t = new eui.Image();
		this.u2_1 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 90;
		t.source = "g1_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	_proto.u2_2_i = function () {
		var t = new eui.Image();
		this.u2_2 = t;
		t.anchorOffsetX = 365;
		t.anchorOffsetY = 16;
		t.rotation = 99;
		t.source = "g1_4";
		t.x = 375;
		t.y = 375;
		return t;
	};
	return BoardGrid;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_game/BoardOperate.exml'] = window.BoardOperate = (function (_super) {
	__extends(BoardOperate, _super);
	function BoardOperate() {
		_super.call(this);
		this.skinParts = ["btnOperate","lbValLucky"];
		
		this.elementsContent = [this.btnOperate_i(),this.lbValLucky_i()];
	}
	var _proto = BoardOperate.prototype;

	_proto.btnOperate_i = function () {
		var t = new eui.Label();
		this.btnOperate = t;
		t.size = 60;
		t.text = "摇骰子";
		return t;
	};
	_proto.lbValLucky_i = function () {
		var t = new eui.Label();
		this.lbValLucky = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "6";
		return t;
	};
	return BoardOperate;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_game/BoardUsers.exml'] = window.BoardUsers = (function (_super) {
	__extends(BoardUsers, _super);
	function BoardUsers() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
	}
	var _proto = BoardUsers.prototype;

	return BoardUsers;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_game/BoardWaitBegin.exml'] = window.BoardWaitBegin = (function (_super) {
	__extends(BoardWaitBegin, _super);
	function BoardWaitBegin() {
		_super.call(this);
		this.skinParts = ["lbStartGame"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.lbStartGame_i()];
	}
	var _proto = BoardWaitBegin.prototype;

	_proto.lbStartGame_i = function () {
		var t = new eui.Label();
		this.lbStartGame = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "开始游戏";
		t.y = 1029;
		return t;
	};
	return BoardWaitBegin;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_game/SceneGame.exml'] = window.SceneGame = (function (_super) {
	__extends(SceneGame, _super);
	function SceneGame() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._BoardGrid1_i(),this._BoardWaitBegin1_i(),this._BoardOperate1_i()];
	}
	var _proto = SceneGame.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x121011;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._BoardGrid1_i = function () {
		var t = new com_main.BoardGrid();
		t.horizontalCenter = 0;
		t.skinName = "BoardGrid";
		t.y = 96;
		return t;
	};
	_proto._BoardWaitBegin1_i = function () {
		var t = new com_main.BoardWaitBegin();
		t.skinName = "BoardWaitBegin";
		t.percentWidth = 100;
		return t;
	};
	_proto._BoardOperate1_i = function () {
		var t = new com_main.BoardOperate();
		t.horizontalCenter = 0;
		t.skinName = "BoardOperate";
		t.y = 1144;
		return t;
	};
	return SceneGame;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_start/SceneStart.exml'] = window.SceneStart = (function (_super) {
	__extends(SceneStart, _super);
	function SceneStart() {
		_super.call(this);
		this.skinParts = ["imgBanner","imgBtnTouristLogin","imgBtnWxLogin","inpUserId"];
		
		this.height = 1334;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.imgBanner_i(),this.imgBtnTouristLogin_i(),this.imgBtnWxLogin_i(),this._Label2_i(),this.inpUserId_i(),this._Label3_i()];
	}
	var _proto = SceneStart.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_loading_jpg";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.lineSpacing = 8;
		t.size = 22;
		t.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
		t.textColor = 0x939393;
		t.y = 1216;
		return t;
	};
	_proto.imgBanner_i = function () {
		var t = new eui.Image();
		this.imgBanner = t;
		t.anchorOffsetY = 150;
		t.height = 437;
		t.source = "logo_banner_png";
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = 292;
		return t;
	};
	_proto.imgBtnTouristLogin_i = function () {
		var t = new eui.Image();
		this.imgBtnTouristLogin = t;
		t.height = 32;
		t.source = "btn_guest_png";
		t.width = 182;
		t.x = 269;
		t.y = 963.49;
		return t;
	};
	_proto.imgBtnWxLogin_i = function () {
		var t = new eui.Image();
		this.imgBtnWxLogin = t;
		t.height = 84;
		t.source = "btn_wx_login_png";
		t.width = 594;
		t.x = 63.5;
		t.y = 1063.73;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -271;
		t.lineSpacing = 8;
		t.multiline = true;
		t.text = "用户ID：";
		t.textAlign = "center";
		t.y = 649;
		return t;
	};
	_proto.inpUserId_i = function () {
		var t = new eui.EditableText();
		this.inpUserId = t;
		t.bold = false;
		t.border = true;
		t.borderColor = 0x888888;
		t.fontFamily = "KaiTi";
		t.height = 50;
		t.horizontalCenter = "0";
		t.prompt = "输入用户数字ID";
		t.promptColor = 0xf43709;
		t.size = 46;
		t.text = "6546";
		t.textAlign = "center";
		t.textColor = 0xf43709;
		t.verticalAlign = "middle";
		t.width = 360;
		t.y = 640;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.horizontalCenter = 0;
		t.size = 98;
		t.text = "友尽飞行棋";
		t.textColor = 0xed9410;
		t.visible = false;
		t.y = 183;
		return t;
	};
	return SceneStart;
})(eui.Skin);generateEUI.paths['resource/skins/components/public/BoardOptionsSelect.exml'] = window.BoardOptionsSelect = (function (_super) {
	__extends(BoardOptionsSelect, _super);
	var BoardOptionsSelect$Skin1 = 	(function (_super) {
		__extends(BoardOptionsSelect$Skin1, _super);
		function BoardOptionsSelect$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 50;
			this.width = 160;
			this.elementsContent = [this.labelDisplay_i(),this._Image1_i()];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
		}
		var _proto = BoardOptionsSelect$Skin1.prototype;

		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = -6;
			t.textColor = 0xE4C466;
			t.y = 11;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 160;
			t.rotation = -90;
			t.source = "gs13";
			t.y = 49;
			return t;
		};
		return BoardOptionsSelect$Skin1;
	})(eui.Skin);

	function BoardOptionsSelect() {
		_super.call(this);
		this.skinParts = ["lsBtns"];
		
		this.minHeight = 50;
		this.width = 160;
		this.elementsContent = [this._Image1_i(),this.lsBtns_i(),this._Image2_i()];
	}
	var _proto = BoardOptionsSelect.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.rotation = -90;
		t.source = "btn_back";
		t.x = 119;
		t.y = 37;
		return t;
	};
	_proto.lsBtns_i = function () {
		var t = new eui.List();
		this.lsBtns = t;
		t.layout = this._VerticalLayout1_i();
		t.itemRendererSkinName = BoardOptionsSelect$Skin1;
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,17,120,19);
		t.source = "gs15";
		return t;
	};
	return BoardOptionsSelect;
})(eui.Skin);generateEUI.paths['resource/skins/components/public/RadioSlider.exml'] = window.RadioSlider = (function (_super) {
	__extends(RadioSlider, _super);
	function RadioSlider() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.width = 1;
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("labelDisplay","textColor",0xF5BC63),
					new eui.SetProperty("labelDisplay","size",36)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("labelDisplay","textColor",0xF5BC63),
					new eui.SetProperty("labelDisplay","size",36)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("labelDisplay","textColor",0xF5BC63),
					new eui.SetProperty("labelDisplay","size",36)
				])
		];
	}
	var _proto = RadioSlider.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0xffffff;
		return t;
	};
	return RadioSlider;
})(eui.Skin);generateEUI.paths['resource/skins/components/public/RadioYellow.exml'] = window.RadioYellow = (function (_super) {
	__extends(RadioYellow, _super);
	function RadioYellow() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 62;
		this.width = 182;
		this.elementsContent = [this.labelDisplay_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"labelDisplay"),
					new eui.SetProperty("labelDisplay","textColor",0x000)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image2","",2,"labelDisplay"),
					new eui.SetProperty("labelDisplay","textColor",0x000)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","",2,"labelDisplay"),
					new eui.SetProperty("labelDisplay","textColor",0x000)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image2","",2,"labelDisplay"),
					new eui.SetProperty("labelDisplay","textColor",0x000)
				])
		];
	}
	var _proto = RadioYellow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(13,12,17,17);
		t.source = "frame_card_1";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,24,62);
		t.source = "btn_ellipse_yellow";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.textColor = 0xB6A260;
		t.verticalCenter = 0;
		return t;
	};
	return RadioYellow;
})(eui.Skin);generateEUI.paths['resource/skins/app/scene_index/SceneIndex.exml'] = window.SceneIndex = (function (_super) {
	__extends(SceneIndex, _super);
	function SceneIndex() {
		_super.call(this);
		this.skinParts = ["lbJoin","lbCreate","lbIdRoom"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.lbJoin_i(),this.lbCreate_i(),this.lbIdRoom_i()];
	}
	var _proto = SceneIndex.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x121011;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.lbJoin_i = function () {
		var t = new eui.Label();
		this.lbJoin = t;
		t.horizontalCenter = 0;
		t.size = 62;
		t.text = "加入房间";
		t.y = 546;
		return t;
	};
	_proto.lbCreate_i = function () {
		var t = new eui.Label();
		this.lbCreate = t;
		t.horizontalCenter = 0;
		t.size = 62;
		t.text = "创建房间";
		t.y = 928;
		return t;
	};
	_proto.lbIdRoom_i = function () {
		var t = new eui.EditableText();
		this.lbIdRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = true;
		t.borderColor = 0xffffff;
		t.height = 80;
		t.horizontalCenter = "0";
		t.prompt = "房间号";
		t.promptColor = 0xaaaaaa;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 404;
		t.y = 314;
		return t;
	};
	return SceneIndex;
})(eui.Skin);generateEUI.paths['resource/skins/components/public/btn/BtnDarkOnYellow.exml'] = window.BtnDarkOnYellow = (function (_super) {
	__extends(BtnDarkOnYellow, _super);
	function BtnDarkOnYellow() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 76;
		this.width = 120;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = BtnDarkOnYellow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(6,11,38,66);
		t.source = "btn_ellipse_yellow";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "按钮";
		t.textColor = 0x211c17;
		t.verticalCenter = 0;
		return t;
	};
	return BtnDarkOnYellow;
})(eui.Skin);generateEUI.paths['resource/skins/components/public/btn/BtnShowOptions.exml'] = window.BtnShowOptions = (function (_super) {
	__extends(BtnShowOptions, _super);
	function BtnShowOptions() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 50;
		this.width = 160;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
	}
	var _proto = BtnShowOptions.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gs15";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = -6;
		t.text = "按 钮";
		t.textColor = 0xE4C466;
		t.y = 11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = -90;
		t.source = "btn_back";
		t.x = 119;
		t.y = 37;
		return t;
	};
	return BtnShowOptions;
})(eui.Skin);