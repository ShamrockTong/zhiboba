import React, { useState } from 'react'
import { Input, List,Button,Toast } from 'antd-mobile'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react'
import { MessageOutline,UploadOutline } from 'antd-mobile-icons'
import base from './utils/baseUrl';

const Video = ()=>{
    const iconSize = '20px'
    const [key,setKey] = useState([])
    const [video,setVideo] = useState([])
        useEffect(async()=>{
        const _video = await axios.post(base+'getAllVideo')
        setVideo(_video.data.data)
        },[])
    return (
        <div className="main">
            {video.map(item=>{
                return (
            <div className='videobox' key={item._id}>
            <h1>{item.title}</h1>
            <video width="100%" height="210" src={'./assets/video/'+item.src} poster={'./assets/img/1.png'} controls="controls">
            </video>
            <div className='info'>
                <img src={'./assets/img/'+item.writerProfile}/>
                <span className='writer'>{item.writer}</span>
                <span className='comment'><MessageOutline fontSize={iconSize} style={{margin:'0 3px'}}/>{item.comment}<UploadOutline fontSize={iconSize} style={{margin:'0 5px'}}/></span>
            </div>
            </div>
                )
            })}
        </div>
    )
}

export default Video