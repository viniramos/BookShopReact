import styles from './Cadastro.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Cadastro(){
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Fazer consumo de api GET através do axios
    console.log("Envio");
  };

  const navigate = useNavigate();
  const handleNavigationLogin = () => navigate("/login");

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <div className={styles.inputfield}>
          <input
              type="text"
              placeholder="Nome de usuário"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="email"
              placeholder="Endereço de e-mail"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <MdEmail className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className={styles.icon} />
          </div>

          <button>Cadastrar</button>

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