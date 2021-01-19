import React from 'react';
import style from "./content.module.css"
import Menus from "../menu/Menus"
import Main from "../main/main";
function Content(props) {
    return (
        <div className={style.content}>
            <Menus></Menus>
            <Main></Main>
        </div>
    );
}

export default Content;
