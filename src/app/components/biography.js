import Image from 'next/image';
import styles from './biography.module.css';

export default function Biography() {
  return (
    <section id="biography" className={styles.biography}>
      <div className={styles.content}>
        <div className={styles.photo}>
          <Image
            src="/logomaior.jpeg"
            alt="Psicóloga Lenir Mendes Rodrigues"
            width={280}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <h2>Sobre mim</h2>
          <p>
            Olá, sou <strong>Lenir Mendes Rodrigues</strong>, psicóloga formada pela Universidade Católica Paulista, com especialização em Psicoterapia Cognitivo-Comportamental. Atuo há mais de 8 anos no acolhimento de crianças, adolescentes e adultos, tanto presencialmente quanto online.
          </p>
          <p>
            Acredito que cada pessoa carrega sua história e que a escuta atenta pode transformar dores em caminhos de crescimento. Estou aqui para te apoiar em processos de autoconhecimento, superação de crises e fortalecimento emocional.
          </p>
          <p>
            Seja bem-vindo(a). Estou à disposição para conversar.
          </p>
        </div>
      </div>
    </section>
  );
}
