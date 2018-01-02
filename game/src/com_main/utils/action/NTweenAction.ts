/**
 * Created   on 2016/12/22.
 */
enum FrameType {
    FT_WAIT = 1, //等待
    FT_ATTR = 2, //属性
    FT_CALL = 3, //回调
    FT_SET = 4, //设置
}
;

class FrameData {
    public constructor(frameType, millsecond) {
        this.millsecond = millsecond;
        this.frameType = frameType;
    }

    public dispose(): void {
        this.attr = null;
        this.callback = null;
        this.target = null;
    }

    public millsecond;  //多少毫秒
    public frameType;
    public attr = {};
    public callback: Function;
    public target: any;
}

/**
 * 文档特效类
 *
 * 注意：
 * 如果有位移 create 创建的时候 endX, endY传入文档最后的坐标
 *
 * 例子：(下面每一行都是一个动作组合)
 *
 * 部门升级字体
 * 0-53帧无变化
 * 53-61帧y位移是 -367 到 23，ScaleX轴 90 - 100，Y轴 90 - 127.5
 * 61-71帧y位移是 23 到 -69，ScaleX轴 100 - 100，Y轴 127.5 - 63.5
 * 71-76帧y位移是 -69 到 -52，ScaleX轴 100 - 100，Y轴 63.5 - 100
 * （Alpha值第53-71帧为0-1）
 *
 * var titleNameAction = NTweenAction.create(this.m_pTitleName, 0, -52, false);
 * titleNameAction
 *            .wait(53)
 .set().offsetTo(0, -367).scaleTo(90, 90)   ------初始化属性
 .next(61).offsetTo(0, 23).scaleTo(100, 127.5)
 .next(71).offsetTo(0, -69).scaleTo(100, 63.5)
 .next(76).offsetTo(0, -52).scaleTo(100, 100)
 .play();

 （Alpha值第53-71帧为0-1）-------- （如果有这种跟上面帧数跨域不一样的，可以上面play()之后继续使用）

 titleNameAction
 .wait(53)
 .set().alphaTo(0)
 .next(71).alphaTo(1)
 .play();
 */
class NTweenAction {

    /**
     * 创建一个Action
     * display : 要播放动画的对象
     * endX : 结束x坐标
     * endY : 结束y坐标
     * visible : 是否一开始可见
     */
    public static create(display: egret.DisplayObject, endX = 0, endY = 0, visible = false) {
        return new NTweenAction(display, endX, endY, visible);
    }

    public static remove(display: egret.DisplayObject){
        egret.Tween.removeTweens(display);
    }

    private m_pFrames = [];
    private m_pDisplay: egret.DisplayObject;

    private m_iStartX; //起始位置x
    private m_iStartY; //起始位置y

    private m_iEndX = 0;  //结束位置x
    private m_iEndY = 0;  //结束位置y

    private m_iStartScaleX = 1; //初始的X缩放值
    private m_iStartScaleY = 1; //初始的Y缩放值

    private m_iDelay = 0; //开始延迟时间

    private m_bIsLoop: boolean = false; //是否循环波


    private m_iPreFrame = 0;

    public constructor(display: egret.DisplayObject, endX, endY, visible) {
        this.m_iStartX = display.x;
        this.m_iStartY = display.y;
        this.m_pDisplay = display;
        this.m_iEndX = endX;
        this.m_iEndY = endY;
        this.m_pDisplay.visible = visible;
    }

    public clear(): void {
        var frame: FrameData;
        for (var i: number = 0; i < this.m_pFrames.length; i++) {
            frame = this.m_pFrames[i];
            frame.dispose();
            frame = null;
        }
        this.m_pFrames.length = 0;
    }

    public loop(bool) {
        this.m_bIsLoop = bool;
        return this;
    }

    public set endX(x) {
        this.m_iEndX = x;
    }

    public set endY(y) {
        this.m_iEndY = y;
    }

    private getOffsetX(x) {
        var rst = this.m_iStartX - (x - this.m_iEndX) / 1.44;
        return rst;
    }

    private getOffsetY(y) {
        var rst = this.m_iStartY - (y - this.m_iEndY) / 1.44;
        return rst;
    }

    private getLastFrame() {
        return <FrameData>this.m_pFrames[this.m_pFrames.length - 1];
    }

    private convertScale(scale) {
        return scale / 100;
    }

    /**
     * 等待，多少帧-多少帧
     */
    public wait(frame) {
        var frameNumber = frame - this.m_iPreFrame;
        this.m_pFrames.push(new FrameData(FrameType.FT_WAIT, Utils.Frame2Time(frameNumber)));
        this.m_iPreFrame = frame;
        return this;
    }

    /**
     * 下个动画，多少帧-多少帧
     */
    public next(frame) {
        var frameNumber = frame - this.m_iPreFrame;
        this.m_pFrames.push(new FrameData(FrameType.FT_ATTR, Utils.Frame2Time(frameNumber)));
        this.m_iPreFrame = frame;
        return this;
    }

