import React from 'react';
import HeaderShape from './HeaderShapes/index';
import styles from './Header.module.scss';
import home from 'assets/home.svg' 
import message from 'assets/message.svg'
import whiteLogo from 'assets/whiteLogo.svg';
import useIrPara from 'state/hook/useIrPara';

export default function Header() {
    const {irParaHome, irParaMessage} = useIrPara()  
    return(
        <header className={styles.header}>
            <HeaderShape />           
            <ul className={styles.header__lista}>
                <li className={styles.header__logo}> <img  src={whiteLogo} alt="Adopet logomarca" /></li>
                <li className={styles.header__home} onClick={(e) => irParaHome(e)}><img src={home} alt="Inicio" /></li>
                <li className={styles.header__menssage} onClick={(e) => irParaMessage(e)}><img src={message} alt="Mensagens" /></li>
            </ul>
        </header>
    )
}