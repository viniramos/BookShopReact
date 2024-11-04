import styles from "./Card.module.css";

export function Card({ title, imageUrl, body }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.imgContainer}>
            <img src={imageUrl} alt="" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>{title}</h3>
            </div>
            <div className={styles.cardBody}>
              <p>{body}</p>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
