const express = require('express');

const  router = express.Router();

const News = require("../model/news")
 
// 添加新闻
router.post('/news', async (req,res)=>{
    const { title,context,writer,classify} = req.body;
    
    // 数据过滤
    if(!title||!context||!writer||!classify) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
        await News.create({
            title,
            context,
            writer,
            classify
        })
        res.send({success:true,info:'添加成功'})

    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }


})

// 获取新闻列表
router.post('/getAllNews', async (req,res)=>{
    // let { page,limit,title } = req.body;
    //  page = page || 1; // 当前第几页
    //  limit = limit || 50; // 单页返回的条数限制

      // 初始化 查询条件      
      // let where = {  }
      // 按名字查找
      // if(title)  where.title = title
    
    
      // const skip =  (page - 1) * limit; // 查询的起点（偏移量）
      try {
        let newsList = await News.find() // 分页查询
        // let count = await News.count(whe ) // 获取符合条件的总数
        res.send({success:true,info:'查询成功',data:newsList});
      }catch(e){
          console.log(e)
        res.send({success:false,info:'获取失败'})
      }

})

//新闻详情
router.post('/newsdetail',async (req,res)=>{

    const { id } = req.body;
    if(!id)  res.send({success:false,info:'请一定要传入id'})

    try {
        let newsdetail = await News.findById(id) // 分页查询
      
        res.send({success:true,info:'查询成功',data:newsdetail});
      }catch(e){
         
        res.send({success:false,info:'获取失败'})
      }
})

router.post('/detailNewList', async (req,res)=>{
  let page = parseInt(Math.random()*6)+1;
  let limit = 3;
  const skip =  ( page - 1 ) * limit; // 查询的起点（偏移量）
    try {
      let news = await News.find({},{},{skip,limit}) // 分页查询
      // let count = await News.count(where) // 获取符合条件的总数
      res.send({success:true,info:'查询成功',data:news});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



module.exports = router;