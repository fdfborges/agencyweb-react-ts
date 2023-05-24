import styles from './header.module.css'
import LogoIpsum from '../../../public/assets/logo.svg'
// import iconList from '../../../public/assets/Header/iconList.svg'
// import iconClose from '../../../public/assets/Header/iconClose.svg'

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
        <a onClick={scrollToAnchorHomePresentation}><img className={styles.logo} src={LogoIpsum} alt="Logo da Página" /></a>


      </div>
      <div className={styles.navigationContainer} id='navigationContainerHeader'>
        <a href='#' className={styles.navigationLinks}>Home</a>
        <a href='#' className={styles.navigationLinks}>Sobre nós</a>
        <a href='#' className={styles.navigationLinks}>Serviços</a>
        <a href='#' className={styles.navigationLinks}>Blog</a>
        <a href='#' className={styles.navigationLinks}>Contate-nos</a>
      </div>



    </header>

  )

}