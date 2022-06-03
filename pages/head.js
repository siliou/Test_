import React , {useEffect,useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import lang_ from '../locales/lang_en.js'

function IndexPage() {
  const router = useRouter()
  const [hostname,setHostname] = useState('')
  

   useEffect(() => {
    
    if (window) {
      setHostname(window.location.hostname)
    }
    
     
   },[])
  return (
    <div>
      <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href ="/favicon.jpg"></link>
            <title>{`${lang_.head25}`}</title>
            <meta property="og:title" content={` ${lang_.head25} ${hostname} `} key="title" />
            <meta property="og:url" content={`${hostname}`} />
            <meta property="og:description" content= {`${lang_.head27}`} />
            <meta property="og:image" content={`${hostname}/favicon.jpg`} />
      </Head>

    </div>
  )
}

export default IndexPage
