import React, { memo } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/login/login'
import {ConfigProvider} from "antd";
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import './App.css';
import 'antd/dist/antd.css';
import Home from "./pages/home/home";

function App() {
  return (
      <ConfigProvider  locale={zhCN}>
        <BrowserRouter>
           <Route path='/login'>
               <Login />
           </Route>
            <Route path='/'>
                <Home></Home>
            </Route>
        </BrowserRouter>
      </ConfigProvider>
  );
}

export default memo(App);
