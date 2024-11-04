import React from 'react';
import { useNavigate } from "react-router-dom"
import styles from './NotFound.module.css';


export function NotFound() {
    const navigate = useNavigate();
    const handleNavigation = () => navigate("/");

    return (
        <>
        <div className={styles.container}>
            <nav className={styles.shelf}>
                <div className={`${styles.book} ${styles.home_page}`} onClick={handleNavigation}>Home Page</div>
                <div className={`${styles.book} ${styles.about_us}`}>Sobre Nós</div>
                <div className={`${styles.book} ${styles.contact}`}>Contato</div>
                <div className={`${styles.book} ${styles.faq}`}>Login</div>
                
                <div className={`${styles.book} ${styles.not_found}`}></div>
                
                <div className={`${styles.door} ${styles.left}`}></div>
                <div className={`${styles.door} ${styles.right}`}></div>
            </nav>
            <h1 className={styles.not_found_title}>Error 404: Not Found</h1>
            <p className={styles.not_found_subtitle}>Essá página não foi encontrada, favor selecione uma opção</p>
            </div>
        </>
        
    );
}