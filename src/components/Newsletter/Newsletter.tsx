import styles from './Newsletter.module.css';

export function Newsletter() {
    return (
        <>
            <div className={styles.container}>
                <h2>Lorem Ipsum is simply dummy <br /> text of the printing. </h2>
                <form className={styles.inputandbtn}>
                    <input type="email" placeholder='Seu melhor e-mail' />
                    <button type='submit'>INSCREVA-SE</button>
                </form>


            </div>
        </>
    )
}