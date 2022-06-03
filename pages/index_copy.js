import { FaStar } from 'react-icons/fa'
import React , {useState } from 'react'
import Layout from './layout'
import Link from 'next/link'
import ReactPlayer from 'react-player';
import lang_ from '../locales/lang_en.js'




const Home = () => {
 

   const _text = [
      {
         title:`${lang_.ind_11}` ,
         des:`${lang_.ind_12}`
      },
      {
         title: `${lang_.ind_15}`,
         des: `${lang_.ind_16}`
      },
      {
         title: `${lang_.ind_19}`,
         des:`${lang_.ind_20}`
      },
      {
         title: `${lang_.ind_23}`,
         des: `${lang_.ind_24}`
      },
      {
         title: `${lang_.ind_27}`,
         des: `${lang_.ind_28}`
      },
   ]

  return (
      <Layout>
            <div className = 'content'>

                   <div  className = 'row-item-ss-one'>

                        <session className ="session-one">
                           <div className='session-one-grd-text'><h1>  {lang_.ind_43}</h1></div>
                           <div className='session-one-pt-text'><p> {lang_.ind_44}</p></div>
                           
                              <div className='session-one-btn-text'>
                                    <Link href={`/gift`}>
                                       <a>  <button> {lang_.ind_48}  </button></a>
                                    </Link>
                              </div>
                           
                           <div className='session-one-stat'>
                              <div className='session-one-stat-line'>
                                 <div  className='session-one-stat-line-1'> BNB/BUSD  <span className='session-one-stat-line-span-nega'>-0.02%</span> </div>
                                 <div className='session-one-stat-line-2'> SYS/BUSD  <span className='session-one-stat-line-span-posi'>14.34%</span></div>
                                 <div className='session-one-stat-line-3 displayNone'> ADA/EUR <span className='session-one-stat-line-span-nega'>-2.57%</span> </div>
                                 <div className='session-one-stat-line-4 displayNone'> ETH/EUR <span className='session-one-stat-line-span-nega'>-3.94%</span></div>
                              </div>

                              <div className='session-one-stat-line'>
                                 <div  className='session-one-stat-line-1'> 547.0   </div>
                                 <div className='session-one-stat-line-2'> 0.9268  </div>
                                 <div className='session-one-stat-line-3 displayNone'> 1.2888  </div>
                                 <div className='session-one-stat-line-4 displayNone'> 3,456.43 </div>
                              </div>

                              <div className='session-one-stat-line session-one-stat-linest'>
                                 <div  className='session-one-stat-line-1'> €482.81   </div>
                                 <div className='session-one-stat-line-2'> €0.818037  </div>
                                 <div className='session-one-stat-line-3 displayNone'> 1.29  </div>
                                 <div className='session-one-stat-line-4 displayNone'> 3,456.43 </div>
                              </div>
                           </div>

                        </session>



                   </div>


                   <div className='content-sc-ss'>
                        <div className='content-sc-ss-2'><h2> {lang_.ind_83} </h2></div>

                        <div className='content-sc-ss-3'>
                        {lang_.ind_86} 
                        </div>

                        <div className='content-sc-ss-4'>

                             <div className='content-sc-ss-5'>
                                  <div className='content-sc-ss-ghas'>+ 450 000</div>
                                  <div className='content-sc-ss-ghsas'> {lang_.ind_93} </div>
                             </div>
                             <div className='content-sc-ss-5'>
                                   <div className='content-sc-ss-ghas'>$ 800 000</div>
                                   <div className='content-sc-ss-ghsas'> {lang_.ind_97}</div>
                             </div>

                             <div className='content-sc-ss-5'>
                                  <div className='content-sc-ss-ghas'>$ 548,57</div>
                                  <div className='content-sc-ss-ghsas'> {lang_.ind_102} </div>
                             </div>

                         </div>

                        <div className='content-sc-ss-btn'>
                              
                            <Link href={`/gift`}>
                                       <button>{lang_.ind_110}  </button>
                              </Link>
                           
                        </div>

                        <div className='content-ss-earn'>
                             <div className='content-ss-video'>
                             <ReactPlayer url="https://youtu.be/1Wa7z3jDmb0" />
                             </div>
                             <div className='content-ss-earn-ctn'>
                                 
                                 <div className='content-ss-earn-title'> {lang_.ind_121}</div>
                              
                                 <div className='content-ss-earn-text'> {lang_.ind_123}</div>

                                 <div className='content-ss-earn-btn'> <button> {lang_.ind_125}</button></div>

                             </div>
                        </div>

                        <div><h3> {lang_.ind_130}</h3></div>

                        <div className='table-div'>
                           <table >
                              <thead>
                                 <tr>
                                    <td className='thead-fontSize'>{lang_.ind_136}</td>
                                    <td className='thead-fontSize'>{lang_.ind_137}</td>
                                    <td className='thead-fontSize'>{lang_.ind_138}</td>
                                    <td className='thead-fontSize'>{lang_.ind_139}</td>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                 <td scope="row">
                                      <span  className="me-3"> 
                                        <img src="./bnb_log.png" alt="logo" width="30"/>
                                     </span>BNB <span className="me-4">BNB</span>
                                 </td>

                                    <td >€483.60</td>

                                    <td className='blue'>0.15%</td>


                                    <td><img src="./bnb_graph.png" alt="graphe" className="ms-5"/></td>
                                 </tr>

                                 <tr>
                                    <td scope="row">
                                       <span  className="me-3"> 
                                          <img src="./btc_log.png" alt="logo" width="30"/>
                                       </span>BTC <span className="me-4">Bitcoin</span>
                                    </td>

                                    <td >	€43,427.02</td>

                                    <td className="red_">-3.38%</td>


                                    <td><img src="./btc_graph.png" alt="graphe" className="ms-5"/></td>
                                 </tr>

                                 <tr>
                                    <td scope="row">
                                       <span  className="me-3"> 
                                          <img src="./eth_log.png" alt="logo" width="30"/>
                                       </span>ETH  <span className="me-4">Ethereum</span>
                                    </td>

                                    <td >€3,452.08</td>

                                    <td className="red_">	-3.90%</td>


                                    <td><img src="./eth_graph.png" alt="graphe" className="ms-5"/></td>
                                 </tr>

                                 <tr>
                                 <td scope="row">
                                      <span  className="me-3"> 
                                        <img src="./sys_log.png" alt="logo" width="30"/>
                                     </span>SYS <span className="me-4">Syscoin</span>
                                 </td>

                                    <td >€0.806474</td>

                                    <td className='blue'>12.73%</td>


                                    <td><img src="./sys_graph.png" alt="graphe" className="ms-5"/></td>
                                 </tr>
                                 <tr>
                                    <td scope="row">
                                       <span  className="me-3"> 
                                          <img src="./lina_log.png" alt="logo" width="30"/>
                                       </span>LINA  <span className="me-4">Linear</span>
                                    </td>

                                    <td >	€0.041749</td>

                                    <td className="red_">-5.53%</td>


                                    <td><img src="./lina_graph.png" alt="graphe" className="ms-5"/></td>
                                 </tr>

                                 <tr>
                                    <td scope="row">
                                       <span  className="me-3"> 
                                          <img src="./luna_log.png" alt="logo" width="30"/>
                                       </span>LUNA  <span className="me-4">Terra</span>
                                    </td>

                                    <td >	€80.75</td>

                                    <td className="red_" >-8.17%</td>


                                    <td><img src="./lina_graph.png" alt="graphe" className="ms-5"/></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
 
                           <div><h3>FAQ</h3></div>

                           {
                              _text.map((item,index) => {
                                 return(
                                    <div className='text-zn'>
                                          <div className='text-title'> <span className='text-index'>{index}</span>{item.title}</div>
                                          <div className='text-description'>{item.des}</div>
                                    </div>
                                 )
                              })
                           }

                           
                           <div>

                        </div>

                        


                   </div>


                   <div className='start-now'>
                           <div className='start-now-grd-text'> {lang_.ind_260}</div>
                           <div className='start-now-flex-div'>
                               <div className='start-now-flex-div-btn'> <button> {lang_.ind_262} </button></div>
                               <div className='start-now-flex-div-bnt_'> <button> {lang_.ind_263}</button></div>
                           </div>

                    </div>
                   
 


            </div>
      </Layout>
  )
}


const DownloadButon = () => {
  return (
    <div className = 'btn-ss-siv'>
       <a href = 'https://trustwallet.com/download-page'> <button className = 'btn'> {lang_.ind_280} </button>  </a>
    </div>
  )
}
const CrytoButon = () => {
  return (
    <div className = 'btn-ss-siv btn-ss-siv-cryto'>
       <Link href={`/retirervoscrypto`}>
         <button className = 'btn' > {lang_.ind_288}</button>
         </Link>
    </div>
  )
}

 export default Home
