import styles from './Footer.module.css';

import Logo from '../../../public/assets/logo.svg';
import Facebook from '../../../public/assets/FooterImgs/facebook.svg';
import Instagram from '../../../public/assets/FooterImgs/instagram.svg';
import Linkedin from '../../../public/assets/FooterImgs/linkedin.svg';
import twitter from '../../../public/assets/FooterImgs/twitter.svg';

export function Footer() {
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
        <>
            <footer>
                <section className={styles.content}>
                    <div className={styles.left}>
                        <a onClick={scrollToAnchorHomePresentation}><img src={Logo} alt="" /></a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p>@Lorem</p>
                    </div>
                    <div className={styles.half}>
                        <ul>
                            <li><h3>Sobre Nós</h3></li>
                            <li><a href="#">Lorem</a></li>
                            <li><a href="#">Portifólio</a></li>
                            <li><a href="#">Carrers</a></li>
                            <li><a href="#">Cont</a></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <h3>Contate-nos</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p><a href="tel:+90889097890">@+908 89097 890</a></p>
                    </div>
                    <div className={styles.social}>

                        <a href="#"><button><img src={Facebook} alt="" /></button></a>
                        <a href="#"><button><img src={Instagram} alt="" /></button></a>
                        <a href="#"><button><img src={twitter} alt="" /></button></a>
                        <a href="#"><button><img src={Linkedin} alt="" /></button></a>
                    </div>
                </section>
                <div className={styles.baseboard}>
                    <p>Feito com ❤️ por Felipe Borges</p>
                </div>
            </footer>
        </>
    )
}