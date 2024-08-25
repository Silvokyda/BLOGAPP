import React from 'react'
import Link from 'next/link'
import styles from './MenuCategories.module.css'

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=styles"
                className={`${styles.categoryItem} ${styles.style}`}>
                <span className={styles.categoryText}>Style</span>
            </Link>
            <Link href="/blog?cat=food"
                className={`${styles.categoryItem} ${styles.food}`}>
                <span className={styles.categoryText}>Food</span>
            </Link>
            <Link href="/blog?cat=coding"
                className={`${styles.categoryItem} ${styles.coding}`}>
                <span className={styles.categoryText}>Coding</span>
            </Link>
            <Link href="/blog?cat=fashion"
                className={`${styles.categoryItem} ${styles.fashion}`}>
                <span className={styles.categoryText}>Fashion</span>
            </Link>
            <Link href="/blog?cat=culture"
                className={`${styles.categoryItem} ${styles.culture}`}>
                <span className={styles.categoryText}>Culture</span>
            </Link>
            <Link href="/blog?cat=travel"
                className={`${styles.categoryItem} ${styles.travel}`}>
                <span className={styles.categoryText}>Travel</span>
            </Link>

        </div>
    )
}

export default MenuCategories