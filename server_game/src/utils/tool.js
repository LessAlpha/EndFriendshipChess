/**
 * 工具类函数
 */

var conf = require('../config/conf');


exports.gridLocalToGlobal = function(room, userInfo, fly) {
    var nGlobal = fly.nIndGridLocal;
    if(fly.nIndGridLocal<=conf.SumGridsPublic) {// on public road
        nGlobal = nGlobal + userInfo.nPos*(conf.SumGridsPublic/room.nSumUser);
        if(nGlobal>conf.SumGridsPublic)     nGlobal -= conf.SumGridsPublic;
        console.log('nPos/nLocal/nGlobal', userInfo.nPos, fly.nIndGridLocal, nGlobal);
    }
    return nGlobal;
};
