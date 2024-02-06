import { useState } from "react";
import styles from "./styleSwitchButton.module.css";

import PropTypes from "prop-types";

export default function SwitchButton({ onChange }) {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);

    // Chama a função onChange passada como propriedade
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <label className={styles.ui_switch}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <div className={styles.slider}>
        <div className={styles.circle}></div>
      </div>
    </label>
  );
}

SwitchButton.propTypes = {
  onChange: PropTypes.func,
};
