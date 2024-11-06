import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Carrinho } from "../pages/Carrinho/Carrinho";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Sobre } from "../pages/Sobre/Sobre";
import { NotFound } from "../pages/NotFound/NotFound";
import LivrosPage from "/src/pages/Livro/LivrosPage.jsx";
import {Search} from "../pages/Search/Search"



export function Rotas() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/livros" element={<LivrosPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}