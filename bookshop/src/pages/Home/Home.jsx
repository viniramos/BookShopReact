import styles from "./Home.module.css";
import { Card } from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <Card
        title={"Livro"}
        imageUrl={"https://m.media-amazon.com/images/I/815iPX0SgkL._SY466_.jpg"}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint fugit quam quide"
        }
      />
      <Footer />
    </>
  );
}
