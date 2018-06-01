
var UserInfo = require("../interface/UserInfo");

// module.exports = {
//     socketsUser : {}, // key值是uId，获取对应的socket
//     usersInfo : {}, // key值是socket.io，获取对应玩家信息UserInfo
//     roomsInfo : {}, // key值是idRoom，获取对应房间信息RoomInfo
//     idsRoomUsing : [], // 当前使用中的房间ID数组
// };

exports.socketsUser = {}; // key值是uId，获取对应的socket
exports.usersInfo = {}; // key值是socket.io，获取对应玩家信息UserInfo
exports.roomsInfo = {}; // key值是idRoom，获取对应房间信息RoomInfo
exports.idsRoomUsing = []; // 当前使用中的房间ID数组

exports.newUser = function(objInfoUser, socket){
    this.socketsUser[objInfoUser.uId] = socket;
    this.usersInfo[socket.id] = new UserInfo(objInfoUser.uId, objInfoUser.nick, objInfoUser.photo);
}


