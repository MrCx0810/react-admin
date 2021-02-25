import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout} from "antd";
import User from "../../pages/user/user";
import Product from "../../pages/product/product";


const { Content } = Layout;

function HomeContent() {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: '20px 10px',
                margin: 0,
                minHeight: 280,
                backgroundColor: '#f0f2f5'
            }}
        >
            <Switch>
                <Route path='/user' component={User}/>
                <Route path='/product' component={Product}/>
            </Switch>
        </Content>
    );
}

export default HomeContent;
