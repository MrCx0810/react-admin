import React from 'react';
import Menus from "../menu/Menus"
import Main from "../main/main";
import {Breadcrumb, Card, Layout} from "antd";
import style from "./home-content.module.css"
import styles from "../../pages/user/user.module.css";

const { Content } = Layout;

function HomeContent() {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            <Card type="inner" className={styles.search}>
                内容
            </Card>
        </Content>
    );
}

export default HomeContent;
