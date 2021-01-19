import React from 'react';

import style from "./home.module.css"
import Header from "../../components/header/Header";
import Content from "../../components/content/Content";

function Home() {
    return (
        <div className={style.main}>
            <Header/>
            <Content/>
        </div>
    );
}

export default Home;
