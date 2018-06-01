/**
 * 数据库模块
 * Windows任务：打开cmd执行命令 net start MongoDB 启动服务，net stop MongoDB 关闭服务
 */

var MongoClient = require('mongodb').MongoClient;
var DB_HREF = 'mongodb://127.0.0.1:20000/';// 数据库服务器地址
var DB_NAME = "game_fly";// 数据库名字，为空的话则默认选择第一个数据库

var DB = function () {

    this.db = null;

    this.connectDB = function (callback) {
        var t = this;
        MongoClient.connect(DB_HREF + DB_NAME, function (err, db) {
            if (!err)     t.db = db;
            callback(err, db);
        });
    }

    this.insertData = function (strNameTable, dataInsert, callback) {
        if (!this.db)    return;
        var collection = this.db.collection(strNameTable);
        collection.insert(dataInsert, function (err, result) {
            if (err) console.log('Error:' + err);
            callback(err, result);
        });
    }

    this.selectData = function (strNameTable, dataSelect, callback) {
        if (!this.db)    return;
        var collection = this.db.collection(strNameTable);
        collection.find(dataSelect).toArray(function (err, result) {
            if (err) console.log('Error:' + err);
            callback(err, result);
        });
    }

    this.updateData = function (strNameTable, dataOrigin, dataUpdate, callback) {
        if (!this.db)    return;
        var collection = this.db.collection(strNameTable);
        dataUpdate = {$set: dataUpdate};
        collection.update(dataOrigin, dataUpdate, function (err, result) {
            if (err) console.log('Error:' + err);
            callback(err, result);
        });
    }

    this.delData = function (strNameTable, dataRem, callback) {
        if (!this.db)    return;
        var collection = this.db.collection(strNameTable);
        collection.remove(dataRem, function (err, result) {
            if (err) console.log('Error:' + err);
            callback(err, result);
        });
    }

    this.closeDb = function () {
        if (!this.db)    return;
        this.db.close();
    }

    this.connectDB(function (err, result) {
        console.log("database connected " + (!err ? 'succeed' : 'failed'));
    })

};

module.exports = DB;