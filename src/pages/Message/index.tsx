import Footer from 'components/Footer';
import Header from 'components/Header';
import ImageProfile from 'components/ImageProfile';
import ShapeMedium from 'components/ShapeMedium';
import React from 'react'
import styles from './Message.module.scss';

export default function Message() {
    return(
    <>
        <Header />
        <span className={styles.shape}><ShapeMedium /></span>
        <section className={styles.message}>
            <ImageProfile />
            <p className={styles.message__text}>Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:</p>
            <form className={styles.message__form}>
                <label htmlFor="nome" className={styles.message__label}>Nome</label>
                <input type="text" name='nome' className={styles.message__input} placeholder='Insira seu nome completo' required />

                <label htmlFor="numero" className={styles.message__label}>Telefone</label>
                <input type="text" name='numero' className={styles.message__input} placeholder='Insira seu telefone e/ou whatsapp' required/>

                <label htmlFor="nomeAnima" className={styles.message__label}>Nome do animal</label>
                <input type="text" name='nomeAnima' className={styles.message__input} placeholder='Por qual animal você se interessou?' required />

                <label htmlFor="mensagem" className={styles.message__label}>Mensagem</label>
                <textarea name="mensagem" id="mensagem" cols={30} rows={10} className={styles.message__textArea} placeholder='Escreva sua mensagem'></textarea>

                <button className={styles.message__btnSend}>Enviar</button>
            </form>
        </section>
        <Footer />
    </>
    )
}