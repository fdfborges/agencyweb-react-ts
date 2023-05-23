import styles from './ButtonBackToTop.module.css';
import ArrowUp from '../../../public/assets/ButtonBackToTop/ArrowUp.svg';

export function ButtonBackToTop(){
    function scrollToAnchorHomePresentation() {
        const anchor = document.getElementById("AnchorHomePresentation");
        if (anchor) {
          const offset = 50; // Valor do deslocamento em pixels
          const topPosition = anchor.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth'
          });
        }
      }
    
    return(
        <>
            <button onClick={scrollToAnchorHomePresentation} className={styles.btnBackToTop}><img src={ArrowUp} alt="" /></button>
        </>
    )
}