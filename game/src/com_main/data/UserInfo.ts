

class UserInfo {

    public uId :string;
    public nick:string;
    public photo:string;
    public nPos:number;
    public bOnline :boolean = true;
    public skin :number;

    public arrFly :Array<FlyInfo>;// 棋子信息 

    constructor(uId:string, nick:string, photo:string, nPos:number, skin:number) {
        this.uId = uId;
        this.nick = nick;
        this.photo = photo;
        this.nPos = nPos;
        this.skin = skin;

        this.arrFly = [];
        for(var i:number=0,fly:FlyInfo; i<3; i++){
            fly = new FlyInfo();
            this.arrFly.push(fly);
        }

    }

    private onOffLine() {

    }



}