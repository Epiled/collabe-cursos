// Importações do Header Component

import styles from "./header.module.css";
import Logo from "../../assets/images/logo_white.svg";
import btn_hamburguer from "../../assets/images/hamburguer_btn_green.svg";

// Header Component
function Header({ toggleMenu }) {
  return (
    <div className={styles.container_header}>
      <img src={Logo} alt="Logo" />
      <img
        src={btn_hamburguer}
        alt="botão hamburguer"
        className={styles.btn_hamburguer}
        onClick={toggleMenu}
      />
    </div>
  );
}
export default Header;
