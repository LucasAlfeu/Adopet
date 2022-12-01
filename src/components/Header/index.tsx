import React from 'react';
import HeaderShape from './HeaderShapes/index';
import styles from './Header.module.scss';
import home from 'assets/home.svg' 
import message from 'assets/message.svg'
import whiteLogo from 'assets/whiteLogo.svg';

export default function Header() {
    return(
        <header className={styles.header}>
            <HeaderShape />           
            <ul className={styles.header__lista}>
                <li className={styles.header__logo}> <img  src={whiteLogo} alt="Adopet logomarca" /></li>
                <li className={styles.header__home}><img src={home} alt="Inicio" /></li>
                <li className={styles.header__menssage}><img src={message} alt="Mensagens" /></li>
            </ul>
        </header>
    )
}