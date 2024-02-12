// SignInButton.js

import styles from "./SignInButton.module.css";

function SignInButton({ openModal }) {
  return (
    <button
      className={`${styles.enter_button}`}
      onClick={openModal}
    >
      Entrar
    </button>
  );
}

export default SignInButton;
