import React from 'react'
import AboutNav from '../about/aboutNav'
import GetInTouch from './getInTouch'
import ContactDeals from './deals'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div> 
        <Navbar style='bg-[#252B42]'/>
        <GetInTouch/>
        <ContactDeals/>
        <Footer/>

    </div>
  )
}

export default Contact