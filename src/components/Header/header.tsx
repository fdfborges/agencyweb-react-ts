import styles from './header.module.css'
import LogoIpsum from '../../../public/assets/logo.svg'

export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={LogoIpsum} alt="" />
                

            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttons}>Home</button>
                <button className={styles.buttons}>Sobre nós</button>
                <button className={styles.buttons}>Serviços</button>
                <button className={styles.buttons}>Blog</button>
                <button className={styles.buttons}>Contate-nos</button>
            </div>
        </div>

    )

}