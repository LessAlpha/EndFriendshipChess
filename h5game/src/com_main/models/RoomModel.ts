
class RoomModel {

    public static register() {
        // AGame.ServiceBuilder.addProtoHandler(CMDS.CREATE_ROOM, RoomModel, "CreateRoomReq", "CreateRoomResp");
        // AGame.ServiceBuilder.addProtoHandler(CMDS.JOIN_ROOM, RoomModel, "JoinRoomReq", "JoinRoomResp");
        // AGame.ServiceBuilder.addProtoHandler(CMDS.BROADCAST_ROOM_INFO, RoomModel, null, "BroadcastRoomInfo");
        
    }

    public static execute(notification:AGame.INotification)
    {
        var protocol:number = notification.getName();
        var body = notification.getBody();
        AGame.info('RoomModel : ', protocol);
        let bCmdFailed :boolean = body.res!=undefined && body.res!=0;
        // let bCanNotify :boolean = com_main.GameData.inst.bUiReady;
        switch (protocol) {
            case CMDS.CREATE_ROOM:
                if(bCmdFailed)  break;
                GameData.nIdRoom = body.nIdRoom;
                GameData.nSumUser = body.nSumUser;
                GameData.userInfoMe = GameData.userInfoHostRoom = new UserInfo(AccountInfo.USER_ID, AccountInfo.NICK, AccountInfo.PHOTO_SOURCE, 0, AccountInfo.SKIN_USING);
                GameData.arrUserInfo = [GameData.userInfoHostRoom];
                break;
            case CMDS.JOIN_ROOM:
                if(bCmdFailed)  break;
                GameData.nIdRoom = body.nIdRoom;
                GameData.nSumUser = body.nSumUser;
                GameData.arrUserInfo = [];
                for(var i:number=0; i<body.users.length; i++) {
                    var u = body.users[i];
                    if(!u)  continue;
                    var userInfo = new UserInfo(u.uId, u.nick, u.photo, u.nPos, u.skin);
                    GameData.arrUserInfo[u.nPos] = userInfo;
                    if(u.uId==body.uIdHost)     GameData.userInfoHostRoom = userInfo;
                    else if(u.uId==AccountInfo.USER_ID)     GameData.userInfoMe = userInfo;
                }
                break;
            case CMDS.BROADCAST_ROOM_INFO:
                switch(body.operate) {
                    case 1:// 新玩家进入
                        var userInfo = new UserInfo(body.uId, body.nick, body.photo, body.nPos, body.skin);
                        GameData.arrUserInfo[body.nPos] = userInfo;
                        if(GameData.bUiReady)       AGame.R.notifyObserver(PlayNav.USER_JOIN, userInfo);
                        break;
                    case 2:// 玩家掉线

                        break;
                    case 3:// 玩家重新上线

                }
        }

        AGame.ServiceBuilder.notifyProxy(notification);
    }

}
