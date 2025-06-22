'use client';

import { useEffect, useState } from 'react';
import styles from './specialty.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const specialties = [
  '🧠 Ansiedade',
  '🌧️ Depressão',
  '💬 Relacionamentos',
  '🔥 Estresse e autocobrança',
  '🕊️ Luto e perdas',
  '🪞 Autoconhecimento',
  '👧 Desenvolvimento emocional infantil',
  '📚 Dificuldades escolares',
  '🎭 Transtornos do humor',
  '🧒 Transtornos do desenvolvimento',
  '🧩 TEA (Transtorno do Espectro Autista)',
  '😨 Fobias e medos',
  '🛌 Distúrbios do sono',
  '🥺 Baixa autoestima',
  '👨‍👩‍👧‍👦 Orientação para pais',
];

export default function Specialty() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.specialtyMain}>
      <h2>Especialidades</h2>
      <p>Atendimento psicológico para crianças, adolescentes e adultos.</p>

      {isMobile ? (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
        >
          {specialties.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.specialtyCard}>{item}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={styles.specialtyList}>
          {specialties.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
