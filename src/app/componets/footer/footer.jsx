import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
           <h1 className={styles.logoText}>Logo</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         
        </p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Image src="/facebook.png" alt="facebook" width={30} height={30} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <Image src="/tiktok.png" alt="twitter" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Image src="/instagram.png" alt="instagram" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <Image src="/youtube.png" alt="youtube" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
            <div className={styles.list}>
              <span className={styles.listTitle}>Links</span>
              <Link href="/">Homepage</Link>
              <Link href="/">Blog</Link>
              <Link href="/">About</Link>
              <Link href="/">contact</Link>
            </div>
            <div className={styles.list}>
              <span className={styles.listTitle}>Tags</span>
              <Link href="/">Style</Link>
              <Link href="/">Fashion</Link>
              <Link href="/">Coding</Link>
              <Link href="/">Foods</Link>
              <Link href="/">Travel</Link>
            </div>
            <div className={styles.list}>
              <span className={styles.listTitle}>Social</span>
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
              <Link href="/">Youtube</Link>
            </div>
      </div>
    </div>
  )
}

export default Footer