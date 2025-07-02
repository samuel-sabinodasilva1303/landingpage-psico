import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutMain}>
      <div className={styles.aboutTitle}>
        <p>“A melhor maneira de entender algo é tentar mudá-lo.” — Kurt Lewin</p>
        <h1>PSICOTERAPIA PRESENCIAL OU ONLINE</h1>
        <h2>Há conversas que não podem esperar.</h2>
        <h3>Tenha uma orientação psicológica em apenas alguns cliques</h3>
        <a href="#contact" className={styles.cta}>Agende sua consulta</a>
      </div>

      <div className={styles.aboutImagePerfil}>
        <Image
          src="/logoprincipal.jpeg"
          alt="Foto de perfil"
          width={400}
          height={400}
          className={styles.profileImg}
        />
      </div>
    </section>
  );
}
