import styles from "./Navbar.module.css";
import { GiSpellBook } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

export function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <h2>
          <Link to="/">
            <GiSpellBook />
            BookShop
          </Link>
        </h2>
        <form>
          <input type="text" placeholder="Busque um livro" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </nav>
    </>
  );
}