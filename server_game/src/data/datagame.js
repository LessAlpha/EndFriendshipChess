/**
 * 游戏在线全局数据
 */

var UserInfo = require("../interface/UserInfo");

exports.socketsUser = {}; // key值是uId，获取对应的socket

exports.usersInfo = {}; // key值是socket.id，获取对应玩家信息UserInfo

exports.roomsInfo = {}; // key值是idRoom，获取对应房间信息RoomInfo

exports.idsRoomUsing = []; // 当前使用中的房间ID数组

/** 新生成一个用户对象 */
exports.newUser = function(objInfoUser, socket){
    this.socketsUser[objInfoUser.uId] = socket;
    this.usersInfo[socket.id] = new UserInfo(objInfoUser.uId, objInfoUser.nick, objInfoUser.photo);
}

/** 生成可用的房间ID */
exports.generateIdRoom = function() {
    var strId;
    var idRoom;
    do {
        strId = '';
        for(var i=0; i<6; i++){
            strId += Math.ceil(Math.random()*9);
        }
        idRoom = parseInt(strId);
    } while(this.idsRoomUsing.indexOf(idRoom)!=-1)
    this.idsRoomUsing.push(idRoom);
    return idRoom;
};

/** 根据uId获取对应的socket */
exports.getSocketByUserId = function(userId) {
    let socket = this.socketsUser[userId];
    if(socket)      return socket;
    else    return null;
}

/** 根据socketId获取userinfo */
exports.getUserInfoBySocket = function(socketId) {
    let userInfo = this.usersInfo[socketId];
    if(userInfo)      return userInfo;
    else    return null;
}

exports.getRoomByUserInfo = function(userInfo){
    return datagame.roomsInfo[userInfo.nIdRoom];
};



