import styles from './CustomersTrust.module.css';

import beneoshop from '../../../public/assets/CustomerstrustImgs/beneoshop.svg';
import caspio from '../../../public/assets/CustomerstrustImgs/caspio.svg';
import hypergrid from '../../../public/assets/CustomerstrustImgs/HyperGrid.svg';
import leotrippi from '../../../public/assets/CustomerstrustImgs/leotrippi.svg';

export function CustomersTrust() {
    return (
        <>
            <div className={styles.container}>
            <h2 className={styles.title}>Estará em boa companhia</h2>
            <ul>
                <li><img src={beneoshop} alt="" /></li>
                <li><img src={caspio} alt="" /></li>
                <li><img src={hypergrid} alt="" /></li>
                <li><img src={leotrippi} alt="" /></li>
            </ul>
            </div>
        </>
    )
}