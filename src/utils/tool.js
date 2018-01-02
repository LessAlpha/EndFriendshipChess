var datagame = require('../data/datagame');
var conf = require('../config/conf');

exports.generateIdRoom = function(){
    var strId = '';
    for(var i=0; i<6; i++){
        strId += Math.ceil(Math.random()*9);
    }
    var idRoom = parseInt(strId);
    if(datagame.idsRoomUsing.indexOf(idRoom)==-1){
        datagame.idsRoomUsing.push(idRoom);
        return idRoom;
    } else return generateIdRoom();
};
exports.reclaimIdRoom = function(idRoom){

};

exports.getRoomByUserInfo = function(userInfo){
    return datagame.roomsInfo[userInfo.nIdRoom];
};

exports.getSocketByUId = function(uId) {
    return datagame.socketsUser[uId];
};
exports.getUserInfoBySocket = function(socket) {
    return datagame.usersInfo[socket.id];
};

exports.gridLocalToGlobal = function(room, userInfo, fly) {
    var nGlobal = fly.nIndGridLocal;
    if(fly.nIndGridLocal<=conf.SumGridsPublic) {// on public road
        nGlobal = nGlobal + userInfo.nPos*(conf.SumGridsPublic/room.nSumUser);
        if(nGlobal>conf.SumGridsPublic)     nGlobal -= conf.SumGridsPublic;
        console.log('************************************************************');
        console.log('nPos/nLocal/nGlobal', userInfo.nPos, fly.nIndGridLocal, nGlobal);
        console.log('************************************************************');
    }
    return nGlobal;
};
