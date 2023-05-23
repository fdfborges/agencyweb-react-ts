import styles from './header.module.css'
import LogoIpsum from '../../../public/assets/logo.svg'

export function Header() {
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
   
   
    return (
        <header className={styles.container}>
            <div className={styles.logoContainer}>
                <a onClick={scrollToAnchorHomePresentation}><img className={styles.logo} src={LogoIpsum} alt="" /></a>
                

            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttons}>Home</button>
                <button className={styles.buttons}>Sobre nós</button>
                <button className={styles.buttons}>Serviços</button>
                <button className={styles.buttons}>Blog</button>
                <button className={styles.buttons}>Contate-nos</button>
            </div>
        </header>

    )

}