import styles from './Search.module.css'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { LojaDeLivros } from "../../context/LojaDeLivro";

export function Search() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <LojaDeLivros />
      </div>
      <Footer />
    </>
  );
}
