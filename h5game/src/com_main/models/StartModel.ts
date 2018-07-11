
/**  */
class StartModel {

    public static register() {
        AGame.ServiceBuilder.addProtoHandler(AGame.SocketLogin.CONNECTED_LOGIN, StartModel, null);
        AGame.ServiceBuilder.addProtoHandler(AGame.SocketLogin.DISCONNECTED_LOGIN, StartModel, null);
        AGame.ServiceBuilder.addProtoHandler(CMDS.LOGIN, StartModel, game.LoginReq, game.LoginResp);
    }

    public static execute(notification:AGame.INotification)
    {
        var cmd = notification.getName();
        var body = notification.getBody();
        AGame.info('StartModel : ', cmd, body);
        switch (cmd) {
            case AGame.SocketLogin.CONNECTED_LOGIN:
                console.warn("AGame.SocketLogin");
                break;
            // case AGame.SocketLogin.CONNECTED_CLOSE:
            //     com_main.UpManager.close();
            //     AGame.R.notifyObserver(PublicNav.ADD_POP_TIP_OFFLINE);
            //     break;
            case CMDS.LOGIN:

                break;
        }
         AGame.ServiceBuilder.notifyProxy(notification);
    }



}
