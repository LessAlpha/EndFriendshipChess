import CSocket = AGame.CSocket;
/**  */
class StartModel {

    public static register() {
        AGame.ServiceBuilder.addProtoHandler(CSocket.CONNECTED_LOGIN, StartModel, null);
        AGame.ServiceBuilder.addProtoHandler(CSocket.CONNECTED_CLOSE, StartModel, null);
        AGame.ServiceBuilder.addProtoHandler(CMDS.LOGIN, StartModel, "LoginReq", "LoginResp");
    }

    public static execute(notification:AGame.INotification) //notification:AGame.INotification)
    {
        var cmd = notification.getName();
        var body = notification.getBody();
        console.log('StartModel : ', cmd, body);
        switch (cmd) {
            case CSocket.CONNECTED_LOGIN:
                break;
            case CSocket.CONNECTED_CLOSE:
                com_main.UpManager.close();
                AGame.R.notifyObserver(PublicNav.ADD_POP_TIP_OFFLINE);
                break;
            case CMDS.LOGIN:

                break;
            
        }
         AGame.ServiceBuilder.notifyProxy(notification);
    }



}
