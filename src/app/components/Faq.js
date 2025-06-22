'use client';
import { useState } from 'react';
import styles from './faq.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "Como funciona a terapia online?",
    answer: "A terapia online é realizada por videoconferência, em um ambiente seguro e sigiloso, com a mesma eficácia da terapia presencial.",
  },
  {
    question: "Qual a duração de uma sessão?",
    answer: "Cada sessão dura, em média, 50 minutos, podendo variar de acordo com a necessidade do paciente.",
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer: "O mais comum é uma sessão por semana, mas a frequência pode ser ajustada conforme o caso.",
  },
  {
    question: "A terapia é confidencial?",
    answer: "Sim, todo o conteúdo abordado nas sessões é sigiloso, conforme o código de ética do psicólogo.",
  },
  {
    question: "Preciso ter um problema grave para fazer terapia?",
    answer: "Não. A terapia é indicada tanto para lidar com dificuldades quanto para promover autoconhecimento e desenvolvimento pessoal.",
  },
  {
    question: "Qual a diferença entre psicólogo e psiquiatra?",
    answer: "O psicólogo realiza psicoterapia. Já o psiquiatra é médico e pode prescrever medicamentos. Ambos podem atuar de forma complementar.",
  },
  {
    question: "Atende convênios?",
    answer: "Atualmente, o atendimento é particular. Consulte para verificar reembolso com seu plano de saúde.",
  },
  {
    question: "Atende crianças?",
    answer: "Sim, o atendimento inclui crianças, adolescentes e adultos, com abordagens adequadas a cada faixa etária.",
  },
  {
    question: "O que é necessário para iniciar a terapia?",
    answer: "Basta agendar uma primeira conversa. Nenhuma preparação específica é necessária.",
  },
  {
    question: "Como posso agendar uma consulta?",
    answer: "Você pode agendar pelo WhatsApp, e-mail ou pelo botão de agendamento disponível neste site.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <h2>Perguntas Frequentes</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggle(index)}>
              <span>{item.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
