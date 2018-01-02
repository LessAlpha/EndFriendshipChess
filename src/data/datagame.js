
module.exports = {
    socketsUser : {}, // key值是uId，获取对应的socket
    usersInfo : {}, // key值是socket.io，获取对应玩家信息UserInfo
    roomsInfo : {}, // key值是idRoom，获取对应房间信息RoomInfo
    idsRoomUsing : [], // 当前使用中的房间ID数组
};
