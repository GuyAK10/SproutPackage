import '../styles/globals.css'
import '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
