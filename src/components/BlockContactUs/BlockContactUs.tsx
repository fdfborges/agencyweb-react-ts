import styles from './BlockContactUs.module.css';

import Webconector from '../../../public/assets/conector/Webconector.svg';
import SEOconector from '../../../public/assets/conector/SEOconector.svg';
import VRconector from '../../../public/assets/conector/VRconector.svg';
import Mobileconector from '../../../public/assets/conector/Mobileconector.svg'

export function BlockContactUs() {
    return (
        <>
            <div className={styles.BlockContactUsContainer}>
                <div className={styles.BlockLeft}>
                    <div className={styles.blockleftwithPadding}>
                        <div className={styles.recortleft}></div>
                        <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
                        <h3>KODEX TECHNOLOGY PVT LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.</h3>
                        <button>Contact us</button>
                    </div>
                </div>


                <div className={styles.BlockRight}>
                    <div className={styles.LeftConector}>
                        <div className={styles.containerCard}>
                            <div className={styles.containerImg1}>
                                <img className={styles.imgCard} src={Webconector} alt="" />
                            </div>
                            <div className={styles.containerText}>
                                <span className={styles.title}>Aplicações Web</span>
                            </div>
                        </div>
                        <div className={styles.containerCard}>
                            <div className={styles.containerImg2}>
                                <img className={styles.imgCard} src={SEOconector} alt="" />
                            </div>
                            <div className={styles.containerText}>
                                <span className={styles.title}>SEO</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.RightConector}>
                        <div className={styles.containerCard}>
                            <div className={styles.containerImg3}>
                                <img className={styles.imgCard} src={VRconector} alt="" />
                            </div>
                            <div className={styles.containerText}>
                                <span className={styles.title}>AR/VR Soluções</span>
                            </div>
                        </div>
                        <div className={styles.containerCard}>
                            <div className={styles.containerImg4}>
                                <img className={styles.imgCard} src={Mobileconector} alt="" />
                            </div>
                            <div className={styles.containerText}>
                                <span className={styles.title}>Aplicações Mobile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}