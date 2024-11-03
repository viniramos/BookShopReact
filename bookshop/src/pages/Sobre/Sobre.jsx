import React from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Sobre.module.css";

const members = [
  {
    name: 'Caio',
    description: '',
    image: ''
  },
  {
    name: 'Rafael',
    description: 'coloca sua descrição',
    image: ''
  },
  {
    name: 'Rafael Januzzi Marques Correa',
    description: 'Estudante Serratec 2024-2',
    image: 'https://i.imgur.com/LaIyRyq.jpeg',
    github: 'https://github.com/joaosilva',
    linkedin: 'https://www.linkedin.com/in/joaosilva',
    email: 'mailto:joao.silva@example.com'
  },
  {
    name: 'Samuel',
    description: 'coloca sua descrição',
    image: '/path/to/vinicius.jpg'
  },
  {
    name: 'Vitor',
    description: 'coloca sua descrição',
    image: ''
  },
  {
    name: 'Vinicius',
    description: 'coloca sua descrição',
    image: ''
  }
];

export function Sobre() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre Nós</h1>
        <div className={styles.membersGrid}>
          {members.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <img src={member.image} alt={member.name} className={styles.memberImage} />
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />

    </>
  );
}
