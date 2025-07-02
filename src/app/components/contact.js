import styles from './contact.module.css';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.contactMain}>
      <h2>Contato</h2>
      <p>
        Se você deseja iniciar sua jornada de autoconhecimento, agendar uma conversa ou tirar dúvidas,
        entre em contato pelos canais abaixo:
      </p>

      <div className={styles.contactBox}>
        <a
          href="https://wa.me/5514998017267"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          <FaWhatsapp size={20} /> Fale pelo WhatsApp
        </a>

        <p className={styles.alt}>Ou por telefone:</p>
        <p className={styles.phone}><FaPhoneAlt /> (14) 99801-7267</p>

        <p className={styles.alt}>Ou envie um e-mail para:</p>
        <a href="mailto:lenirmendesrodriguesl@gmail.com" className={styles.emailLink}>
          <FaEnvelope /> lenirmendesrodriguesl@gmail.com
        </a>

        <p className={styles.alt}>Atendimento presencial:</p>
        <p className={styles.address}>
          <FaMapMarkerAlt /> Rua Washington Luiz, 366 - Centro - Oriente/SP
        </p>
        <a
          href="https://maps.app.goo.gl/45XiLBKrKtAhnSWf7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}
        >
          Ver no mapa
        </a>

        <p className={styles.schedule}>
          Horário de atendimento: Segunda a sexta, 9h às 18h
        </p>
      </div>
    </div>
  );
}
