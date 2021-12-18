import React, { useEffect , useState } from 'react'
import { Input, List,Button,Toast} from 'antd-mobile'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import base from './utils/baseUrl';


const User = ()=>{
    const _options = ['选择感兴趣的运动','意见反馈','用户协议','隐私政策']
    const options = _options.map((item,idx)=>{
        return(
            <List.Item onClick={()=>{}} key={idx}>{item}</List.Item>
        )
    })
    const history = useHistory()
    const data = JSON.parse(localStorage.getItem('userInfo'))
        // 判断是否已登录
        // 登录：存在username&password
        // null.username,undefined.username
        if (data && data.username) {
            return (
    <div className="main">
                    <p style={{fontSize:"20px"}}>你好，{data.username} </p>
                     <Button block color='primary' size='large' onClick={()=>{
                        localStorage.removeItem('userInfo')
                        history.push('./user/Login')
                        Toast.show({
                           content: '退出登陆成功',
                           position: 'bottom',
                          })
                         }}>
                         退出登录
                        </Button>
            <div className='person'>
                <List>
                {options}
                </List>
            {/* <List>
            <List.Item onClick={() => {}}>选择感兴趣的运动</List.Item>
            <List.Item onClick={() => {}}>意见反馈</List.Item>
            <List.Item onClick={() => {}}>用户协议</List.Item>
            <List.Item onClick={() => {}}>隐私政策</List.Item>
            </List> */}
            </div>
    </div>
            )
        }else{
            return (
                <div className="main">
                <Button block color='primary' size='large' onClick={()=>{
              history.push('./user/Login')
          }}>
              登录
        </Button>
        <div className='person'>
        <List>
                {options}
        </List>
        </div>
        </div>
            )
        }
        // if (data && data.username) {
        //     return (
        //         <div className="main">
                    
        //             <p>你好，{data.username} </p>
        //              <Button block color='primary' size='large' onClick={()=>{
        //                 localStorage.removeItem('userInfo')
        //                 history.push('./user/Login')
        //                 Toast.show({
        //                    content: '退出登陆成功',
        //                    position: 'bottom',
        //                   })
        //   }}>
        //       退出登录
        // </Button>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div className="main">还未登录
        //         <Button block color='primary' size='large' onClick={()=>{
        //       history.push('./user/Login')
        //   }}>
        //       登录
        // </Button>
        // </div>
        //     )
        // }
}

export default User