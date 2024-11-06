import styles from "./Home.module.css";
import { Card } from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerCard}>
          <Card
            title={"O Poder do Hábito"}
            imageUrl={
              "https://m.media-amazon.com/images/I/815iPX0SgkL._SY466_.jpg"
            }
            body={
              "Charles Duhigg, repórter investigativo do  New York Times , mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los."
            }
            
          />

          <Card
            title={"Graça & Glória"}
            imageUrl={
              "https://m.media-amazon.com/images/I/816IqkO8-YL._SY466_.jpg"
            }
            body={
              "Trinity Marrow perdeu a batalha e seu amado Protetor. Mesmo com o apoio de demônios e Guardiões, a guerra contra o Augúrio parece um desafio insuperável."
            }
          />

          <Card
            title={"Em Nome Do Povo"}
            imageUrl={
              "https://m.media-amazon.com/images/I/51mXTqBcCQL._SY445_SX342_.jpg"
            }
            body={
              "O homem cria ficções tão poderosas que chegam a se tornar reais. Dentre as maiores ficções já criadas está o dinheiro."
            }
          />

          <Card
            title={"Quebrando o Hábito De Ser Você Mesmo"}
            imageUrl={
              "https://m.media-amazon.com/images/I/41NokvHG9xL._SY445_SX342_.jpg"
            }
            body={
              "Você não está condenado por seus genes e programado para ser de uma determinada maneira no restante de sua vida"
            }
          />

          <Card
            title={"Livro do Milton"}
            imageUrl={
              "https://m.media-amazon.com/images/I/710Um69gFHL._SY466_.jpg"
            }
            body={
              "Indicação pro Milton pras próximas matérias"
            }
          />

          <Card
            title={"A Ciência do Humor"}
            imageUrl={
              "https://m.media-amazon.com/images/I/519TYUYpvDL._SY445_SX342_.jpg"
            }
            body={
              "O humor, assim como a pornografia, é notadamente difícil de definir. Você reconhece quando vê, mas existe uma maneira de descobrir o que é realmente engraçado - e por quê?"
            }
          />

          <Card
            title={"O Fantasma da Ópera"}
            imageUrl={
              "https://m.media-amazon.com/images/I/41zEghghBBL._SY445_SX342_.jpg"
            }
            body={
              "Com mais de um século de existência, “O Fantasma da Ópera” é uma obra que ultrapassou gerações e ainda é capaz de envolver o leitor em sua trama intensa e emocionante."
            }
          />

          <Card
            title={"Suicidas"}
            imageUrl={
              "https://m.media-amazon.com/images/I/91YZxTeOBJL._SY466_.jpg"
            }
            body={
              "O primeiro romance do jovem autor que se firmou como principal nome do novo suspense brasileiro.Do criador da série original Netflix Bom dia, Verônica"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
