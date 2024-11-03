import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.list}>
          <li>Condições de Uso</li>

          <li>&copy; BookShop.com</li>

          <li>Fale Conosco | bookshop@gmail.com</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
