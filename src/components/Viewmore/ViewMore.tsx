import styles from './ViewMore.module.css';

export function ViewMore(){
    return(
        <>
        <div className={styles.sectionViewMore}>
        <div className={styles.block}>
                <span className={styles.title}>Lorem Ipsum is simply <br /> dummy text.</span>
                <span className={styles.description1}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </span>
                <button className={styles.btnviewmore1}>Saiba Mais</button>
            </div>
            <div className={styles.block2}>
                <span className={styles.title}>Lorem Ipsum is simply <br /> dummy text.</span>
                <span className={styles.description2}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </span>
                <button className={styles.btnviewmore2}>Saiba Mais</button>
            </div>
        </div>
        </>
    )
}