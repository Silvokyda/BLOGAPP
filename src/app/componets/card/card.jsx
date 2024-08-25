import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="postImg" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>25.08.2024 -</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero, facere nisi sequi rerum unde atque saepe rem consequuntur laudantium, corrupti harum, expedita tenetur provident adipisci cupiditate debitis exercitationem hic?
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default card