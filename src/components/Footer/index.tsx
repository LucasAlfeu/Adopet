import React from "react";
import styles from './Footer.module.scss'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.footer__text}>2022 - Desenvolvido por Alura</p>
        </footer>
    )
}