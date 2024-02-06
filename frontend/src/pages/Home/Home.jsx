import mobileMainImage from "../../assets/images/img_principal-mobile.svg";
import desktopMainImage from "../../assets/images/img_principal-desktop.svg";
import ButtonPrincipal from "../../components/ButtonPrincipal/ButtonPrincipal";
import styles from "./home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <section className={styles.content_section}>
        <h1>
        
          Codificando <span className={styles.highlight}>ideias</span>,
          construindo o <span className={styles.highlight}>futuro</span>!
        </h1>

        <p>
          Explore um mundo de aprendizado gratuito com a Hello World Tech!
          Nossos cursos em vídeo oferecem uma experiência de aprendizado
          dinâmica, ajudando você a desenvolver habilidades essenciais para o
          mundo digital. Junte-se a nós e comece sua jornada de aprendizado hoje
          mesmo!
        </p>

        <div className={styles.container_btn}>
          <ButtonPrincipal texto_btn="Cadastre-se" />
        </div>
      </section>

      <section className={styles.image_section}>
        <picture>
          
          <source media="(min-width: 768px)" srcSet={desktopMainImage} />
          <source media="(min-width: 480px)" srcSet={mobileMainImage} />

          <img src={mobileMainImage } alt="Imagen principal do site - boneco codificando" />
        </picture>
      </section>
    </div>
  );
}
