import React from 'react';
import style from "./header-bar.module.css"
import ImageUrl from "../../assets/logo192.png"
import AvatarUrl from "../../assets/avatar.jpg"
import Avatar from "antd/es/avatar/avatar";
function HeaderBar(props) {
    return (
        <div className={style.header}>
            <div className={style.peoject_title}>
                <img src={ImageUrl}/>
                <span>React-Admin</span>
            </div>
            <div className={style.right}>
                <Avatar src={AvatarUrl} />
                <span className={style.conent}>管理员</span>
            </div>

        </div>
    );
}

export default HeaderBar;
