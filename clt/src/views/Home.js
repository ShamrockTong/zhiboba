import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import  { useDispatch } from 'react-redux'
import {Input ,Button ,Tabs,Swiper,List,Image} from 'antd-mobile/2x'
import axios from 'axios';
import base from './utils/baseUrl';

const Home = ()=>{
    const picwidth = 90
    const picheight = 60
    const [key,setKey] = useState('news')
    const [news,setNews] = useState([])
    const history = useHistory()
    useEffect(async()=>{
        const _news = await axios.post(base+'getAllNews')
        setNews(_news.data.data)
    },[])
    
    return(
        <div className={'main'}>
                <div className='nav'>
                <Tabs defaultActiveKey='news' onChange={key=> setKey(key)} className='navfont'>
                <Tabs.Tab title='最新' key='news' defaultActiveKey/>
                <Tabs.Tab title='NBA' key='nba'/>
                <Tabs.Tab title='CBA' key='cba'/>
                <Tabs.Tab title='勇士' key='worried'/>
                <Tabs.Tab title='湖人' key='laker'/>
                <Tabs.Tab title='篮网' key='nets'/>
                <Tabs.Tab title='综合' key='synthesize'/>
                </Tabs>

                </div>
            <div className={'hct'}>
            <List>
          {/* <List.Item>1</List.Item> */}
        
            {key === 'news' && (
            // 最新
                // <div>
                //     {news.map(item=>{
                //         return (
                //         <div key={item._id} onClick={()=>{
                //             history.push('/detail?id='+item._id)
                //         }}>
                //             <p>标题：{item.title}</p>
                //             <p>时间：{item.createdAt}</p>
                //         <hr/>    
                //         </div>
                //         )
                //     })}
                // </div>
                <div>
                    
                {/* {news.map(item=>{
                    return (
                    <List.Item key={item._id} title={item.title} onClick={()=>{
                            history.push('/detail?id='+item._id)
                    }}>
                            时间：{item.createdAt}
                    </List.Item>
                    )
                })} */}
                    <List>
                    {news.map(item => {
                            return (
                            <List.Item
                            key={item._id}
                            onClick={()=>{
                                history.push('/detail?id='+item._id)
                        }}
                            prefix={
                                <Image
                                // src='https://fakeimg.pl/300/'
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
                
            )}
            {key === 'nba' && (
            // Nba
                <div>
            
                    {/* {news.map(item=>{
                        if(item.classify=='nba'){
                            return (
                            <List.Item key={item._id} title={item.title} onClick={()=>{
                                    history.push('/detail?id='+item._id)
                            }}>
                                    时间：{item.createdAt}
                            </List.Item>
                            )
                        }
                    })} */}
                    <List>
                        {news.map(item => {
                            if(item.classify=='nba'){
                            return (
                            <List.Item
                            key={item._id}
                            onClick={()=>{
                                history.push('/detail?id='+item._id)
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
                            )}
            })}
        </List>
                </div>
            )}
            {key === 'cba' && (
            // cba
                <div>
                  {news.map(item => {
                            if(item.classify=='cba'){
                            return (
                            <List.Item
                            key={item._id}
                            onClick={()=>{
                                history.push('/detail?id='+item._id)
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
                            )}
                        })}
                </div>
            )}
            
            </List>
                </div>
            </div>
         )
    
}
export default Home 