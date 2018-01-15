/**
 * ========================================
 * sdk调试包
 * ========================================
 */
module AGame {
    /**
     * 日志等级
     */
    export enum LogLevel {
        None,
        Error,
        Warn,
        Info,
        Debug,
        Trace,
        All,
    }
    /**
     * 日志等级名
     */
    const nameList: string[] = ["", "Error", "Warn", "Info", "Debug", "Trace"];
    /**
     * 调试等级
     */
    export var logLevel: LogLevel = LogLevel.Info;
    /**
     * 日志
     */
    function log(level: LogLevel, params: any[]): void {
        if (logLevel == LogLevel.None) return;
        if (level > logLevel) return;
        var logName: string = "[" + nameList[level] + "]";
        params.unshift(logName);
        if (egret.Capabilities.runtimeType=="web") {
            // params.unshift(game.utils.DateUtils.formatTime(App.nowTime, "[c]"));
            switch (level) {
                case LogLevel.Error:
                    console.error.apply(console, params);
                    break;
                case LogLevel.Warn:
                    console.warn.apply(console, params);
                    break;
                case LogLevel.Info:
                    console.info.apply(console, params);
                    break;
                case LogLevel.Debug:
                    console.log.apply(console, params);
                    break;
                case LogLevel.Trace:
                default:
                    console.debug.apply(console, params);
                    break;
            }
        } else {
            params.map((value: any, index: number, array: any[]) => {
                if (typeof value == "object") {
                    try {
                        array[index] = JSON.stringify(value);
                    } catch (error) {
                        egret.error(error);
                    }
                }
            });
            var text: string = params.join(" -> ");
            switch (level) {
                case LogLevel.Error:
                    egret.error(text);
                    break;
                case LogLevel.Warn:
                    egret.warn(text);
                    break;
                case LogLevel.Info:
                case LogLevel.Debug:
                case LogLevel.Trace:
                default:
                    egret.log(text);
                    break;
            }
        }
    }
    export function isDebugEnabled(): boolean {
        return logLevel >= LogLevel.Debug;
    }
    export function isTraceEnabled(): boolean {
        return logLevel >= LogLevel.Trace;
    }
    export function error(...args: any[]): void {
        log(LogLevel.Error, args);
    }
    export function warn(...args: any[]): void {
        log(LogLevel.Warn, args);
    }
    export function info(...args: any[]): void {
        log(LogLevel.Info, args);
    }
    export function debug(...args: any[]): void {
        log(LogLevel.Debug, args);
    }
    export function trace(...args: any[]): void {
        log(LogLevel.Trace, args);
    }
}