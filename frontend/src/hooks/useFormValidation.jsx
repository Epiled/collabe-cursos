import { useState } from "react";

// Componente de validação de formulário reutilizável
const useFormValidation = () => {
    const [errors, setErrors] = useState({});
  
    const validateForm = ({ email, senha }) => {
      const formErrors = {};
      const trimmedEmail = email ? email.trim() : ''; 
      const trimmedSenha = senha ? senha.trim() : ''; 
  
      if (!trimmedEmail) {

        formErrors.messageEmail = "Email é obrigatório.";

      } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {

        formErrors.messageEmail = "Email inválido.";

      }

      if (!trimmedSenha) {

        formErrors.messageSenha= "Senha é obrigatória.";
        
      } else if (trimmedSenha.length < 6) {

        formErrors.messageSenha = "A senha deve ter pelo menos 6 caracteres.";
      }
      setErrors(formErrors);
      return formErrors;
    };
  
    return { errors, validateForm };
  };
  
export default useFormValidation;
