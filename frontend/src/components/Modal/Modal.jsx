import styles from "./styleModal.module.css";
import ButtonSubmit from "../ButtonPrincipal/ButtonPrincipal";
import iconEmail from "../../assets/images/icon_login_email.svg";
import iconSenha from "../../assets/images/icon_login_senha.svg";
import closeBtn from "../../assets/images/close_btn.svg"; // Renomeei para closeBtn
import { useState, useEffect } from "react";
import useFormValidation from "../../hooks/useFormValidation"; // Importar o componente de validação de formulário

export default function Modal({ isOpen, setIsOpenModal, className }) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const { errors, validateForm } = useFormValidation(""); // Usar o hook de validação de formulário

  useEffect(() => {
    if (!isOpen) {
      setSenha("");
      setEmail("");
      validateForm("")
    }
  }, [isOpen]);
 
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm({ email, senha });

    if (Object.keys(formErrors).length === 0) {
      // Construir o objeto de dados a ser enviado para o backend
      const data = { email, senha };
  
      // Enviar os dados para o backend
      fetch('URL_DO_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          
          throw new Error('Erro ao enviar dados para o backend');
        }
        return response.json();
      })
      .then(data => {
        console.log('Resposta do backend:', data);
        alert("Cadastrado com sucesso!");
        setEmail("");
        setSenha("");
      })
      .catch(error => {
       
        console.error('Erro ao enviar dados:', error);
        
        // Tratar o erro, se necessário
      });
    } 
  };

  const fecharModal = () => {
    setIsOpenModal(false);
  };

  return (
    
    <div
      className={`${styles.modal} ${isOpen ? styles.open : ""} ${className} ${
        styles.modalStyle
      }`}
    >
      <img
        className={styles.btn_close}
        src={closeBtn}
        alt="Botão Fechar"
        onClick={fecharModal}
      />{" "}

      <h1>Login</h1>
      <form action="">

        <div className={styles.container}>

          <label htmlFor="">Email:</label>

          <input
            className={`${styles.input} ${styles.input_email}`}
            type="email"
            maxLength={50}
            onChange={handleChangeEmail}
            value={email}
          />

          <img className={styles.icon} src={iconEmail} alt="icone email" />

        </div>

        <div className={styles.validation}>{errors.messageEmail}</div>

        <div className={styles.container}>

          <label htmlFor="">Senha:</label>

          <input
            className={`${styles.input} ${styles.input_senha}`}
            type="password"
            maxLength={20}
            onChange={handleChangeSenha}
            value={senha}
          />

          <img className={styles.icon} src={iconSenha} alt="Icone senha" />

        </div>

        <div className={styles.validation}>{errors.messageSenha}</div>

        <div className={styles.container_button}>
          <ButtonSubmit
            texto_btn="Enviar"
            onClick={handleSubmit}
            className={styles.botaoPersonalizado}
          />
        </div>

      </form>
      <p>
        Ainda não está cadastrado(a)?{" "}
        <button className={styles.btn_link}>Cadastre-se</button>
      </p>

    </div>
  );
}
