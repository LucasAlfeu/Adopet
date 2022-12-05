import Header from 'components/Header';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { listaDePetsState } from 'state/atom';
import styles from './Home.module.scss';
import iconMessage from 'assets/iconMessage.svg';
import Footer from 'components/Footer';
import { useNavigate } from 'react-router-dom'
import ImageProfile from 'components/ImageProfile';

export default function Home() {
    const petList = useRecoilValue(listaDePetsState)
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <section className={styles.home}>
                <ImageProfile />
                <p className={styles.home__text}>Olá! Veja os amigos disponíveis para adoção!</p>
                <ul className={styles.home__list}>
                    {petList.map(pet =>
                        <li className={styles.home__pet}>
                            <img className={styles.home__petImage} src={pet.imagem} alt={pet.nome} />
                            <article className={styles.home__about}>
                                <h3 className={styles.home__petName}>{pet.nome}</h3>
                                <p className={styles.home__petAge}>{pet.idade}</p>
                                <p className={styles.home__petSize}>{pet.porte}</p>
                                <p className={styles.home__petAbout}>{pet.sobre}</p>
                                <p className={styles.home__petCity}>{pet.cidade}</p>
                                <button className={styles.home__sendMessage} onClick={() => navigate('/message')}><img src={iconMessage} className={styles.home__message} alt="menssagem" />  Falar com responsável</button>
                            </article>
                        </li>
                    )}
                </ul>
            </section>
            <Footer />
        </>
    )
}