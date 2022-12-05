import React from 'react';
import user from 'assets/user.svg';
import styles from './ImageProfile.module.scss';
import { useNavigate } from 'react-router-dom'

export default function ImageProfile() {
    const navigate = useNavigate()
    return <img className={styles.imageProfile} onClick={()=> navigate('/profile')} src={user} alt="Imagem do usuário" />
}