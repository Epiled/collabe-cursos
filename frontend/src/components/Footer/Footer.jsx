import styles from "./styleFooter.module.css"

export default function Footer() {
  // Obtém o ano corrente
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Hello World Tech . Todos os direitos reservados.</p>
    </footer>
  );
}
