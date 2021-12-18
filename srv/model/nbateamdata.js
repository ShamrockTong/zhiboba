const mongoose = require('mongoose')


// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var nbateamSchema = mongoose.Schema({
    list: String,
    teamname: String,
    win: String,
    lose: String,
    shenglv: String,
    shengcha: String,
    jinkuang: String
});


// mongoose.model(对应的是我们的数据库中哪个表，表的描述)
var Nbateam = mongoose.model('nbateam', nbateamSchema);


module.exports = Nbateam;