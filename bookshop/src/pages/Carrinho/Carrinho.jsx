import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Carrinho.module.css";

export function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));
    if (carrinhoSalvo) {
      setCarrinho(carrinhoSalvo);
    }
  }, []);

  const removerDoCarrinho = (id) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const totalCarrinho = carrinho
    .reduce((total, item) => total + parseFloat(item.preco), 0)
    .toFixed(2);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.carrinhoContainer}>
          <h1 className={styles.title}>Carrinho</h1>
          {carrinho.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <div className={styles.cardContainer}>
                {carrinho.map((item) => (
                  <div key={item.id} className={styles.carrinhoItem}>
                    {item.capa && (
                      <img
                        src={item.capa}
                        alt={`Capa de ${item.title}`}
                        className={styles.imgCard}
                      />
                    )}
                    <h3>{item.title}</h3>
                    <p>Autor: {item.author}</p>
                    <p>Preço: R$ {item.preco}</p>
                    <div className={styles.btn}>
                      <button onClick={() => removerDoCarrinho(item.id)}>
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.carrinhoTotal}>
                <h3>Total: R$ {totalCarrinho}</h3>
                <p>Produtos no carrinho: {carrinho.length}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carrinho;
