import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menupost.module.css'

const postData = [
    { category: 'Travel', title: 'Discover the world', username: 'silvans', date: '25.08.2024', image: '/p1.jpeg' },
    { category: 'Culture', title: 'Explore cultural heritage', username: 'silvans', date: '25.08.2024', image: '/p1.jpeg' },
    { category: 'Fashion', title: 'Trendy fashion tips', username: 'silvans', date: '25.08.2024', image: '/p1.jpeg' },
    { category: 'Coding', title: 'Code like a pro', username: 'silvans', date: '25.08.2024', image: '/p1.jpeg' },
    { category: 'Food', title: 'Delicious food recipes', username: 'silvans', date: '25.08.2024', image: '/p1.jpeg' },
    { category: 'Style', title: 'Style and elegance', username: 'silvans', date: '25.08.2024', image: '/p1.jpeg' }
];

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            {postData.map((post, index) => (
                <Link href="/" key={index} className={styles.item}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src={post.image} alt={post.title} fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>{post.category}</span>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>{post.username}</span>
                            <span className={styles.date}> - {post.date}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPosts;
