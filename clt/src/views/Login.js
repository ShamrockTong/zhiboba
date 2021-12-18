import React, { useState } from 'react'
import { Input, List,Button,Toast } from 'antd-mobile'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import base from './utils/baseUrl';

const Login = () =>{
    const history = useHistory()
    let username;
    let pwd;
    return (
        <List
          style={{
            '--prefix-width': '6em',
          }} className="main"
        >
          <List.Item title='用户名'>
            <Input placeholder='请输入用户名' clearable onChange={(value)=>{
                username = value
            }}/>
          </List.Item>
          <List.Item title='密码'>
            <Input placeholder='请输入密码' clearable type='password' onChange={(value)=>{
                pwd = value
            }}/>
          </List.Item>
          <br/>
          <Button block color='primary' size='large' onClick={()=>{
              console.log(username,pwd);
              axios.post(base+'login', {
                username: username,
                pwd: pwd
            }).then(function (res) {
            console.log(res.data.success);
            if(res.data.success){
                console.log('登录成功');
                Toast.show({
                  content: '登陆成功  ',
                  position: 'bottom',
                })
                const data = {
                    username: username,
                    pwd: pwd
                }
                console.log(data);
                let date = new Date();
                date.setDate(date.getDate() + 7)
                document.cookie = `username=${username};expires=` + date
                document.cookie = `pwd=${pwd};expires=` + date

                // webStorage存储技术
                localStorage.setItem('userInfo',JSON.stringify(data));

                history.push('/user')
            }else{
                console.log('登陆失败');
                if(!username||!pwd){
                  Toast.show({
                    content: '用户名或密码不能为空',
                    position: 'bottom',
                  })
                }else{
                  Toast.show({
                  content: '用户名或密码错误',
                  position: 'bottom',
                })}
            }
            })
            .catch(function (error) {
                console.log(error);
            });
          }}>
          登录
        </Button>
        <br/>
          <Button block color='primary' size='large' onClick={()=>{
              history.push('./Reg')
          }}>

          注册
        </Button>
        </List>
    )
    
}
export default Login