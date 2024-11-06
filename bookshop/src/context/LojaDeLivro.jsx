import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styles from "./LojaDeLivro.module.css";

export function LojaDeLivros() {
  const [searchParams] = useSearchParams();
  const [livros, setLivros] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const query = searchParams.get("q");

  // Tras os livros do carrinho
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));
    if (carrinhoSalvo) {
      setCarrinho(carrinhoSalvo);
    }
  }, []);

  const buscarLivros = async (query) => {
    try {
      const resposta = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const livrosComPrecos = resposta.data.docs.map((livro) => ({
        id: livro.key,
        capa: livro.cover_i
          ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
          : null,
        title: livro.title,
        author: livro.author_name?.[0] || "Autor desconhecido",
        preco: (Math.random() * 50 + 100).toFixed(2),
      }));
      setLivros(livrosComPrecos);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  const adicionarAoCarrinho = (livro) => {
    const carrinhoAtualizado = [...carrinho, livro];
    setCarrinho(carrinhoAtualizado);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  };

  useEffect(() => {
    if (query) {
      buscarLivros(query);
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Resultados para: <span className={styles.queryText}>{query}</span>
      </h2>
      <div className={styles.cardContainer}>
        {livros.length === 0 ? (
          <p>Nenhum livro encontrado.</p>
        ) : (
          livros.map((livro) => (
            <div key={livro.id}>
              {livro.capa && (
                <img
                  className={styles.imgCard}
                  src={livro.capa}
                  alt={`Capa de ${livro.title}`}
                />
              )}
              <h3>{livro.title}</h3>
              <p>Autor: {livro.author}</p>
              <p>Preço: R$ {livro.preco}</p>
              <div className={styles.btn}>
                <button onClick={() => adicionarAoCarrinho(livro)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LojaDeLivros;
