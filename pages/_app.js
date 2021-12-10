import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return(
  <React.Fragment>
    <Head>
        <title>toDo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </React.Fragment>
  )
}

export default MyApp
