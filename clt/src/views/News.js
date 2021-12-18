
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import  { useDispatch } from 'react-redux'
import {Input ,Button ,Tabs,Swiper,List,Image} from 'antd-mobile/2x'
import axios from 'axios';
import { StarFill } from 'antd-mobile-icons'
import base from './utils/baseUrl';

const News = ()=>{
    const teamIconSize = 40
    const [key,setKey] = useState('all')
    const [match,setMatch] = useState([])
    const history = useHistory()

    useEffect(async()=>{
        const _match = await axios.post(base+'getAllMatch')
        setMatch(_match.data.data)
    },[])

    return (
        <div className="main">
            <div className='nav'>
                <Tabs defaultActiveKey='all' onChange={key=> setKey(key)} className='navfont'>
                <Tabs.Tab title='重要' key='important' defaultActiveKey/>
                <Tabs.Tab title='全部' key='all'/>
                <Tabs.Tab title='完赛' key='finish'/>
                <Tabs.Tab title='NBA' key='nba'/>
                <Tabs.Tab title='CBA' key='cba'/>
                <Tabs.Tab title='足球' key='football'/>
                <Tabs.Tab title='电竞' key='gaming'/>
                </Tabs>
                </div>
            <div className='hct'>
              { key==='all' && (
                  <div>
                        <div className='matchheader'>
                            2008年6月18日 星期三
                        </div>
                        {match.map(item=>{
                            return(
                            <div className='match' key={item._id}>
                                <div>{item.matchtime}</div>
                                <div>
                                <StarFill fontSize={teamIconSize} color='green'/>
                                {item.hometeam}
                                </div>
                                <div className=''>
                                <p>{item.gametype}</p>
                                <p><span>{item.htscore}</span>—
                                <span>{item.atscore}</span></p>
                                <p style={{color:'darkgray'}}>{item.live}</p>
                                </div>
                                <div>
                                <StarFill fontSize={teamIconSize} color='yellow'/>
                                {item.awayteam}</div>
                                <div style={{color:"darkgray"}}>完赛</div>
                            </div>
                            )
                        })}
                </div>
                ) }
            </div>
        </div>
    )
}

export default News