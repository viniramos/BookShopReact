import React from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Sobre.module.css";

const members = [
  {
    name: 'Caio Pacheco',
    description: 'Estudante Serratec 2024-2',
    image: ''
  },
  {
    name: 'Rafael Guberman',
    description: 'Estudante Serratec 2024-2',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGZo4qHQ_dI0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730163656721?e=1736380800&v=beta&t=YbZnFfrTwCb67A8dN0t9APVX6pvNhEvWi-wtJYZoBBg'
  },
  {
    name: 'Rafael Januzzi Marques Correa',
    description: 'Estudante Serratec 2024-2',
    image: 'https://i.imgur.com/LaIyRyq.jpeg',
  },
  {
    name: 'Samuel',
    description: 'Estudante Serratec 2024-2',
    image: 'https://avatars.githubusercontent.com/u/177686897?v=4'
  },
  {
    name: 'Vitor',
    description: 'coloca sua descrição',
    image: ''
  },
  {
    name: 'Vinicius Ramos Pimenta',
    description: 'Estudante Serratec 2024-2',
    image: 'https://avatars.githubusercontent.com/u/177691252?v=4'
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
