import Header from "components/Header";
import Paws from "components/Paws";
import ShapeMedium from "components/ShapeMedium";
import React from "react";
import styles from './Login.module.scss';
import blueLogo from 'assets/blueLogo.svg';
import lockVision from 'assets/lockVision.svg';
import Footer from "components/Footer";
import { useRecoilValue } from "recoil";
import { listaDePerfilState } from "state/atom";
import { useNavigate } from "react-router-dom";
import useEsconderSenha from "state/hook/useEsconderSenha";

export default function Login() {
    const perfil = useRecoilValue(listaDePerfilState)
    const navigate = useNavigate()
    const esconderSenha = useEsconderSenha()

    let verificaEmail = ''
    let verificaSenha = ''

    const listarEmail = (e: React.FocusEvent<HTMLInputElement, Element>): string => {
        verificaEmail = (e.target.value)
        return verificaEmail
    }
    const listarSenha = (e: React.FocusEvent<HTMLInputElement, Element>): string => {
        verificaSenha = (e.target.value)
        return verificaSenha
    }

    const confirmaLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(perfil.email === verificaEmail && perfil.senha === verificaSenha){
            navigate('/home')
        } else {
            console.log('Seu email ou sua senha estão incorretos')
        }
    }
    return (
        <>
            <Header />
            <Paws />
            <ShapeMedium />
            <section className={styles.login}>
                <img src={blueLogo} className={styles.login__logo} alt="Adopet logomarca" />
                <p className={styles.login__text}>Já tem conta? Faça seu login:</p>
                <form className={styles.login__form} onSubmit={(e) => confirmaLogin(e)}>
                    <label htmlFor="email" className={styles.login__label}>Email</label>
                    <input type="text" className={styles.login__input} onBlur={(e) => listarEmail(e)} name="email" id="inputEmail" placeholder="Digite seu email" required />

                    <label className={styles.login__label} htmlFor="senha">Senha</label>
                    <div className={styles.login__box}>
                        <input className={styles.login__input} onBlur={(e) => listarSenha(e)} type="password" name="senha" id="inputSenha" placeholder="Digite sua senha" required />
                        <button className={styles.login__hidePassword} onClick={(e) => esconderSenha(e)}><img src={lockVision} alt="Esconder senha" /></button>
                    </div>
                    <a href="#" className={styles.login__forgot}>Esqueceu sua senha?</a>
                    <button className={styles.login__btnSingIn}>Entrar</button>
                </form>
            </section>
            <Footer />
        </>
    )
}