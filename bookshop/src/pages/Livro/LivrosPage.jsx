import { Card } from "../../components/Card/Card";

function LivrosPage() {
  
  const adicionarAoCarrinho = (livro) => {
    // pega o carrinho
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    // Adiciona os livros
    const carrinhoAtualizado = [...carrinhoAtual, livro];
    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  };

  return (
    <div>
      <h1>Livros Disponíveis</h1>
      <Card 
        title="Exemplo de Livro"
        imageUrl="https://example.com/image.jpg"
        body="Descrição do livro"
        price="R$ 29,90"
        onAddToCart={adicionarAoCarrinho}
      />
      {/* Adicione outros Cards conforme necessário */}
    </div>
  );
}

export default LivrosPage;