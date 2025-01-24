import React from 'react'
import AboutHero from './aboutHero'
import ProblemTry from './problemTry'
import OurTeam from './ourTeam'
import Companies from './companies'
import WorkWithUs from './workWithUs'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
        <Navbar style='bg-[#252B42]'/>
        <AboutHero/>
        <ProblemTry/>
        <OurTeam/>
        <Companies/>
        <WorkWithUs/>
        <Footer/>

    </div>
  )
}

export default About