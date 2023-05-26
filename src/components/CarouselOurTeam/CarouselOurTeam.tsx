import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './CarouselOurTeam.module.css';

import JohnKabras from '../../../public/assets/CarouselOurTeamImgs/JohnKabras.png';
import PhilipsSheneMoris from '../../../public/assets/CarouselOurTeamImgs/PhilipsSheneMoris.png';
import EquarnShamirMohomad from '../../../public/assets/CarouselOurTeamImgs/EquarnShamirMohomad.png';
import JankaIndrajith from '../../../public/assets/CarouselOurTeamImgs/JankaIndrajith.png';





export function CarouselOurTeam() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3.3,
        slidesToScroll: 1,
    };
    return (

        <>
            <Slider className={styles.slidebarOurTeam} {...settings}>
                <div className={styles.containerContent}>
                    <div className={styles.containerImg}>
                        <img src={JohnKabras} alt="" />
                    </div>
                    <span>CEO</span>
                    <h3>John kabras</h3>
                </div>
                <div className={styles.containerContent}>
                    <div className={styles.containerImg}>
                        <img src={PhilipsSheneMoris} alt="" />
                    </div>
                    <span>CEO</span>
                    <h3>John kabras</h3>
                </div>
                <div className={styles.containerContent}>
                    <div className={styles.containerImg}>
                        <img src={EquarnShamirMohomad} alt="" />
                    </div>
                    <span>CEO</span>
                    <h3>John kabras</h3>
                </div>
                <div className={styles.containerContent}>
                    <div className={styles.containerImg}>
                        <img src={JankaIndrajith} alt="" />
                    </div>
                    <span>CEO</span>
                    <h3>John kabras</h3>
                </div>
            </Slider>
        </>
    )
}