import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DattaKaka.com</title>
      </Head>

      <main>
        <Image src="/image25603.png" width="500%" height='500%'  alt="img" />
        <h1>dattakaka.com</h1>
        <p>Our website is under construction.</p>
        <p>
          You may contact us on&nbsp;
          <a className="mailto" href="mailto:response@dattakaka.com">
            response@dattakaka.com
          </a>
        </p>
      </main>

    </div>
  )
}

export default Home
