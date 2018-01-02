
import SceneManager = com_main.SceneManager;
class PlayModel {

    public static register() {
        AGame.ServiceBuilder.addProtoHandler(CMDS.START_GAME, PlayModel, "StartGameReq", "StartGameResp");
        AGame.ServiceBuilder.addProtoHandler(CMDS.OPERATE_LUCKY_NEXT, PlayModel, null, "OperateLuckyNextResp");
        AGame.ServiceBuilder.addProtoHandler(CMDS.OPERATE_LUCKY_END, PlayModel, "OperateLuckyEndReq", "OperateLuckyEndResp");
        AGame.ServiceBuilder.addProtoHandler(CMDS.OPERATE_FLY, PlayModel, "OperateFlyReq", "OperateFlyResp");
        // AGame.ServiceBuilder.addProtoHandler(cmds.START_GAME, PlayModel, "StartGameReq", "StartGameResp");

    }

    static bFlying :boolean = false;

    public static execute(notification:AGame.INotification)
    {
        let protocol:number = Number(notification.getName());
        let body = notification.getBody();
        let bCmdFailed :boolean = body.res!=undefined&&body.res!=0;
        switch (protocol) {
            case CMDS.START_GAME:

                break;
            case CMDS.OPERATE_LUCKY_NEXT:
                GameData.nIndOperating = body.nPos;
                if(GameData.userInfoMe.nPos==body.nPos) {// 轮到自己出牌
                    egret.setTimeout(()=>{
                        var cmd = CMDS.OPERATE_LUCKY_END;
                        var obj = AGame.ServiceBuilder.newClazz(cmd);
                        obj.nPos = body.nPos;
                        AGame.ServiceBuilder.sendMessage(cmd, obj, ()=>{

                        }, this);
                    }, this, 1000);
                }
                break;
            case CMDS.OPERATE_LUCKY_END:
                if(GameData.userInfoMe.nPos==body.nPos && (this.bFlying||body.n==6)) {
                    this.bFlying = true;
                    egret.setTimeout(()=>{
                        var cmd = CMDS.OPERATE_FLY;
                        var obj = AGame.ServiceBuilder.newClazz(cmd);
                        obj.fInd = 0;
                        AGame.ServiceBuilder.sendMessage(cmd, obj, ()=>{

                        }, this);
                    }, this, 1000);
                }
                break;
            case CMDS.OPERATE_FLY:
                break;       

        }
        AGame.ServiceBuilder.notifyProxy(notification);
    }

}
