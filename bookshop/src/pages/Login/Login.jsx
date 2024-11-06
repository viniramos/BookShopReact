import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleNavigationCadastro = () => navigate("/cadastro");

  const handleLogin = (e) => {
    e.preventDefault();

    const espacoNome = nome.trim();
    const espacoSenha = senha.trim();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData && storedUserData.nome === espacoNome && storedUserData.senha === espacoSenha) {
      console.log("Login realizado com sucesso");

      // guarda o nome localStorage
      localStorage.setItem("loggedUser", JSON.stringify({ nome: espacoNome }));

      navigate("/");
    } else {
      alert("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className={styles.inputfield}>
            <input
              type="text"
              value={nome}
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              value={senha}
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <FaLock className={styles.icon} />
          </div>

          <div className={styles.recallforget}>
            <label>
              <input type="checkbox" />
              Lembrar de mim
            </label>
          </div>
          <button type="submit">Entrar</button>

          <div className={styles.btncadastro}>
            <p>
              Não tem uma conta?
              <button type="button" onClick={handleNavigationCadastro}>Registrar</button>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
