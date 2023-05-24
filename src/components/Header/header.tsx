
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import LogoIpsum from '../../../public/assets/logo.svg';
// import iconList from '../../../public/assets/Header/iconList.svg'
// import iconClose from '../../../public/assets/Header/iconClose.svg'

export function Header() {
  const location = useLocation();


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
        <Link to="/" onClick={scrollToAnchorHomePresentation}><img className={styles.logo} src={LogoIpsum} alt="Logo da Página" /></Link>
      </div>
      <div className={styles.navigationContainer} id='navigationContainerHeader'>
        <Link to="/" onClick={scrollToAnchorHomePresentation} className={`${styles.navigationLinks} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link to="/sobrenos" className={`${styles.navigationLinks} ${location.pathname === '/sobrenos' ? styles.active : ''}`}>Sobre nós</Link>
        <Link to="" className={styles.navigationLinks}>Serviços</Link>
        <Link to="" className={styles.navigationLinks}>Blog</Link>
        <Link to="" className={styles.navigationLinks}>Contate-nos</Link>
      </div>



    </header>

  )

}