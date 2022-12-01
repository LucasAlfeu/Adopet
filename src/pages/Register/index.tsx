import React from "react";
import styles from './Register.module.scss';
import Header from "components/Header";
import Paws from "components/Paws";
import ShapeMedium from "components/ShapeMedium";
import blueLogo from 'assets/blueLogo.svg';
import Footer from "components/Footer";
import lockVision from 'assets/lockVision.svg';

export default function Register() {
    return (
        <section className={styles.register}>
            <Header />
            <Paws />
            <ShapeMedium />
            <div className={styles.register__container}>
                <img src={blueLogo} className={styles.register__logo} alt="Adopet Logomarca" />
                <p className={styles.register__text}>Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
                <form className={styles.register__form}>
                    <label className={styles.register__label} htmlFor="email">Email</label>
                    <input className={styles.register__input} type="text" name="email" placeholder="Digite seu email" />

                    <label className={styles.register__label} htmlFor="nome">Nome</label>
                    <input className={styles.register__input} type="text" name="nome" placeholder="Digite seu nome" />

                        <label className={styles.register__label} htmlFor="senha">Senha</label>
                    <div className={styles.register__box}>
                        <input className={styles.register__input} type="text" name="senha" placeholder="Digite sua senha" />
                        <button className={styles.register__hidePassword}><img src={lockVision} alt="Esconder senha" /></button>
                    </div>

                        <label className={styles.register__label} htmlFor="confirmar">Confirmar senha</label>
                    <div className={styles.register__box}>
                        <input className={styles.register__input} type="text" name="confirmar" placeholder="Confirme sua senha" />
                        <button className={styles.register__hidePassword}><img src={lockVision} alt="Esconder senha" /></button>
                    </div>
                    <button className={styles.register__btnRegister}>Cadastrar</button>
                </form>
            </div>
            <Footer />
        </section>
    )
}