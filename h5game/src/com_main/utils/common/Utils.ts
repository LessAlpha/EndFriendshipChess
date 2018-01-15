
class Utils {

    static getWindowWidth()
    {
        var cur_width = 480;
        //��ȡ���ڿ��
        if (window && window.innerWidth)
            cur_width = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            cur_width = document.body.clientWidth;
        //ͨ������Document�ڲ���body���м�⣬��ȡ���ڴ�С
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
        {
            cur_width = document.documentElement.clientWidth;
        }
        return cur_width;
    }
    //��ȡ�߶�
    static getWindowHeight() {
        var cur_height = 800;
        //��ȡ���ڸ߶�
        if (window && window.innerHeight)
            cur_height = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            cur_height = document.body.clientHeight;
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            cur_height = document.documentElement.clientHeight;
        }
        return cur_height;
    }
    /**
     * 把array转换成map
     * key : 键值
     */
    public static arrayToMap(arr: any, key: string) {
        if (!arr || arr.length == 0) {
            return arr;
        }
        var newArr = [];
        for (var i in arr) {
            var item = arr[i];
            newArr[item[key]] = item;
        }
        return newArr;
    }

    public static objectLenght(elem: Object): number {
        var keys: any[] = Object.keys(elem);
        return keys.length;
    }

    public static number2int(num: number): any {
        return parseInt(Utils.number2str(num));
    }

    public static number2str(num: number): string {
        return <string><any>num;
    }

    // public static getAppSkin(skinName){
    //     return Utils.getSkinName('app/' + skinName);
    // }

    // public static getComSkin(skinName){
    //     return Utils.getSkinName('components/' + skinName);
    // }

    // public static getSkinName(skinName){
    //     return "resource/skins/" + skinName;
    // }

    public static setObjAnchor(component:egret.DisplayObject, nAnchor:number=0.5) {
        component.anchorOffsetX = component.width * nAnchor;
        component.anchorOffsetY = component.height * nAnchor;
    }

    public static stringFormatArr(str: string, args: Array<any>): string {
        var new_str = str;
        for (var i in args) {
            var arg = args[i];
            if (new RegExp("(%s|%d)").test(new_str)) {
                new_str = new_str.replace(RegExp.$1, arg);
            }
        }
        return new_str;
    }
    
    private static lengthChars(strDeal:string){
        var byteLen:number=0;
        for(var i=0; i<strDeal.length; i++){
            byteLen += strDeal.charCodeAt(i)>255 ? 2 : 1;
        }
        return byteLen;
    }
    /** 限定字符串在规定字节范围内 */
    public static limitStrChars(strDeal:string, nMaxChars:number){//todo
        if(this.lengthChars(strDeal)>nMaxChars) {
            var strCollected :string = '';
            var nIndStr :number = 0;
            var char :string;
            while(this.lengthChars(strCollected)<nMaxChars-3){
                char = strDeal.substr(nIndStr++,1);
                strCollected += char;
            }
            strCollected += '...';
            strDeal = strCollected;
        }
        return strDeal;
    }
    
    static getRequest() {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    /**
     * 格式化字符串
     */
    public static stringFormat(str: string, ...args: any[]): string {
        //过滤掉所有
        str = str.replace(/%%/g, "%");
        return Utils.stringFormatArr(str, args);
    }

    /**
     * 拷贝一个字典
     */
    public static copyDict(dict, isDeepCopy?) {
        if (!dict) {
            return dict;
        }
        var newDict = (dict instanceof Array) ? [] : {};
        for (var i in dict) {
            if (typeof dict[i] == "function") {
                continue;
            }
            // newDict[i] = dict[i];
            if (isDeepCopy) {
                newDict[i] = (typeof dict[i] == "object") ? Utils.copyDict(dict[i]) : dict[i];
            } else {
                newDict[i] = dict[i];
            }
        }
        return newDict;
    }

    /**
     * 将所有views整体居中
     * @param views
     * @param span
     * @param y
     */
    public static setViewCenter(views, span = 0,isAnchorCenter = false,y = -10000) {
        var view_num = views.length;
        var parent_view = views[0].parent;

        var view_all_width = 0;
        for (var i = 0; i < view_num; i++) {
            var view = views[i];
            view_all_width += view.width;
            if(isAnchorCenter){
                view.anchorOffsetX = view.width / 2;
                view.anchorOffsetY = view.height / 2;
            }
        }
        view_all_width = view_all_width + (view_num - 1) * span;

        var offect_x = isAnchorCenter ? views[0].width / 2 : 0;
        var start_x = (parent_view.width - view_all_width) / 2 + offect_x;
        for (var i = 0; i < view_num; i++) {
            var view = views[i];
            view.x = start_x;
            if (y != -10000) {
                view.y = y;
            }
            start_x += view.width + span;
        }
    }

    public static setViewLink(views, span = 0,start_x = -10000){
        var view_num = views.length;
        if (view_num < 2) return;
        var base_view = views[0];
        var base_x = start_x != -10000 ? start_x : base_view.x;
        var view_num = views.length;
        for (var i = 0; i < view_num; i++) {
            var view = views[i];
            view.x = base_x;
            base_x += view.width + span;
        }
    }

    /**
     * 设置富文本label
     */
    public static setRichLabel(label: eui.Label, text: string) {
        text = Utils.parseLanRich(text);
        text = Utils.parseClickRich(text);
        text = text.replace(/<br>/ig, "\n");
        if(label) label.textFlow = new egret.HtmlTextParser().parser(text);
    }

    /**
     * 解析语言包的富文本
     */
    public static parseLanRich(str) {
        var patt1 = new RegExp("(.*)<color=(.*?)>(.*?)<\/color>(.*)");
        var dstText = "";
        var result = null;
        do {
            result = patt1.exec(str);
            if (result) {
                var color = RegExp.$2;
                if (color.indexOf("#") == -1) {
                    color = "#" + color.substr(0, 6);
                } else {
                    color = color.substr(0, 7);
                }
                var newStr = RegExp.$1 + "<font color='" + color + "'>" + RegExp.$3 + "</font>" + RegExp.$4;
                str = newStr;
            }
        } while (result != null);

        return str;
    }

    /**
     * 解析语言包的富文本
     */
    public static parseClickRich(str) {
        var patt1 = new RegExp("(.*)<clk=(.*?)>(.*?)<\/clk>(.*)");
        var dstText = "";
        var result = null;
        do {
            result = patt1.exec(str);
            if (result) {
                var event = RegExp.$2;
                var newStr = RegExp.$1 + "<u><a href='event:" + event + "'>" + RegExp.$3 + "</a></u>" + RegExp.$4;
                str = newStr;
            }
        } while (result != null);

        return str;
    }

    /**
     * 创建一个定时器
     * listener : 监听函数
     * thisObject : 对象
     * second : 定时间隔（秒）默认一秒
     * repeat : 重复次数，默认0，一直调
     */
    public static createTimer(listener: Function, thisObject: any, second: number = 1, repeat: number = 0) {
        var timer = new egret.Timer(second * 1000, repeat);
        timer.addEventListener(egret.TimerEvent.TIMER, listener, thisObject);
        return timer;
    }

    public static removeTimer(time:egret.Timer, listener: Function, thisObject: any) {
        time.removeEventListener(egret.TimerEvent.TIMER, listener, thisObject);
    }

    public static Frame2Time(frame: number) {
        return Math.floor(1000 / 60 * frame);
    }



    /**
     * 随机
     * @param min
     * @param max
     * @returns {any}
     */
    public static random(min, max) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return rand;
    }

    /**
     * 设置灰化
     * node : 显示对象
     * isGray : 默认灰化，false清除灰化
     */
    public static setGray(node: egret.DisplayObject, isGray = true) {
        if (isGray) {
            // 颜色矩阵数组
            var colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0,     0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            node.filters = [colorFlilter];
        } else {
            node.filters = [];
        }
    }

    /**
     * 设置对象的属性
     * 
     */
    public static setProps(obj:any, objProperty:Object, objAnchor?:Array<number>) {
        for (var i in objProperty) {
            obj[i] = objProperty[i];
        }
        if(objAnchor){
            obj.anchorOffsetX = obj.width * objAnchor[0];
            obj.anchorOffsetY = obj.height * objAnchor[1];
        }
    }
    /**
     * ===================================================================================================================================
     */

    static giveMask(obj:any,nSizeEcllipse:number=0){
        var maskShape = new egret.Shape();
        maskShape.graphics.beginFill(0x000000);
        // maskShape.graphics.drawRect(0,0,obj.width,obj.height);
        maskShape.graphics.drawRoundRect(0, 0, obj.width, obj.height, nSizeEcllipse, nSizeEcllipse);
        maskShape.graphics.endFill();
        this.setProps(maskShape,{x:obj.x-obj.anchorOffsetX,y:obj.y-obj.anchorOffsetY});
        if(obj.parent)  obj.parent.addChild(maskShape);
        obj.mask = maskShape;
        return maskShape;
    }


}