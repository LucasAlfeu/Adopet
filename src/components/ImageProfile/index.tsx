import React from 'react';
import user from 'assets/user.svg';
import styles from './ImageProfile.module.scss';

export default function ImageProfile() {
    return <img className={styles.imageProfile} src={user} alt="Imagem do usuário" />
}