import React, { useState } from 'react'
import { Input, List,Button,Toast} from 'antd-mobile'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import base from './utils/baseUrl';

const Reg = () =>{
    const history = useHistory()
    let username;
    let pwd;
    return (
        <List className="main"
          style={{
            '--prefix-width': '6em',
          }}
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
              axios.post(base+'reg', {
                username: username,
                pwd: pwd
            }).then(function (res) {
            console.log(res.data.success);
            if(res.data.success){
                console.log('注册成功');
                Toast.show({
                  content: '注册成功',
                  position: 'bottom',
                })

                history.push('./Login')
            }else{
                console.log('注册失败');
                if(!username||!pwd){
                  Toast.show({
                    content: '用户名或密码不能为空',
                    position: 'bottom',
                  })
                }else{
                  Toast.show({
                    content: '已存在该用户名',
                    position: 'bottom',
                  })
                }
            }
            })
            .catch(function (error) {
                console.log(error);
            });
          }}>
          注册
        </Button>
        <br/>
          <Button block color='primary' size='large' onClick={()=>{
              history.push('./Login')
          }}>
              已有账号，直接登录
        </Button>
        </List>
    )
    
}
export default Reg