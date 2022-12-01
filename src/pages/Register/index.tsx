import React, { useState } from "react";
import styles from './Register.module.scss';
import Header from "components/Header";
import Paws from "components/Paws";
import ShapeMedium from "components/ShapeMedium";
import blueLogo from 'assets/blueLogo.svg';
import Footer from "components/Footer";
import lockVision from 'assets/lockVision.svg';
import { useSetRecoilState } from "recoil";
import { listaDePerfilState } from "state/atom";


export default function Register() {
    const setPerfil = useSetRecoilState(listaDePerfilState)
    const [email, setEmail] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [senhaConfirmada, setSenhaConfirmada] = useState<boolean>(false)
    

    const validaEmail = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const emailParaTestar = e.target.value
        const ehValido = regex.test(emailParaTestar)
        ehValido ? setEmail(emailParaTestar) : console.log('Email incorreto')
    }
    const validaNome = (e: React.FocusEvent<HTMLInputElement, Element>) => { 
        const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
        const nomeParaTestar = e.target.value
        const ehValido = regex.test(nomeParaTestar)
        ehValido ? setNome(nomeParaTestar) : console.log('nome incorreto')
    }
    const validaSenha = (e: React.FocusEvent<HTMLInputElement, Element>) => { //Teste123!
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
        const senhaParaTestar = e.target.value
        const ehValido = regex.test(senhaParaTestar)
        ehValido ? setSenha(senhaParaTestar) : console.log('senha incorreto')
    }
    const confirmaSenha = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const confirmaSenha = e.target.value
        confirmaSenha === senha ? setSenhaConfirmada(true) : console.log('Senhas diferente')
    }

    
    return (
        <section className={styles.register}>
            <Header />
            <Paws />
            <ShapeMedium />
            <div className={styles.register__container}>
                <img src={blueLogo} className={styles.register__logo} alt="Adopet Logomarca" />
                <p className={styles.register__text}>Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
                <form className={styles.register__form} onSubmit={(e) => {}}>
                    <label className={styles.register__label} htmlFor="email">Email</label>
                    <input className={styles.register__input} onBlur={(e) => validaEmail(e)} type="text" name="email" placeholder="Digite seu email" />

                    <label className={styles.register__label} htmlFor="nome">Nome</label>
                    <input className={styles.register__input} onBlur={(e) => validaNome(e)} type="text" name="nome" placeholder="Digite seu nome" />

                        <label className={styles.register__label} htmlFor="senha">Senha</label>
                    <div className={styles.register__box}>
                        <input className={styles.register__input} onBlur={(e) => validaSenha(e)} type="text" name="senha" placeholder="Digite sua senha" />
                        <button className={styles.register__hidePassword}><img src={lockVision} alt="Esconder senha" /></button>
                    </div>

                        <label className={styles.register__label} htmlFor="confirmar">Confirmar senha</label>
                    <div className={styles.register__box}>
                        <input className={styles.register__input} onBlur={(e) => confirmaSenha(e)} type="text" name="confirmar" placeholder="Confirme sua senha" />
                        <button className={styles.register__hidePassword}><img src={lockVision} alt="Esconder senha" /></button>
                    </div>
                    <button className={styles.register__btnRegister}>Cadastrar</button>
                </form>
            </div>
            <Footer />
        </section>
    )
}