import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Fazer consumo de api GET através do axios
    console.log("Envio");
  };

  const navigate = useNavigate();
  const handleNavigation = () => navigate("/cadastro");

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={styles.inputfield}>
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className={styles.icon} />
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

          <div className={styles.recallforget}>
            <label>
              <input type="checkbox" />
              Lembrar de mim
            </label>
          </div>
          <button>Entrar</button>

          <div className={styles.btncadastro}>
            <p>
              Não tem uma conta?
              <button onClick={handleNavigation}>Registrar</button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
