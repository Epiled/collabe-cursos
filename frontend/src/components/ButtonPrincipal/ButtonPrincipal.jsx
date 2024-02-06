import styles from "./styleButtonPrincipal.module.css";

export default function ButtonPrincipal({texto_btn}){
   return(
      <button className={styles.btnPrincipal}>
           {texto_btn}
      </button>
   )
}