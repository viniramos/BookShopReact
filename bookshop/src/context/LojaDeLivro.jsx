import { useState } from 'react';
import axios from 'axios';

export function LojaDeLivros() {
  const [livros, setLivros] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');

  // Função para buscar livros usando a Open Library API
  const buscarLivros = async () => {
    try {
      const resposta = await axios.get(`https://openlibrary.org/search.json?title=${termoBusca}`);
      const livrosComPrecos = resposta.data.docs.map(livro => ({
        id: livro.key,
        capa: livro.cover_i 
          ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg` 
          : null,  // URL da capa ou null se não houver capa
        title: livro.title,
        author: livro.author_name?.[0] || "Autor desconhecido",
        preco: (Math.random() * 50 + 10).toFixed(2)  // Preço simulado entre $10 e $60
      }));
      setLivros(livrosComPrecos);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  // Função para adicionar ao carrinho
  const adicionarAoCarrinho = (livro) => {
    setCarrinho([...carrinho, livro]);
  };

  // Função para remover do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  // Calcular o total do carrinho
  const totalCarrinho = carrinho.reduce((total, item) => total + parseFloat(item.preco), 0).toFixed(2);

  return (
    <div className='container'>
      <h1>Loja de Livros</h1>

      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Digite o título do livro"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <button onClick={buscarLivros}>Buscar</button>

      <h2>Livros Disponíveis</h2>
      <div>
        {livros.length === 0 ? (
          <p>Nenhum livro encontrado.</p>
        ) : (
          livros.map(livro => (
            <div key={livro.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
              {livro.capa && (
                <img src={livro.capa} alt={`Capa de ${livro.title}`} style={{ width: '100px', height: '150px' }} />
              )}
              <h3>{livro.title}</h3>
              <p>Autor: {livro.author}</p>
              <p>Preço: R$ {livro.preco}</p>
              <button onClick={() => adicionarAoCarrinho(livro)}>Adicionar ao Carrinho</button>
            </div>
          ))
        )}
      </div>

      <h2>Carrinho({carrinho.length})</h2>
      <div>
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            {carrinho.map(item => (
              <div key={item.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
                <h3>{item.title}</h3>
                <p>Autor: {item.author}</p>
                <p>Preço: R$ {item.preco}</p>
                {item.capa && (
                  <img src={item.capa} alt={`Capa de ${item.title}`} style={{ width: '100px', height: '150px' }} />
                )}
                <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
              </div>
            ))}
            <h3>Total: R$ {totalCarrinho}</h3>
          </>
        )}
      </div>
    </div>
  );
}