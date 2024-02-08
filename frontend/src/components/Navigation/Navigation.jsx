// Importações do Navigation Component

import { NavLink } from "react-router-dom";
import WhiteModeSwitch from "../WhiteModeSwicth/WhiteModeSwicth";
import styles from "./navigation.module.css";
import "../../assets/styles/nav-styles.css"
import buttonClose from "../../assets/images/close_btn.svg";
import SignInButton from "../ButtonEnter/SignInButton";

// Navigation Component
function Navigation({ isOpen, toggleMenu, openModal }) {
  return (
    <nav className={`${isOpen ? styles.open : styles.close} ${styles.nav} `}>
      <ul className={styles.navList}>
        <div className={styles.container_buttons}>
          <WhiteModeSwitch />
          <img
            src={buttonClose}
            alt="botão close"
            className={styles.btn_close}
            onClick={toggleMenu}
          />
        </div>
        <li>
          <NavLink className={styles.item_li} activeclassname={styles.active} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_li} activeclassname="active" to="/cursos">
            Cursos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_li} activeclassname="active" to="/sobre">
            Sobre
          </NavLink>
        </li>
        <li>
          <SignInButton openModal={openModal}/>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
