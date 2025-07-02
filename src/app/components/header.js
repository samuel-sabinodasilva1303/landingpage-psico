'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [showTyping, setShowTyping] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTyping(false);
      setTimeout(() => setShowTyping(true), 100);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.stickyHeader}>
        <div className={styles.mainHome}>
          <div className={styles.logoBox}>
            {showTyping && <a href="#home"><h1 className={styles.typed}>Lenir Mendes Rodrigues</h1></a>}
            <p className={styles.crm}>CRP 06/191235</p>
          </div>

          {/* Ícone do menu no mobile */}
          <button className={styles.menuToggle} onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Menu de navegação */}
          <nav className={`${styles.nav} ${menuOpen ? styles.mobileOpen : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>Sobre</a>
            <a href="#specialty" onClick={closeMenu}>Especialidades</a>
            <a href="#opinion" onClick={closeMenu}>Avaliações</a>
            <a href="#contact" onClick={closeMenu}>Contato</a>
          </nav>

          <a
            href="https://wa.me/5514998017267"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <div className={styles.wave}></div>
    </>
  );
}
