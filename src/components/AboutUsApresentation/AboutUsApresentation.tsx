import AboutPostIt from '../../../public/assets/AboutUsApresentationImgs/AboutPostIt.png';
import AbouttwoPersonNote from '../../../public/assets/AboutUsApresentationImgs/AboutPersonNote.png';
import AboutMeeting from '../../../public/assets/AboutUsApresentationImgs/AboutMeeting.png';
import AboutTwoPerson from '../../../public/assets/AboutUsApresentationImgs/AbouttwoPerson.png';

import styles from './AboutUsApresentation.module.css';

export function AboutUsApresentation() {
    return (
        <>  <section className={styles.AboutUsApresentation}>
            <div className={styles.containerImages}>
                <div className={styles.containerUp}>
                    <div className={styles.ImgsUp}>
                        <img className={styles.AboutPostIt} src={AboutPostIt} alt="" />
                        <img className={styles.AbouttwoPersonNote} src={AbouttwoPersonNote} alt="" />
                    </div>
                    <div className={styles.containeText}>
                        <span>About us</span>
                        <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
                    </div>
                </div>
                <div className={styles.ImgsBack}>
                    <img className={styles.AboutMeeting} src={AboutMeeting} alt="" />
                    <img className={styles.AboutTwoPerson} src={AboutTwoPerson} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}