import React from 'react'
import Inovation from './inovation'
import InnovateTeam from './innovateteam'
import FreeTrial from '../pricing/freetrail'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'

const Team = () => {
  return (
    <div> 
        <Navbar style='bg-[#23856D]'/>
        <Inovation/>
        <InnovateTeam/>
        <FreeTrial/>
        <Footer/>
        
    </div>
  )
}

export default Team