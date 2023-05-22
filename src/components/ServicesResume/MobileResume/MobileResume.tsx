import styles from './MobileResume.module.css';
import resumeHappy from '../../../../public/assets/ResumeImages/resumeHappy.svg'
import Smartphone from '../../../../public/assets/ResumeImages/Smartphone.svg'

export function MobileResume() {
    return (
        <>
            <div className={styles.containerPrincipalCard}>
            <div className={styles.containerLeft}>
                <div className={styles.containerTitle}>
                    <div className={styles.containerImg}><img src={resumeHappy} alt="" /></div>
                    <div className={styles.containerTextTitle}>
                        <span className={styles.titleCard}>Lorem Ipsum is simply dummy text</span>
                        <span className={styles.descriptionCard}>Lorem Ipsum is simply dummy text</span>
                    </div>
                </div>
                <div className={styles.containerContentCard}>
                    <h2><strong>Lorem Ipsum</strong> is simply dummy text of the printing. </h2>
                    <h3>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </h3>
                </div>

            </div>
            <div className={styles.containerRight}>
                <img src={Smartphone} alt="" />
            </div>
            </div>

        </>
    )
}