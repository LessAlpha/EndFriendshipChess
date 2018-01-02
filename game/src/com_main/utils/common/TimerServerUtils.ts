class TimerServerUtils {
    public static ServerTime = 0;       //通过服务器协议返回的时间
    public static ServerTimeStamp = new Date().getTime();  //时间标尺

    /**
     * 获取服务器时间
     */
    public static getServerTime(): number {
        return Math.floor(this.getServerTimeMill() / 1000);
    }

    public static getServerTimeMill(): number {
        return this.ServerTime + (new Date().getTime() - this.ServerTimeStamp);
    }

    /**
     * 获取服务器时间的Ymd格式
     */
    public static getServerTimeYmd(): number {
        return Number(this.dateFormat("yyyyMMdd", this.getServerTime()));
    }

    /**
     * 获取服务器时间的Ymd格式
     */
    public static getServerTimeYmd2() {
        return this.dateFormat("yyyyMMdd-hh:mm:ss", this.getServerTime());
    }

    //格式化日期
    public static dateFormat(fmt: string, time: number) {
        var date = new Date(time * 1000);
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    /**
     * 将时间长度格式化
     *
     */
    public static diffTimeFormat(fmt: string, time: number, type: number = 1) {
        var day = Utils.number2int(time / 86400);
        var hour = Utils.number2int(time % 86400 / 3600);
        var minutent = Utils.number2int(time % 3600 / 60);
        var seconds = Utils.number2int(time % 60);
        if (!new RegExp("(d+)").test(fmt)) {
            hour += day * 24;
        }
        if (!new RegExp("(h+)").test(fmt)) {
            minutent += hour * 60;
        }

        var o = {
            "d+": day, //日 
            "h+": hour, //小时 
            "m+": minutent, //分 
            "s+": seconds, //秒 
        };
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) {
                //                    debug((("00" + o[k]).substr(("" + o[k]).length)));
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ("" + o[k]).length == 1 ? "0" + o[k] : o[k]);
            }

        return fmt;
    }


    /**
     * 返回 12:00:00这种格式
     * @param time
     * @returns {string}
     */
    public static format1(time){
        return this.diffTimeFormat('hh:mm:ss',time);
    }

}