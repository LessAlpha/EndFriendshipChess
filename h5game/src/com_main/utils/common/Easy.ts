function debug(message?: any, ...optionalParams: any[]) {
    if (!DEBUG) {
        return;
    }
    if (optionalParams) {
        egret.log(message, ...optionalParams);
    } else {
        egret.log(message);
    }
}

function sayError(message?: any, ...optionalParams: any[]) {
    if (!DEBUG) return;
    console.error(message, ...optionalParams);
}

function Po(x: number, y: number):egret.Point{
	return egret.Point.create(x,y);
}