import styles from './authLink.module.css'
import Link from 'next/link'

const AuthLink = () => {
  const status = "notauthenticated"
  return(
    <>
    {status === "noauthenticated" ? (
        <Link href="/login">Login</Link>
    ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
        </>
    )}
    </>
  );
}

export default AuthLink