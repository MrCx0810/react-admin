import React, { memo } from 'react'
import {Route, BrowserRouter,Switch} from 'react-router-dom'
import {ConfigProvider} from "antd";
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import './App.css';
import 'antd/dist/antd.css';
import Login from './pages/login/login'
import Home from "./pages/home/home";

function App() {
    const token = localStorage.getItem("token");
    return (
      <ConfigProvider  locale={zhCN}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/'>
                    {token ? <Home/> : <Login />}
                </Route>
                <Route path='/home' component={Home}/>
            </Switch>
        </BrowserRouter>
      </ConfigProvider>
  );
}

export default memo(App);
