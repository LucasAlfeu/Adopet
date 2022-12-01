import Header from 'components/Header';
import React from 'react';
import styles from './Profile.module.scss';
import user from 'assets/user.svg';
import Footer from 'components/Footer';
import ShapeMedium from 'components/ShapeMedium';

export default function Profile() {
    return (
        <>
            <Header />
            <span className={styles.shape}><ShapeMedium /></span>
            <section className={styles.profile}>
                <p className={styles.profile__text}>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>

                <form className={styles.profile__form}>
                    <h3 className={styles.profile__title}>Perfil</h3>

                    <label htmlFor="" className={styles.profile__label}>Foto</label>
                    <img src={user} alt="Foto do usuário" className={styles.profile__photoUser} />
                    <label htmlFor="photo" className={styles.profile__labelPhoto}>Clique na foto para editar</label>
                    <input type="file" name="photo" id="photo" accept='image/png, image/jpeg' className={styles.profile__inputImage}/>

                    <label htmlFor="name" className={styles.profile__label}>Nome</label>
                    <input className={styles.profile__input} type="text" name="name" id="name" />
                    
                    <label htmlFor="tel" className={styles.profile__label}>Telefone</label>
                    <input className={styles.profile__input} type="text" name="tel" id="tel" />

                    <label htmlFor="city" className={styles.profile__label}>Cidade</label>
                    <input className={styles.profile__input} type="text" name="city" id="city"/>

                    <label htmlFor="about" className={styles.profile__label}>Sobre</label>
                    <textarea className={styles.profile__textArea} id="about" name="about" cols={30} rows={10}></textarea>

                    <button className={styles.profile__btnSave}>Salvar</button>
                </form>
            </section>
            <Footer />
        </>
    )
}