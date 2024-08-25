import Image from 'next/image'
import styles from './singlePage.module.css'
import Menu from '../componets/menu/menu'
import Comment from '../componets/comments/Comments'

function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc}>
                        <h2>The Blog</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sapiente aut accusamus esse recusandae accusantium voluptatibus sequi velit voluptas eius aspernatur, atque ex officia fuga deserunt laudantium nisi quos dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sapiente aut accusamus esse recusandae accusantium voluptatibus sequi velit voluptas eius aspernatur, atque ex officia fuga deserunt laudantium nisi quos dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sapiente aut accusamus esse recusandae accusantium voluptatibus sequi velit voluptas eius aspernatur, atque ex officia fuga deserunt laudantium nisi quos dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sapiente aut accusamus esse recusandae accusantium voluptatibus sequi velit voluptas eius aspernatur, atque ex officia fuga deserunt laudantium nisi quos dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sapiente aut accusamus esse recusandae accusantium voluptatibus sequi velit voluptas eius aspernatur, atque ex officia fuga deserunt laudantium nisi quos dolor.
                        </p>
                    </div>
                    <div className={styles.comments}>
                    <Comment />
                    </div>
                </div>
                 <Menu />
            </div>
        </div>
    )
} SinglePage

export default SinglePage