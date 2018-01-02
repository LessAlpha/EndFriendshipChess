class L {
	private static _instance: L;
	private m_pLan: Array<any>[];

	private m_iLoadCount: number;
    private m_pLoadedCallback: Function;
    private m_pCallInstance: any;

	public static KEY_LAN = "Language";
	public static REPLACE_REG: RegExp = /{[a-zA-Z0-9]+}/;
    private static SD_REG: RegExp = new RegExp("(%s|%d)");

	public static getLanguageFormat(key: any, ...args: any[]): string {
		var lan: string = L.getInstance().getLanguageFormat(key, ...args);
		return lan || '';
	}

	//格式化语言包
	public getLanguageFormat(key: any, ...args: any[]) {
		var str: string = this.m_pLan[L.KEY_LAN][key];
		if (!str) return '##Not Exist##';
		str = str.replace(/%%/g, "%");
		for (var i in args) {
			var arg = args[i];
			if (L.SD_REG.test(str)) {
				str = str.replace(RegExp.$1, arg);
			}
		}
		return str;
	}

	public static getLanguage(key: any): string {
		var lan: string = L.getInstance().getLanguage(key);
		return lan || '';
	}

	public getLanguage(key: any) {
		return this.m_pLan[L.KEY_LAN] ? this.m_pLan[L.KEY_LAN][key] : '';
	}

	public getObject() {
		return this.m_pLan[L.KEY_LAN];
	}

	public constructor() {
		this.m_pLan = new Array();
	}

	public static getInstance() {
		if (!L._instance) {
			L._instance = new L();
		}
		return L._instance;
	}

	public loadConfig(callback: Function, obj: any) {
		this.m_iLoadCount = 0;
        this.m_pLoadedCallback = callback;
        this.m_pCallInstance = obj;

		var config_url = "http://"+GameConst.IpRequestGame+"/loginserver/config/"+GameConst.IpRequestGame+"/language.zip";
		debug("lan_url",config_url)
		// RES.getResByUrl(config_url, function (data) {
		// 	if (data) {
		// 		var zip = new JSZip(data);
		// 		for (var i in zip.files) {
		// 			var name: string = zip.files[i].name;
		// 			if (name.indexOf('/') > 0) continue;
		// 			var text = zip.files[i].asText();
		// 			var data = JSON.parse(text);
		// 			// debug("data",data);

		// 			this.m_pLan[data.name] = {};
		// 			for (var j = 0; j < data.data.length; j++) {
        //                 this.m_pLan[data.name][data.data[j][0]] = data.data[j][1];
        //             }
		// 		}
		// 		this.onLoaded();
		// 	}
		// }, this, RES.ResourceItem.TYPE_BIN);
	}

	private onLoaded() {
		this.m_iLoadCount += 1;
		if (this.m_iLoadCount == 1) {
			this.m_pLoadedCallback.call(this.m_pCallInstance);

			this.m_pLoadedCallback = null;
			this.m_pCallInstance = null;
		}
	}

}