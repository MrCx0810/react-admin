import React from 'react';
import styles from "./home.module.css"
import HeaderBar from "../../components/header/HeaderBar";
import HomeContent from "../../components/content/HomeContent";
import Menus from "../../components/menu/Menus";
import {Layout, Breadcrumb, Card} from 'antd';
import { CopyrightOutlined} from '@ant-design/icons';


function Home() {
    return (
        <div className={styles.main}>
            <Layout>
                <HeaderBar/>
                <Layout>
                    <Menus/>
                    <Layout style={{ backgroundColor :'#f6f8f9'}}>
                        <Breadcrumb className={styles.tag}>
                            <Breadcrumb.Item>标签栏</Breadcrumb.Item>
                        </Breadcrumb>
                        <HomeContent />
                        <div>
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
