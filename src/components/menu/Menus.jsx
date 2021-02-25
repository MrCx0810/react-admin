import React from 'react';
import style from "./menu.module.css"
import {Menu} from 'antd';
import {
    TeamOutlined,
    HomeOutlined,
    ToolOutlined,
    ShoppingCartOutlined,
    MenuOutlined,
    SettingOutlined
} from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
function Menus() {
    function handleClick(e){
        console.log(e)
    };
    return (
        <Sider className={style.menu}>
            <Menu
                defaultSelectedKeys={['/home']}
                mode="inline"
                theme="dark"
                onClick={handleClick}
                style={{background:'transparent'}}
            >
                <Menu.Item key='/home' icon={<HomeOutlined />} style={{margin:0}}>
                    <Link to='/home'>
                        首页
                    </Link>
                </Menu.Item>
                <SubMenu icon={<TeamOutlined />} title="用户管理">
                    <Menu.Item key="/user">
                        <Link to='/user'>
                            用户列表
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu icon={<ToolOutlined />} title="权限管理">
                    <Menu.Item key="/role">
                        <Link to='/role'>
                            角色权限
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu icon={<ShoppingCartOutlined />} title="商品管理">
                    <Menu.Item key="/product">
                        <Link to='/product'>
                            商品列表
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu icon={<MenuOutlined />} title="订单管理">
                    <Menu.Item key="/orders">
                        <Link to='/orders'>
                            订单列表
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu icon={<SettingOutlined />} title="系统管理">
                    <Menu.Item key="/system">
                        <Link to='/system'>
                            系统参数
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}

export default Menus;
