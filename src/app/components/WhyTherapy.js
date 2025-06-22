import styles from './whyTherapy.module.css';
import { FaHeart, FaBrain, FaComments, FaUserCheck, FaChild, FaBalanceScale } from 'react-icons/fa';

export default function WhyTherapy() {
const cards = [
  {
    icon: <FaHeart />,
    title: "Cuidar da saúde emocional",
    text: "A terapia ajuda a lidar com emoções intensas, traumas e angústias do dia a dia.",
  },
  {
    icon: <FaBrain />,
    title: "Autoconhecimento",
    text: "Compreender seus pensamentos, sentimentos e comportamentos é essencial para o crescimento pessoal.",
  },
  {
    icon: <FaComments />,
    title: "Melhoria nos relacionamentos",
    text: "Aprenda a se comunicar melhor e a estabelecer relações mais saudáveis.",
  },
  {
    icon: <FaUserCheck />,
    title: "Tomada de decisões",
    text: "A psicoterapia auxilia em momentos de dúvida, transições e escolhas importantes.",
  },
  {
    icon: <FaChild />,
    title: "Apoio para crianças e adolescentes",
    text: "Ajuda no desenvolvimento emocional e social desde a infância.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Equilíbrio mental",
    text: "Encontre ferramentas para lidar com estresse, ansiedade e baixa autoestima.",
  },
  {
    icon: <FaUserCheck />,
    title: "Desenvolvimento da autoestima",
    text: "Fortaleça sua autoconfiança e descubra seu valor pessoal através do processo terapêutico.",
  },
  {
    icon: <FaComments />,
    title: "Prevenção de transtornos",
    text: "Cuidar da saúde mental de forma contínua ajuda a prevenir o agravamento de sintomas e distúrbios.",
  },
];


  return (
    <section id="why-therapy" className={styles.whyTherapy}>
      <h2>Por que fazer psicoterapia?</h2>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
