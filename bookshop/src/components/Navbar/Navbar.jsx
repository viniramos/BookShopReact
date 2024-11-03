import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            <Link to="/">
              <GiSpellBook />
              BookShop
            </Link>
          </h2>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/login">
                <MdOutlineLogin />
                Login
              </Link>
            </li>

            <li className={styles.item}>
              <Link to="/carrinho">
                <FaShoppingCart />
                Carrinho
              </Link>
            </li>

            <li className={styles.item}>
              <Link to="/sobre">
                <BsInfoCircleFill />
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
