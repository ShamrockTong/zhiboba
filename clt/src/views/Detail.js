import {useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router-dom'
import  { useDispatch } from 'react-redux'
import {Input ,Button ,Tabs,Swiper,NavBar,Space,Image,List} from 'antd-mobile/2x'
import {LikeOutline,SendOutline,FingerdownOutline} from 'antd-mobile-icons'
import base from './utils/baseUrl';

import axios from 'axios';
const Detail = ()=>{
    const [detail,setDetail] = useState([])
    const [detailnews,setDetailnews] = useState([])
    const location = useLocation();
    let urlParams = new URLSearchParams(location.search)
    let id = urlParams.get('id')
    const history = useHistory();
    const iconSize = '16px'
    
    const picwidth = 90
    const picheight = 60

    const comment = [
        {
            username:'欧耶',
            context:'欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶',
            time:'12-18 10:59',
            up:'1747',
            down:'86'
        },
        {
            username:'？？？',
            context:'耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧耶欧',
            time:'12-18 10:59',
            up:'520',
            down:'0'
        },
        {
            username:'傻居居',
            context:'我喜欢吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉',
            time:'12-18 10:59',
            up:'888',
            down:'6'
        },
    ]

    useEffect(async ()=>{
        const _detail = await axios.post(base+'newsdetail',{id})
        setDetail(_detail.data.data)
        const _detailnews = await axios.post(base+'detailNewList')
        setDetailnews(_detailnews.data.data)
    },[id])
    return(
        <div className="main">
            <NavBar style={{zIndex:'999'}} back='返回' onBack={()=>history.go(-1)} className='detailheader'>
            </NavBar>
        <div className='context'>
            <h1>{detail.title}</h1>
            <h4>Twitter 1小时前</h4>
            <img src="./assets/img/1.png" />   
            <p style={{marginTop:'15px'}}>{detail.context}</p>
        </div>
        <div style={{textAlign:"center",marginTop:'30px'}}>
            <Space wrap  style={{zIndex:'0'}}>
                <Button block size='Large' shape='rounded' style={{padding:'8px 30px'}}>
                <LikeOutline style={{fontSize:iconSize,color:"darkgray"}}/>888
                </Button>
                <Button block size='Large' shape='rounded' style={{padding:'8px 30px'}}>
                <SendOutline style={{fontSize:iconSize,color:"darkgray"}}/>分享
                </Button>
            </Space>
        </div>
        <div>
        <List style={{marginTop:'15px'}}>
                    {detailnews.map(item => {
                            return (
                            <List.Item
                            key={item._id}
                            onClick={()=>{
                                history.replace('/detail?id='+item._id)
                                document.querySelector('.main').scrollTop = 0
                            }}
                            prefix={
                                <Image
                                src='./assets/img/1.png'
                                style={{overflow:'hidden'}}
                                fit='cover'
                                width={picwidth}
                                height={picheight}
                                />
                            }
                            
                            description={'1分钟前'}
                            >
                            <p className='hometitle'>{item.title}</p>
                            </List.Item>
                            )
            })}
        </List>
        </div>
            <div className='newscomment'>
                 <div className='matchheader'>
                            最新评论（{comment.length}）
                </div>

            {comment.map(item=>{
                return (
                    <div className='detailcomment' key={item.username}>
                    <div className='commenthead'>
                        <img src='./assets/img/head.jpg'/>
                    </div>
                    <div className='comment'>
                        <div className='commentheader'>
                            <div className='commentusername'>{item.username}</div>
                            <div className='commentupdown'><LikeOutline />{item.up}&nbsp;&nbsp;&nbsp;<FingerdownOutline />{item.down}</div>
                        </div>
                        <div className='commentcontext'>{item.context}</div>
                        <div className='commenttime'>{item.time}</div>

                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}
export default Detail 