const express = require('express');

const  router = express.Router();

const Match = require("../model/match")
 
// 添加新闻
router.post('/AddMatch', async (req,res)=>{
    const {matchtime,hometeam,awayteam,htscore,atscore,live,gametype} = req.body;
    
    // 数据过滤
    if(!matchtime||!hometeam||!awayteam||!htscore||!atscore||!live||!gametype) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
        await Match.create({
          matchtime,
          hometeam,
          awayteam,
          htscore,
          atscore,
          live,
          gametype,
        })
        res.send({success:true,info:'添加成功'})

    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }


})

// 获取新闻列表
router.post('/getAllmatch', async (req,res)=>{
    // let { page,limit,title } = req.body;
    //  page = page || 1; // 当前第几页
    //  limit = limit || 50; // 单页返回的条数限制

      // 初始化 查询条件      
      // let where = {  }
      // 按名字查找
      // if(title)  where.title = title
    
    // 
      // const skip =  (page - 1) * limit; // 查询的起点（偏移量）
      try {
        let matchList = await Match.find() // 分页查询
        // let count = await News.count(where) // 获取符合条件的总数
        res.send({success:true,info:'查询成功',data:matchList});
      }catch(e){
          console.log(e)
        res.send({success:false,info:'获取失败'})
      }

})

//新闻详情
// router.post('/newsdetail',async (req,res)=>{

//     const { id } = req.body;
//     if(!id)  res.send({success:false,info:'请一定要传入id'})

//     try {
//         let newsdetail = await News.findById(id) // 分页查询
      
//         res.send({success:true,info:'查询成功',data:newsdetail});
//       }catch(e){
         
//         res.send({success:false,info:'获取失败'})
//       }
// })



module.exports = router;