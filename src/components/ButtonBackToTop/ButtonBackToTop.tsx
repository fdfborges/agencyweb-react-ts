import { useEffect, useRef } from 'react';
import styles from './ButtonBackToTop.module.css';
import ArrowUp from '../../../public/assets/ButtonBackToTop/ArrowUp.svg';

export function ButtonBackToTop() {
  const animationRef = useRef<number | null>(null);

  function scrollToTop() {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    const scrollToTopAnimation = () => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, window.pageYOffset - 50);
        animationRef.current = requestAnimationFrame(scrollToTopAnimation);
      }
    };

    animationRef.current = requestAnimationFrame(scrollToTopAnimation);
  }

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const button = document.getElementById('buttonBackToTop');
      if (button instanceof HTMLButtonElement) {
        button.disabled = window.pageYOffset === 0;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button id="buttonBackToTop" onClick={scrollToTop} className={styles.btnBackToTop}>
      <img src={ArrowUp} alt="" />
    </button>
  );
}
