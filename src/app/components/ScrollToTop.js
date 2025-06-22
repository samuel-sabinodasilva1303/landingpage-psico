'use client'
import { useState, useEffect } from 'react';
import styles from './scrollToTop.module.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > 300);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className={styles.scrollToTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}
