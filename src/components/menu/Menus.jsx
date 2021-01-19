import React from 'react';
import style from "./menu.module.css"
import {Menu} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined, UserOutlined, LaptopOutlined, NotificationOutlined,
} from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";

const { SubMenu } = Menu;
function Menus() {
    function handleClick(e){
        console.log(e)
    };
    return (
        <Sider className={style.menu}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                onClick={handleClick}
                style={{background:'transparent'}}
            >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                   首页
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="用户管理">
                    <Menu.Item key="5">用户列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<MailOutlined />} title="权限管理">
                    <Menu.Item key="9">角色权限</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<MailOutlined />} title="商品管理">
                    <Menu.Item key="12">商品列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<MailOutlined />} title="订单管理">
                    <Menu.Item key="14">订单列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<MailOutlined />} title="系统管理">
                    <Menu.Item key="15">系统参数</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}

export default Menus;
