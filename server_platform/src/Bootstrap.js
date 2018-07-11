
// var conf = require('../config/conf');
// var protoHandler = require('../proto/ProtoHandler');

// var roomModel = require('../model/RoomModel');
// var playModel = require('../model/PlayModel');

var Bootstrap = function(){

    this.connect = function(io) {
        var t = this;
        this.io = io;
        this.io.on("connection", function(socket){// Socket实例
            console.log('connection');
            socket.on('disconnect', function(data) {t.disConnect(socket, data);});
            socket.on('toServer', function(data) {
                console.log('toServer', socket.id, data.desc);
                socket.emit(101, {desc: "msg to client"});
            })
        });
    };

    this.receiveData = function(socket, cmd, data) {
        // var objReq = protoHandler.decodeMessage(cmd, data);
        // // console.log('receive - ', cmd, objReq);
        // switch(cmd) {
        //     case conf.Cmds.LOGIN:
        //         roomModel.handle(cmd, socket, objReq);
        //         break;
        //     case conf.Cmds.START_GAME:
        //         playModel.handle(cmd, socket, objReq);
        //         break;
        // }
    };

    this.disConnect = function(socket, data){
        console.log('someone disconnected', socket.id);
        
    };
    
};


module.exports = Bootstrap;