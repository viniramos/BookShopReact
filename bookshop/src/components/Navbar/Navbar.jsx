import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

import styles from "./Navbar.module.css";

export function Navbar() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <Link to="/">
            <GiSpellBook />
            BookShop
          </Link>
        </h2>

        <ul className={styles.list}>
          {user ? (
            <li className={styles.user}>Olá, {user.nome}!</li>
          ) : (
            <li className={styles.item}>
              <Link to="/login">
                <MdOutlineLogin />
                Login
              </Link>
            </li>
          )}

          <li className={styles.item}>
            <Link to="/carrinho">
              <FaShoppingCart />
              Carrinho
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/sobre">
              <BsInfoCircleFill />
              Sobre
            </Link>
          </li>

          <li className={styles.item}>
            <div className={styles.search}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Digite o título do livro"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <button type="submit">
                  <IoMdSearch />
                </button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;