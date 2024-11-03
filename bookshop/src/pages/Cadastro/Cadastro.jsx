import styles from "./Cadastro.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import CustomAlertSuccess from "../../components/CustomAlert/CustomAlertSucess";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const setUsuarios = useState([]);

  const navigate = useNavigate();
  const handleNavigationLogin = () => navigate("/login");

  const handleCadastro = async (e) => {
    e.preventDefault();
    const cadastro = {
      nome: nome,
      email: email,
      senha: senha,
    };

    await api.post("/clientes", cadastro);

    CustomAlertSuccess("Usuário cadastrado", "com sucesso!");
    navigate("/");
    setEmail("");
    setSenha("");
    setNome("");
    getUsuarios();
  };

  const getUsuarios = async () => {
    const response = await api.get("/clientes");
    setUsuarios(response.data);
  };

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleCadastro}>
          <h1>Cadastro</h1>
          <div className={styles.inputfield}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={nome}
              required
              onChange={handleChangeNome}
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="email"
              placeholder="Endereço de e-mail"
              value={email}
              required
              onChange={handleChangeEmail}
            />
            <MdEmail className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              required
              onChange={handleChangeSenha}
            />
            <FaLock className={styles.icon} />
          </div>
          <button type="submit">Cadastrar</button>

          <div className={styles.btncadastro}>
            <p>
              Já possui uma conta?
              <button onClick={handleNavigationLogin}>Fazer login</button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
