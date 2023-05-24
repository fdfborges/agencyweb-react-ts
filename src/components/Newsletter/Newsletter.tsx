import React from 'react'
import { useState } from 'react';
import styles from './Newsletter.module.css';

export function Newsletter() {



    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();


        setInputValue('');
    }

    return (
        <>
            <div className={styles.container}>
                <h2>Lorem Ipsum is simply dummy <br /> text of the printing. </h2>
                
                <form onSubmit={handleSubmit}
                className={styles.inputandbtn}>

                    <input 
                    type="email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Seu melhor e-mail' />
                    
                    <button
                    type='submit'>
                    INSCREVA-SE
                    </button>
                </form>


            </div>
        </>
    )
}