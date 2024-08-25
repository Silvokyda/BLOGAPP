import styles from './Comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
    const status = 'authenticated';

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        className={styles.input}
                        name="comment"
                        id="comment"
                        placeholder="Write a comment..."
                    />
                    <button className={styles.button} type="submit">
                        Comment
                    </button>
                </div>
            ) : (
                <Link href="/login" className={styles.loginLink}>
                    Login to comment
                </Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="User Avatar" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="User Avatar" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="User Avatar" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="User Avatar" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="User Avatar" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="User Avatar" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Silvans Oketch</span>
                            <span className={styles.date}>25-08-2024</span>
                        </div>
                    </div>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
