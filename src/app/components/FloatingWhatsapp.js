import { FaWhatsapp } from 'react-icons/fa';
import styles from './floatingWhatsapp.module.css';

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5514998017267"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingWhatsapp}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
