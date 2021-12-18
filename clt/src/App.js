import './App.css';
import { BrowserRouter , Route, Switch ,NavLink,Redirect }  from 'react-router-dom'

import { Provider } from "react-redux";

import store from "./store";
import Home from './views/Home';
import Detail from './views/Detail';
import User from './views/User'
import Data from './views/Data'
import Video from './views/Video';
import News from './views/News';
import Login from './views/Login'
import Reg from './views/Reg'
import { VideoOutline,FileOutline,UnorderedListOutline,UserOutline,AppstoreOutline } from 'antd-mobile-icons'

function App() {
  let iconSize = '30px'
  return (
        <Provider store={store}>
        <BrowserRouter>
            <>
            <div className="htop"><img src="./assets/img/icon.png" style={{width:"5%"}}/>直播吧</div>
                <Switch>
                  <Route path="/home" exact component={Home} />
                  <Route path="/detail" exact component={Detail} />
                  <Route path="/user" exact component={User} />
                  <Route path="/video" exact component={Video} />
                  <Route path="/data" exact component={Data} />
                  <Route path="/news" exact component={News} />
                  <Route path="/user/login" exact component={Login} />
                  <Route path="/user/reg" exact component={Reg} />
                  <Redirect path="/" to="/home" />
                </Switch>
                <div className='footer'>
                <NavLink
                    to="/home"
                    activeClassName="active"
                    activeStyle={{
                      color:'rgb(46, 159, 255)',
                    }}
                  >
                    <AppstoreOutline fontSize={iconSize}/>
                    新闻</NavLink>
                <NavLink
                    to="/video"
                    activeClassName="active"
                    activeStyle={{
                      color:'rgb(46, 159, 255)',
                    }}
                  >
                    <VideoOutline fontSize={iconSize}/>
                    视频</NavLink>
                <NavLink
                    to="/news"
                    activeClassName="active"
                    activeStyle={{
                      color:'rgb(46, 159, 255)',
                    }}
                  >
                  <FileOutline fontSize={iconSize}/>
                  主页</NavLink>
                <NavLink
                    to="/data"
                    activeClassName="active"
                    activeStyle={{
                      color:'rgb(46, 159, 255)',
                    }}
                  >
                    <UnorderedListOutline fontSize={iconSize}/>
                    数据</NavLink>
                <NavLink
                    to="/user"
                    activeClassName="active"
                    activeStyle={{
                      color:'rgb(46, 159, 255)',
                    }}
                  >
                    <UserOutline fontSize={iconSize}/>
                    我的</NavLink>
                </div>
            </>
        </BrowserRouter>
    </Provider>
  )
}

export default App;
