import { FaStar } from 'react-icons/fa'
import React , {useState } from 'react'
import Nav from './nav'
import Footer from './footer'
import Header from './head'
const Home = (props) => {


  return (
      <div className = 'container'>
          <Header/>
        <Nav/>
        {props.children}
         <div>
             <Footer/>
         </div>
      </div>
  )
}

export default Home
