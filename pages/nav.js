import { FaStar } from 'react-icons/fa'
import React , {useState,useEffect } from 'react'
import lang_ from '../locales/lang_en.js'


const Home = () => {


   const [dropMenu,setDropMenu] = useState(null)
   const [dropMenuDes,setDropMenuDes] = useState(false)
   const [pathUrl,setpathUrl] = useState(null)

  useEffect(() => {
      setpathUrl(window.location.href)
  }, [])



  let animateUp = ''
  if( dropMenu == true){
     animateUp = 'drop-animated-up'
  }

  if( dropMenu == null){
     animateUp = 'display-none'
  }

  if( dropMenu == false){
     animateUp = 'drop-animated-down'
  }


  return (
      <nav className ='nav-header'>

        <div className ='desktop'>
            <div className = "nav-container ">

                    <div className = 'nav-header-logo-zn'>
                      <a className = 'nav-header-logo-a'>
                        <img src = {`${process.env.host}/logol_white.svg`}/>
                      </a>
                    </div>

                    <div className = "nav-header-ls-menu">
                      <ul>
                        <li><a href = 'https://accounts.binance.com/en/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4%3D'> {lang_.nav_48}</a></li>
                        <li><a href = 'https://accounts.binance.com/en/register'> {lang_.nav_49}</a></li>
                        <li><a href = '#'>Francais</a></li>
                        
                      </ul>
                    </div>



            </div>

             



       </div>

      <div className = 'mobile'>
          <div className = "nav-container ">
                  <div className = 'nav-header-logo-zn'>
                    <a className = 'nav-header-logo-a'>
                      <img src = './logol_white.svg'/>
                    </a>
                  </div>

                  <div className = 'nav-header-img-menu'>
                       <div
                         className = 'nav-header-img-menu-img'
                         onClick = {() =>
                             setDropMenu(!dropMenu)
                         }>
                          <img src = {`${process.env.host}/menu.svg`} />
                       </div>

                  </div>
          </div>


              <div className =  {` ${animateUp} drop-menu`}>

                  <div className = 'drop-menu-item'>
                     <ul>
                        <li><a href = 'https://trustwallet.com/assets'> {lang_.nav_90} </a></li>
                        <li><a href = 'https://trustwallet.com/staking'> {lang_.nav_91}</a></li>
                        <li><a href = 'https://trustwallet.com/earn'> {lang_.nav_92}</a></li>
                        
                      </ul>
                  </div>

              </div>



      </div>

      </nav>
  )
}

export default Home
