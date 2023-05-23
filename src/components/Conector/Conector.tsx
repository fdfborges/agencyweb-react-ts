import styles from './Conector.module.css'
import Webconector from '../../../public/assets/conector/Webconector.svg';
import SEOconector from '../../../public/assets/conector/SEOconector.svg';
import VRconector from '../../../public/assets/conector/VRconector.svg';
import Mobileconector from '../../../public/assets/conector/Mobileconector.svg'

export function Conector() {
    return (
        <>
            <div id='AnchorConector' className={styles.containerPrincipalCard}>
            <div className={styles.containerCard}>
                <div className={styles.containerImg1}>
                    <img  className={styles.imgCard} src={Webconector} alt="" />
                </div>
                <div className={styles.containerText}>
                    <span className={styles.title}>Aplicações Web</span>
                    <span className={styles.description}>Criativas e funcionais</span>
                </div>
            </div>
            <div className={styles.containerCard}>
                <div className={styles.containerImg2}>
                    <img className={styles.imgCard} src={SEOconector} alt="" />
                </div>
                <div className={styles.containerText}>
                    <span className={styles.title}>SEO</span>
                    <span className={styles.description}>Organizado e atrativo</span>
                </div>
            </div>
            <div className={styles.containerCard}>
                <div className={styles.containerImg3}>
                    <img className={styles.imgCard} src={VRconector} alt="" />
                </div>
                <div className={styles.containerText}>
                    <span className={styles.title}>AR/VR Soluções</span>
                    <span className={styles.description}>Divertidas e intuitivas</span>
                </div>
            </div>
            <div className={styles.containerCard}>
                <div className={styles.containerImg4}>
                    <img className={styles.imgCard} src={Mobileconector} alt="" />
                </div>
                <div className={styles.containerText}>
                    <span className={styles.title}>Aplicações Mobile</span>
                    <span className={styles.description}>Ágil e prático</span>
                </div>
            </div>
            </div>
        </>
    )
}

