
class ConfigErrMsg{

    static getStrErr(nCodeStatus:number) {
        if(!this.ErrorMsgInBoard)  this.generateMsg();
        let str = this.ErrorMsgInBoard[nCodeStatus];
        if(!str) {
            str = '未知错误：' + nCodeStatus;
        }
        return str;
    }
    private static ErrorMsgInBoard :string[];
    private static generateMsg(){
        let arr=[];

        this.ErrorMsgInBoard = arr;
    }


}

    