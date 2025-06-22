import styles from './opinion.module.css';

export default function Opinion() {
  return (
    <div className={styles.opinionMain}>
      <h1>Sobre a terapia online ou presencial</h1>
      <p>
        Veja o que algumas pessoas dizem sobre sua experiência com a terapia:
      </p>

      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p>"A terapia online me ajudou muito. É prático e me sinto acolhida mesmo à distância."</p>
          <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span>- Ana M., 29 anos</span>
        </div>

        <div className={styles.testimonial}>
          <p>"Preferi a terapia presencial no início, mas percebi que o mais importante é a conexão com a profissional."</p>
          <span className={styles.stars}>⭐⭐⭐⭐</span>
          <span>- João P., 35 anos</span>
        </div>

        <div className={styles.testimonial}>
          <p>"A flexibilidade da terapia online foi essencial para eu manter o acompanhamento mesmo com a rotina corrida."</p>
          <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span>- Marina S., 42 anos</span>
        </div>

        <div className={styles.testimonial}>
          <p>"No começo estava insegura sobre a terapia online, mas foi surpreendentemente acolhedora."</p>
          <span className={styles.stars}>⭐⭐⭐⭐</span>
          <span>- Renata T., 27 anos</span>
        </div>

        <div className={styles.testimonial}>
          <p>"A atenção e o cuidado foram os mesmos tanto online quanto presencial. Excelente profissional."</p>
          <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span>- Bruno C., 39 anos</span>
        </div>

        <div className={styles.testimonial}>
          <p>"Com a terapia, consegui me entender melhor e lidar com a ansiedade do dia a dia."</p>
          <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span>- Laura V., 33 anos</span>
        </div>
      </div>
    </div>
  );
}
