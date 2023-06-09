import styles from './HomePresentation.module.css'
import Programmer from '../../../public/assets/ProgramerHome.svg'
// import leftRecort from '../../../public/assets/leftrecort-green.svg'
// import rightRecort from '../../../public/assets/rightrecort-blue.svg'

export function HomePresentation() {
    function scrollToAnchorConector() {
        const anchor = document.getElementById("AnchorConector");
        if (anchor) {
          const offset = 80; // Valor do deslocamento em pixels
          const topPosition = anchor.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth'
          });
        }
      }
    

    return (
        <>
            <div className={styles.programmerContainer}><img className={styles.img} src={Programmer} alt="" /></div>
            <div id='AnchorHomePresentation' className={styles.background}>
                {/* <img className={styles.recortLeft} src={leftRecort} alt="" /> */}
                {/* <img className={styles.recortRight} src={rightRecort} alt="" /> */}
                <div className={styles.containerContent}>

                    <div className={styles.containerText}>
                        <span className={styles.copy}> Construindo e medindo soluções <strong>móveis, web e websites</strong> de sucesso com expertise.</span>
                        <span className={styles.description}>KODEX TECHNOLOGY (PVT) LTD é uma equipe de experientes construtores de aplicativos móveis, web e websites, com dezenas de projetos concluídos. Nós construímos e desenvolvemos aplicativos móveis para diversas plataformas líderes, incluindo Android & iOS.</span>
                    </div>
                    <div className={styles.containerButton}>
                        <button className={styles.buttons}>Contate-nos</button>
                        <button onClick={scrollToAnchorConector} className={styles.buttons}>Saiba mais</button>
                    </div>
                </div>
            </div>

        </>
    )

}