    public delay(frame) {
        this.m_iDelay = Utils.Frame2Time(frame);
        return this;
    }

    /**
     * 直接设置属性，用于初始化
     */
    public set() {
        this.m_pFrames.push(new FrameData(FrameType.FT_SET, 0));
        var frame = this.getLastFrame();
        frame.attr['visible'] = true;  //初始化顺便设置为可见
        return this;
    }

    /**
     * 直接变化到指定位置
     * @param x
     * @param y
     * @returns {dfh3.NTweenAction}
     */
    public orderTo(x, y) {
        var frame = this.getLastFrame();
        frame.attr['x'] = x;
        frame.attr['y'] = y;
        return this;
    }

    public orderToX(x) {
        var frame = this.getLastFrame();
        frame.attr['x'] = x;
        return this;
    }

    public orderToY(y) {
        var frame = this.getLastFrame();
        frame.attr['y'] = y;
        return this;
    }

    /**
     * 偏移移动
     */
    public offsetTo(x, y) {
        var frame = this.getLastFrame();
        frame.attr['x'] = this.getOffsetX(x);
        frame.attr['y'] = this.getOffsetY(y);
        return this;
    }

    public offsetToX(x) {
        var frame = this.getLastFrame();
        frame.attr['x'] = this.getOffsetX(x);
        return this;
    }

    public offsetToY(y) {
        var frame = this.getLastFrame();
        frame.attr['y'] = this.getOffsetY(y);
        return this;
    }


    /**
     * 缩放
     * 如果只传一个参数，scaleY = scaleX
     */
    public scaleTo(scaleX, scaleY = -1) {
        if (scaleY == -1) {
            scaleY = scaleX;
        }
        var frame = this.getLastFrame();
        frame.attr['scaleX'] = this.convertScale(scaleX);
        frame.attr['scaleY'] = this.convertScale(scaleY);
        return this;
    }

    public scaleToX(scaleX) {
        var frame = this.getLastFrame();
        frame.attr['scaleX'] = this.convertScale(scaleX);
        return this;
    }

    public scaleToY(scaleY) {
        var frame = this.getLastFrame();
        frame.attr['scaleY'] = this.convertScale(scaleY);
        return this;
    }


    public baseScale(scaleX, scaleY = -1) {
        if (scaleY == -1) {
            scaleY = scaleX;
        }
        this.m_iStartScaleX = scaleX / 100;
        this.m_iStartScaleY = scaleY / 100;
        return this;
    }

    public base2Scale(scaleX, scaleY = -1) {
        if (scaleY == -1) {
            scaleY = scaleX;
        }

        scaleX = this.m_iStartScaleX * scaleX;
        scaleY = this.m_iStartScaleY * scaleY;
        var frame = this.getLastFrame();
        frame.attr['scaleX'] = this.convertScale(scaleX);
        frame.attr['scaleY'] = this.convertScale(scaleY);
        return this;
    }


    /**
     * 透明度
     */
    public alphaTo(alpha) {
        var frame = this.getLastFrame();
        frame.attr['alpha'] = alpha;
        return this;
    }

    /**
     * 旋转
     */
    public rotateTo(rotation) {
        var frame = this.getLastFrame();
        frame.attr['rotation'] = rotation;
        return this;
    }

    /**
     * 进度条
     */
    public valueTo(rotation) {
        var frame = this.getLastFrame();
        frame.attr['value'] = rotation;
        return this;
    }

    public call(callback: Function, target) {
        var frameData = new FrameData(FrameType.FT_CALL, 0);
        frameData.callback = callback;
        frameData.target = target;
        this.m_pFrames.push(frameData);
        return this;
    }

    /**
     * 播放动画
     * callback : 完成时回调
     */
    public play(callback = null, target = null) {
        var len = this.m_pFrames.length;
        var tw = egret.Tween.get(this.m_pDisplay, {loop: this.m_bIsLoop});
        if (this.m_iDelay > 0) {
            tw.wait(this.m_iDelay);
        }
        for (var i = 0; i < len; i++) {
            var frame = <FrameData>this.m_pFrames[i];
            switch (frame.frameType) {
                case FrameType.FT_WAIT: {
                    tw.wait(frame.millsecond);
                    break;
                }
                case FrameType.FT_ATTR: {
                    tw.to(frame.attr, frame.millsecond);
                    break;
                }
                case FrameType.FT_SET: {
                    tw.set(frame.attr);
                    break;
                }
                case FrameType.FT_CALL: {
                    tw.call(frame.callback, frame.target);
                    break;
                }
            }
        }


        if (callback) {
            tw.call(callback, target);
        }
        this.m_iPreFrame = 0;
        this.clear();
    }
}