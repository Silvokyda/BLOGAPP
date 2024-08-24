import React from 'react'
import Image from 'next/image'
import styles from './featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b className={styles.bold}>Hey, this is my blog page!</b>Discover my stories and creatives ideas.</h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" fill alt=''/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste at quod architecto tempora. Magnam deleniti illum beatae enim ea. Delectus error commodi explicabo natus nisi optio velit consequatur pariatur!</p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
    </div>
  )
}

export default Featured