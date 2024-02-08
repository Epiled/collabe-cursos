import { useState } from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import styles from './style_WhiteModeSwicth.module.css'
// Componente de alternância do modo claro/escuro
export default function WhiteModeSwitch({ onChange }) {
    const [isWhiteMode, setIsWhiteMode] = useState(false); 

 
    const toggleWhiteMode = () => {
      setIsWhiteMode(!isWhiteMode); 
      // Lógica para alternar entre modo claro e modo escuro
      if (isWhiteMode) {
        // Se estiver no modo claro, remova a classe do body
        document.body.classList.remove(styles.whiteMode);
      } else {
        // Se estiver no modo escuro, adicione a classe ao body
        document.body.classList.add(styles.whiteMode);
      }
    };

  return (
    <SwitchButton
      onChange={toggleWhiteMode}
      checked={isWhiteMode}
      label="White Mode"
    />
  );
}

 
