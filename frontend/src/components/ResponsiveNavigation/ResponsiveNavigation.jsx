import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styleResponsiveNavigation.module.css";

import SwitchButton from "../SwitchButton/SwitchButton";

import btn_hamburguer from "../../assets/images/hamburguer_btn_green.svg"
import buttonClose from "../../assets/images/close_btn.svg"
import Logo from "../../assets/images/logo_white.svg";


export default function ResponsiveNavigation() {

  const [isClose, setIsClose] = useState(false)
  const [isWhiteMode, setIsWhiteMode] = useState(false); // Defina como false para iniciar no modo normal

  const toggleWhiteMode = () => {
    setIsWhiteMode(!isWhiteMode); // Inverte o estado de isWhiteMode
    // Lógica para alternar entre modo claro e modo escuro
    if (isWhiteMode) {
      // Se estiver no modo claro, remova a classe do body
      document.body.classList.remove(styles.whiteMode);
    } else {
      // Se estiver no modo escuro, adicione a classe ao body
      document.body.classList.add(styles.whiteMode);
    }
  };
  
  const toggleMenu = ()=>{
    setIsClose(!isClose)

    document.body.classList.toggle(styles.overlayActive);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <img src={Logo} alt="Logo"  />
    <img
      src={btn_hamburguer}
      alt="botão hamburguer"
      className={styles.btn_hamburguer}
      onClick={toggleMenu }
    />
      </div>
    

    <nav className={`${isClose ? styles.close : ''} ${styles.nav}`}>
      <ul className={styles.navList}>
        <div className={styles.container_buttons}>

          <SwitchButton onChange={toggleWhiteMode} />
          <img src={buttonClose} alt="botão close" className={styles.btn_close} onClick={toggleMenu} />
       
        </div>

        <li className={styles.activeDesktop}><Link className={styles.item_li} to="/">Home</Link></li>
        <li><Link className={styles.item_li} to="/cursos">Cursos</Link></li>
        <li><Link className={styles.item_li} to="/sobre">Sobre</Link></li>
        <li className={styles.active}><Link className={styles.item_li} to="/entrar">Entrar</Link></li>
      </ul>
    </nav>
  </div>
  );
}
