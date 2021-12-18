const mongoose = require('mongoose')


// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var matchSchema = mongoose.Schema({
    matchtime: String,
    hometeam: String,
    awayteam: String,
    htscore:String,
    atscore:String,
    live:String,
    gametype:String,
    
},{
    timestamps: true // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
});


// mongoose.model(对应的是我们的数据库中哪个表，表的描述)
var Match = mongoose.model('match', matchSchema);


module.exports = Match;