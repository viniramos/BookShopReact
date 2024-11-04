import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export function Carrinho() {
  return (
    <>
      <Navbar />
      <h1>Carrinho</h1>
      <Footer />
    </>
  );
 
  'react'; function Cart() 
  { return (
    <>
    <Navbar />
    <div className="cart-container"> 
      <h2>Meu Carrinho</h2> 
      <div className="cart-item"> 
          <div className="item-details"> 
          <img src="link da imagem" alt="Capa do Livro" /> 
            <div className="item-info"> <h4>Título do Livro</h4>
            <p>Autor: Nome do Autor</p>
            <p>Quantidade: 1</p>
          </div> 
      </div> 
        <div className="item-price"> 
          <p>R$ 49,90</p>
      </div>
    </div>
    <div className="cart-summary">
      <h3>Total: R$ 49,90</h3>
        <button className="checkout-button">Finalizar Compra</button>
         </div> 
        </div>
         <Footer />
         </>
        );
  }
}
