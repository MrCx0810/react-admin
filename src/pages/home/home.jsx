import React from 'react';
import style from "./home.module.css"
import HeaderBar from "../../components/header/HeaderBar";
import HomeContent from "../../components/content/HomeContent";
import Menus from "../../components/menu/Menus";
import {Layout, Breadcrumb, Card} from 'antd';
import { CopyrightOutlined} from '@ant-design/icons';
import styles from "../user/user.module.css";

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
                        <div style={{ margin: '0 24px' }}>
                            <Card type="inner" className={styles.footer}>
                                Copyright&nbsp;&nbsp;
                                <CopyrightOutlined />&nbsp;
                                React Admin 2021 by RC-Team
                            </Card>
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}

export default Home;
