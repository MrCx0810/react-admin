import React from 'react';

import style from "./home.module.css"
import HeaderBar from "../../components/header/HeaderBar";
import HomeContent from "../../components/content/HomeContent";
import Menus from "../../components/menu/Menus";
import {Layout, Menu, Breadcrumb, Card} from 'antd';
import styles from "../user/user.module.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Home() {
    return (
        <div className={style.main}>
            <Layout>
                <HeaderBar/>
                <Layout>
                    <Menus/>
                    <Layout style={{ backgroundColor :'#f6f8f9'}}>
                        <Breadcrumb style={{ margin: '0 0' }}>
                            <Card type="inner" className={styles.search}>
                                标签栏
                            </Card>
                        </Breadcrumb>
                        <HomeContent/>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}

export default Home;
