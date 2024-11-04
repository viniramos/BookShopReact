import React from 'react';
import { Link } from "react-router-dom"
import styles from './NotFound.module.css';


export function NotFound() {

    return (
        <>
        <div className={styles.container}>
            <nav className={styles.shelf}>
                <div className={`${styles.book} ${styles.home_page}`}>
                <Link to="/">Home Page</Link></div>
                <div className={`${styles.book} ${styles.about_us}`}><Link to="/sobre">Sobre Nós</Link></div>
                <div className={`${styles.book} ${styles.contact}`}><Link to="/carrinho">Carrinho</Link></div>
                <div className={`${styles.book} ${styles.faq}`}><Link to="/login">Login</Link></div>
                
                <div className={`${styles.book} ${styles.not_found}`}></div>
                
                <div className={`${styles.door} ${styles.left}`}></div>
                <div className={`${styles.door} ${styles.right}`}></div>
            </nav>
            <h1 className={styles.not_found_title}>Error 404: Not Found</h1>
            <p className={styles.not_found_subtitle}>Essa página não foi encontrada, favor selecione uma opção</p>
            </div>
        </>
        
    );
}