import styles from "./Card.module.css";

export function Card({ title, imageUrl, body, price, onAddToCart }) {
  // Define o livro do carrinho
  const livro = { title, imageUrl, body, price };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <img src={imageUrl} alt="livro" />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h3>{title}</h3>
          </div>
          <div className={styles.cardBody}>
            <p>{body}</p>
          </div>
          <div className={styles.cardPrice}>
            <p>{price}</p>
          </div>
        </div>
        <div className={styles.btn}>
          <button>EM BREVE</button>
        </div>
      </div>
    </div>
  );
}

