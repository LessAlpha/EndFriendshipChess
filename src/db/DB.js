var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost/fly_chess';
var DB;
DB = function () {

    this.db = null;

    this.connectDB = function (callback) {
        var t = this;
        MongoClient.connect(DB_CONN_STR, function (err, db) {
            if (!err)     t.db = db;
            else    console.log(err);
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