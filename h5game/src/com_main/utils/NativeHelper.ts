
class NativeHelper {

    public static forceShowLoadingMsg: boolean = false;

    public static destroyNativeSplash(): void {
        egret.ExternalInterface.call("destroySplash", "");
    }

    public static isNative(): boolean {
        if (egret.RuntimeType.NATIVE == egret.Capabilities.runtimeType) {
            return true;
        }
        return false;
    }
}