import { FaStar } from 'react-icons/fa'
import React , {useState } from 'react'
import useTranslation from 'next-translate/useTranslation';

const Home = () => {

   const { t } = useTranslation('common');
  return (
      <footer>
            <div className ='footer-content'>

                 <div className = 'footer-content-social-media-flex'>
                           

                           <div   className = 'footer-content-info-flex'>

                                

                                         <div className = 'footer-ctn'>
                                            <div className = 'footer-ctn-title'> {t('foot_19')}</div>
                                            <div className = 'footer-ctn-ls-zn'>
                                               <div className = 'footer-ctn-ls-zn-item'>
                                                  <ul>
                                                     <li> <a href ='https://trustwallet.com/assets'> {t('foot_24')} </a></li>
                                                     <li> <a href ='https://trustwallet.com/dapp'>  {t('foot_25')} </a></li>
                                                     <li> <a href ='https://trustwallet.com/stablecoins'> {t('foot_26')} </a></li>
                                                     <li> <a href ='https://trustwallet.com/beta'> {t('foot_27')} </a></li>
                                                     <li> <a href ='https://trustwallet.com/collectibles-wallet'> {t('foot_28')}  </a></li>
                                                   </ul>
                                               </div>
                                            </div>
                                         </div>


                                         <div className = 'footer-ctn'>
                                            <div className = 'footer-ctn-title'>{t('foot_29')}</div>
                                            <div className = 'footer-ctn-ls-zn'>
                                               <div className = 'footer-ctn-ls-zn-item'>

                                                  
                          
                                                  <ul>
                                                     <li> <a href = 'https://community.trustwallet.com'>{t('foot_43')}  </a></li>
                                                     <li> <a href = 'https://community.trustwallet.com/c/helpcenter'> {t('foot_44')} </a></li>
                                                     <li> <a href = 'https://support.trustwallet.com/'> {t('foot_45')}</a></li>
                                                     <li> <a href = 'https://trustwallet.com/blog'>  {t('foot_46')} </a></li>
                                                     <li> <a href = 'https://trustwallet.com/press'> {t('foot_48')}</a></li>
                                                     <li> <a href = 'https://trustwallet.com/submit-dapp'> {t('foot_49')} </a></li>
                                                     <li> <a href = 'https://trustwallet.com/terms-of-services'>  {t('foot_50')}</a></li>
                                                     
                                                  </ul>
                                               </div>
                                            </div>
                                         </div>

                                                   
                                         <div className = 'footer-ctn'>
                                            <div className = 'footer-ctn-title'>{t('foot_58')}</div>
                                            <div className = 'footer-ctn-ls-zn'>
                                               <div className = 'footer-ctn-ls-zn-item'>
                                                  <ul>
                                                     <li> <a href ='https://trustwallet.com/buy-bitcoin'>{t('foot_62')}</a></li>
                                                     <li> <a href = 'https://trustwallet.com/buy-ethereum'>{t('foot_63')}  </a></li>
                                                     <li> <a href = 'https://trustwallet.com/buy-bnb'>{t('foot_64')}</a></li>
                                                     

                                                  </ul>
                                               </div>
                                            </div>
                                         </div>

                                         <div className = 'footer-ctn'>
                                             <div className = "footer-logo">
                                                <div className = "footer-logo-zn">
                                                {t('foot_75')} 

                                                </div>
                                             </div>
                                                <div className = 'footer-social-media'>
                                                   <div className = 'footer-social-media-zn'>
                                                      <img src= './facebook-square.svg'/>
                                                      <img src= './github.svg'/>
                                                      <img src= './instagram.svg'/>
                                                      <img src= './twitter.svg'/>
                                                      <img src= './social_redit.svg'/>
                                                      <img src= './telegram-plane.svg'/>
                                                   </div>
                                                </div>
                                         </div>



                           </div>

                 </div>






            </div>
      </footer>
  )
}

export default Home
