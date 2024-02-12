import styles from "./styleButtonPrincipal.module.css";

export default function ButtonPrincipal({texto_btn, onClick, className}){
   return(
      <button className={`${styles.btnPrincipal} ${className}`} onClick={onClick}>
           {texto_btn}
      </button>
   )
}