import { NavLink} from "react-router-dom";

import { useState } from "react";

//Estilos
import "../../index.css";
import styles from "./styleResponsiveNavigation.module.css";
import "../../assets/styles/nav-styles.css";

//Componentes

//Imagens
import Logo from "../../assets/images/logo_white.svg";
import btn_hamburguer from "../../assets/images/hamburguer_btn_green.svg";
import buttonClose from "../../assets/images/close_btn.svg";
import WhiteModeSwitch from "../WhiteModeSwicth/WhiteModeSwicth";

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(true);
 
  const toggleMenu  = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle(styles.overlayActive);
   
  };
 
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <img src={Logo} alt="Logo" />
        <img
          src={btn_hamburguer}
          alt="botão hamburguer"
          className={styles.btn_hamburguer}
          onClick={toggleMenu}
        />
      </div>

      <nav className={`${isOpen ? styles.open : styles.close} ${styles.nav} `}>
        <ul className={styles.navList}>
          <div className={styles.container_buttons}>
            <WhiteModeSwitch />
            <img
              src={buttonClose}
              alt="botão close"
              className= {styles.btn_close}
              onClick={toggleMenu}
            />
          </div>

          <li>
            <NavLink
              className={styles.item_li}
              activeclassname={styles.active}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.item_li}
              activeclassname="active"
              to="/cursos"
            >
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.item_li}
              activeclassname="active"
              to="/sobre"
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.item_li}
              activeclassname="active"
              to="/entrar"
            >
              Entrar
            </NavLink>
          </li>
        </ul>
      </nav>

    </div>
  );
}
