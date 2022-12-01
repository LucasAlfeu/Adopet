import React from "react";
import Header from "components/Header";
import Shape from "./Shape";
import styles from './Started.module.scss';
import whiteLogo from 'assets/whiteLogo.svg';
import catDog from 'assets/catDog.svg';
import Footer from "components/Footer";
import { Link } from 'react-router-dom'

export default function Started() {
    return(
        <section className={styles.started}>
            <Header />
            <Shape />
            <div className={styles.started__container}>
                <img src={whiteLogo} className={styles.started__logo} alt="Adopet logomarca" />
                <h2 className={styles.started__title}>Boas Vindas</h2>
                <p className={styles.started__text}>Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
                <Link to={'/login'} className={styles.started__goTo}><p className={styles.started__link}>Já tenho conta</p></Link> 
                <Link to={"/register"} className={styles.started__goTo}><p className={styles.started__link}>Quero me cadastrar</p></Link>
                <img src={catDog} className={styles.started__catDog} alt="Gato e cachorro" />
            </div>
            <Footer />
        </section>
    )
}