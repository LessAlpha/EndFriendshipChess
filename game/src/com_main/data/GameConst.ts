class GameConst {
	
	
	public static PLATFORM :string = 'h5';
	public static TOKEN_FROM_PLATFORM :string = '';
	public static CLIENT_FROM :string = '3';
	public static VERSION_GAME :string = '2016120701';
	public static STR_MD5_SUFFIX :string = 'dzpk_test';

	public static IpRequestGame :string = "10.17.173.41";
	public static PortRequestGame :number = 32100;//|| parseInt(Utils.getRequest()['port']) || // 正威-10100 张雷-31100  义斌-32100
	public static IpGame :string;// = "10.17.173.120";//null;
	public static PortGame :number;// = 30400; //null;// zhengwei-30110  zhanglei-31200

	public static is_choose_server:boolean = false;

	public static HeartbeatTime:number = 30000;
	
	public static LocalDataKey = {
		USER_ID:'USER_ID',
		SWITCH_SOUND:'SWITCH_SOUND'
	}
}