import React from 'react';
import style from "./header-bar.module.css"
import ImageUrl from "../../assets/logo192.png"
import AvatarUrl from "../../assets/avatar.jpg"
import Avatar from "antd/es/avatar/avatar";
import { Divider, Popover} from "antd";
import { LogoutOutlined, UserOutlined} from '@ant-design/icons';

function HeaderBar() {

    const content = (
        <div className={style.info}>
            <span><UserOutlined />&nbsp;&nbsp;个人资料</span>
            <Divider plain  className={style.line}/>
            <span><LogoutOutlined />&nbsp;&nbsp;退出登录</span>
        </div>
    );

    return (
        <div className={style.header}>
            <div className={style.project_title}>
                <img src={ImageUrl} alt=""/>
                <span>React-Admin</span>
            </div>
            <div className={style.right}>
                <Popover content={content} trigger="hover">
                    <Avatar src={AvatarUrl} alt=""/>
                    <span className={style.content}>Admin</span>
                </Popover>
            </div>

        </div>
    );
}

export default HeaderBar;
