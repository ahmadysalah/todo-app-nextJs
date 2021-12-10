import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Link href="/TodoPage">
      <a>TodoPage</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
 


  console.log('getStaticProps /////////')
  return {
    props: {},
  }
}
