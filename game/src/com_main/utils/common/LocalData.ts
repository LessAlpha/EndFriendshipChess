class LocalData {
	// private static OPEN_ID:string = "h5sdk.openid";
	// private static SERVER_ID:string = "h5sdk.serverid";
	

	public static setData(key:string, data:any):void{
		egret.localStorage.setItem(key, data);
	}
	
	public static getData(key:string):any{
		var data: any;
		data = egret.localStorage.getItem(key);
		return data ? data : '';
	}

	public static removeData(key:string){
		egret.localStorage.removeItem(key);
	}

	// public static setOpenId(openId:any):void{
	// 	this.setData(this.OPEN_ID, openId);
	// }

	// public static getOpenId():any{
	// 	var opend_id = this.getData(this.OPEN_ID) || 'player-x';
	// 	this.setData(this.OPEN_ID,opend_id);
	// 	return opend_id;
	// }

	// public static getServerId():any{
	// 	var server_id = this.getData(this.SERVER_ID) || 1;
	// 	this.setData(this.SERVER_ID,server_id);
	// 	return server_id;
	// }

}