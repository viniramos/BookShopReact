import styles from "./Cadastro.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    senha: '',
    confirmSenha: '',
  });

  const navigate = useNavigate();
  const handleNavigationLogin = () => navigate("/login");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCadastro = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmSenha) {
      alert('As senhas não coincidem');
      return;
    }

    // Salva os dados no local
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Cadastro realizado com sucesso!");
    
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleCadastro}>
          <h1>Cadastro</h1>
          <div className={styles.inputfield}>
            <input
              type="text"
              name="nome"
              placeholder="Nome de usuário"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            <FaAddressCard className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="email"
              name="email"
              placeholder="Endereço de e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <MdEmail className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
            <PiPhoneFill className={styles.icon}/>
          </div>
          <div className={styles.inputfield}>
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
            <FaAddressBook className={styles.icon}/>  
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <FaLock className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input
              type="password"
              name="confirmSenha"
              placeholder="Confirme a Senha"
              value={formData.confirmSenha}
              onChange={handleChange}
              required
            />
            <FaLock className={styles.icon} />
          </div>
          <button type="submit">Cadastrar</button>

          <div className={styles.btncadastro}>
            <p>
              Já possui uma conta?
              <button type="button" onClick={handleNavigationLogin}>Fazer login</button>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
