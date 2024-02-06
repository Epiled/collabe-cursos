import { Link } from "react-router-dom";
import styles from "./menu_mobile.module.css";

import SwitchButton from "../SwitchButton/SwitchButton";

import buttonClose from "../../assets/images/close_btn.svg"
import Logo from "../../assets/images/logo_black.svg";

export default function Menu_mobile() {
  return (
    <div>
      <img src={Logo} alt="Logo" className={styles.logo} />

      <nav>
        <ul className={styles.navList}>
          <div className={styles.container_buttons}>
            <SwitchButton />
            <img src={buttonClose} alt="botão close" />
          </div>
         
          <li>
            <Link className={styles.item_li} to="/">Home</Link>
          </li>

          <li>
            <Link className={styles.item_li} to="/cursos">Cursos</Link>
          </li>

          <li>
            <Link  className={styles.item_li}to="/sobre">Sobre</Link>
          </li>

          <li className={styles.active}>
           <Link className={styles.item_li} to="/entrar">Entrar</Link>
          </li>

        </ul>

      </nav>
    </div>
  );
}
