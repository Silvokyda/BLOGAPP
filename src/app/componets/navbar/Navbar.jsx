import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/themeToggle'
import AuthLink from '../authlinks/authLink'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
        <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
      </div>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLink/>
      </div>
    </div>
  )
}

export default Navbar