const express = require('express');

const  router = express.Router();
// const utils = require('utility'); //  npm i utility   使用这个模块的md5方法来实现md5加密
const User = require('../model/user')
// 引入token
const jwt = require('jsonwebtoken')

// 用户注册

router.post('/reg', async (req,res)=>{

    const { username,pwd } = req.body;
   

    if(!username ) return res.send({success:false,info:'请输入正确的用户名'});
    if(!pwd ) return res.send({success:false,info:'请输入正确的用户名'});
    
    try {
        const user = await  User.findOne({ username });
        if(user)  return res.send({success:false,info:'改用户名已被使用'});

        const _d = new Date();
        const _t = _d.getTime();

        // let finalpassword = utils.md5( `${pwd}${_t}` ) // 对用户密码进行加密

        await User.create({
            username,
            pwd, 
            createdAt: _d,
        })

        res.send({success:true,info:'注册成功'})

    }catch(e){

        res.send({success:false,info:'注册失败'})

    }
})


// 用户登录

router.post('/login', async (req,res)=>{

    const { username,pwd } = req.body;
    console.log(username,pwd)
    if(!username ) return res.send({success:false,info:'请输入正确的用户名'});
    if(!pwd ) return res.send({success:false,info:'请输入正确的用户名'});

    try {
        const user = await User.findOne({ username });  
        if(!user)  return res.send({success:false,info:'用户或密码错误'});

        // 密码比对

        // const _d = user.createdAt;
        // const _t = _d.getTime();

        // let finalpassword = utils.md5( `${pwd}${_t}` ) // 对用户密码进行加密
   

        if( user.pwd!=pwd) return res.send({success:false,info:'用户或密码错误'});
        
        // 生成一个token
        const token = jwt.sign({
            uid:user._id,
        },'123456',{
            expiresIn: 60*60*1000
        })
        
        // req.session.username = user.username;
         res.send({success:true,info:'登录成功',token});

    }catch(e){

        res.send({success:false,info:'登录失败'})

    }

})



// router.post('/update', async(req,res)=>{


//     const { username,pwd,sex} = req.body;
//     if(!username ) return res.send({success:false,info:'请输入正确的用户名'});
  
//     const user = await  User.findOne({ username });
//     if(!user)  return res.send({success:false,info:'该用户不存在'});

//     let updateData = {};

//     // 如果用户传入手机 那么updateData添加一个phone的属性
//     if)   updateData =; 
//     // 如果用户传入密码  那么updateData添加一个password的属性 遵循 password的加密规则
//     if(pwd){
//         updateData.pwd =  utils.md5( `${pwd}${user.createdAt.getTime()}` )
//     }
//     // 如果用户传入sex 那么updateData添加一个sex的属性
//     if(sex) updateData.sex = sex;


//     try{

//         await User.update({username},updateData)
//         res.send({success:true,info:'更新成功'});
        

//     }catch(e){
//         res.send({success:false,info:'更新失败'});

//     }


// })


router.get('/login',(req,res)=>{
    res.render('login.html')
})

router.get('/reg', (req,res)=>{
    res.render('reg.html')
} )

module.exports = router;

