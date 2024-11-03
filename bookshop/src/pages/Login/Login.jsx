import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import CustomAlertError from "../../components/CustomAlert/CustomAlertError";
import CustomAlertSuccess from "../../components/CustomAlert/CustomAlertSucess";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuariologado, setUsuarioLogado] = useState("")

  const setUsuarios = useState([]);

  const navigate = useNavigate();
  const handleNavigationCadastro = () => navigate("/cadastro");

  useEffect(()=>{
    getUsuarios()
  },[])

  const getUsuarios = async () => {
    const response = await api.get("/clientes")
    setUsuarios(response.data)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    getUsuarios()
    const response = await api.get("/clientes", {
      params: {email: email, senha: senha}
    })

    setUsuarioLogado(response.data[0])

    if(response.data[0]==undefined){
      CustomAlertError('Usuário ou senha', 'inválidos!')
    } else {
      CustomAlertSuccess('Usuário logado', 'com sucesso!')
      navigate("/")
    }
  }

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e)=> handleLogin(e)}>
          <h1>Login</h1>
          <div className={styles.inputfield}>
            <input
              type="email"
              value={email}
              placeholder="E-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              value={senha}
              placeholder="Senha"
              required
              onChange={(e) => setSenha(e.target.value)}
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
              <button onClick={handleNavigationCadastro}>Registrar</button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
