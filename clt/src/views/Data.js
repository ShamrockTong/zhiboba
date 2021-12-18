import {Tabs,List} from 'antd-mobile/2x'
import {useEffect, useState} from 'react'
import axios from 'axios';
import base from './utils/baseUrl';

const Data = ()=>{
    const [key,setKey] = useState('nba')
    const [datakey,setDatakey] = useState('paiming')
    const [nbateamlist,setNbateamlist] = useState([])
    useEffect(async()=>{
        const _nbateamlist = await axios.post(base+'NbaTeamData')
        setNbateamlist(_nbateamlist.data.data)
    },[])
    return (
        <div className="main">
            <div className='nav'>
                {/* <Tabs onChange={key=> setKey(key) }>
                <Tabs.Tab title='最新' key="news" />
                <Tabs.Tab title='NBA' key='nba' />
                <Tabs.Tab title='CBA' key='cba' />
            </Tabs> */}

                <Tabs defaultActiveKey='nba' onChange={key=> setKey(key)} className='navfont'>
                <Tabs.Tab title='NBA' key='nba'/>
                <Tabs.Tab title='CBA' key='cba'/>
                <Tabs.Tab title='英超' key='yingchao'/>
                <Tabs.Tab title='法甲' key='fajia'/>
                <Tabs.Tab title='西甲' key='xijia'/>
                <Tabs.Tab title='意甲' key='yijia'/>
                <Tabs.Tab title='中超' key='zhongchao'/>
                <Tabs.Tab title='欧冠' key='ouguan'/>
                </Tabs>
                </div>
            <div className='hct'>

            {key === 'nba' && (
            // Nba
            <div>
                <div className='nav'>
                <Tabs defaultActiveKey='paiming' onChange={datakey=> setDatakey(datakey)} className='navfont datanav'>
                <Tabs.Tab title='21-22' key='2122'/>
                <Tabs.Tab title='赛程' key='saicheng'/>
                <Tabs.Tab title='排名' key='paiming'/>
                <Tabs.Tab title='球员榜' key='qiuyuanbang'/>
                <Tabs.Tab title='球队榜' key='qiuduibang'/>
                <Tabs.Tab title='新秀' key='xinxiu'/>
                <Tabs.Tab title='交易' key='jiaoyi'/>
                <Tabs.Tab title='选秀榜' key='xuanxiubang'/>
                <Tabs.Tab title='季后赛' key='playoffs'/>
                </Tabs>
                </div>
                <div className='datatable'>
                     {datakey === 'paiming' && (
                        <table  className='teamlist' rules='rows'>
                        <thead>
                        <tr>
                          <th>排名</th>
                          <th>球队</th>
                          <th>胜</th>
                          <th>负</th>
                          <th>胜率</th>
                          <th>胜差</th>
                          <th>近况</th>
                        </tr>
                        </thead>
                        <tbody className='teamlisttbody'> 
                        {nbateamlist.map(item=>{
                            return (
                                <tr key={item._id} >
                                <td>{item.list}</td>
                                <td>{item.teamname}</td>
                                <td>{item.win}</td>
                                <td>{item.lose}</td>
                                <td>{item.shenglv}</td>
                                <td>{item.shengcha}</td>
                                <td>{item.jinkuang}</td>
                              </tr>
                            )
                        })}
                        </tbody>
                      </table>
                     )}
                     {datakey === 'qiuyuanbang' && (
                         '球员榜'
                     )}
                     </div>
                </div>
            )}
            {key === 'cba' && (
            // cba
            <div>
            <div className='nav'>
            <Tabs defaultActiveKey='paiming' onChange={datakey=> setDatakey(datakey)} className='navfont datanav'>
            <Tabs.Tab title='21-22' key='2122'/>
            <Tabs.Tab title='赛程' key='saicheng'/>
            <Tabs.Tab title='排名' key='paiming'/>
            <Tabs.Tab title='球员榜' key='qiuyuanbang'/>
            <Tabs.Tab title='球队榜' key='qiuduibang'/>
            <Tabs.Tab title='新秀' key='xinxiu'/>
            <Tabs.Tab title='交易' key='jiaoyi'/>
            <Tabs.Tab title='选秀榜' key='xuanxiubang'/>
            <Tabs.Tab title='季后赛' key='playoffs'/>
            </Tabs>
            </div>
            <div className='datatable'>
                 {datakey === 'paiming' && (
                    <table  className='teamlist' rules='rows'>
                    <thead>
                    <tr>
                      <th>排名</th>
                      <th>球队</th>
                      <th>胜</th>
                      <th>负</th>
                      <th>胜率</th>
                      <th>胜差</th>
                      <th>近况</th>
                    </tr>
                    </thead>
                    <tbody className='teamlisttbody'> 
                    {nbateamlist.map(item=>{
                        return (
                            <tr key={item._id} >
                            <td>{item.list}</td>
                            <td>{item.teamname}</td>
                            <td>{item.win}</td>
                            <td>{item.lose}</td>
                            <td>{item.shenglv}</td>
                            <td>{item.shengcha}</td>
                            <td>{item.jinkuang}</td>
                          </tr>
                        )
                    })}
                    </tbody>
                  </table>
                 )}
                 {datakey === 'qiuyuanbang' && (
                     '球员榜'
                 )}
                 </div>
            </div>
            )}
            </div>
        </div>
    )
}

export default Data