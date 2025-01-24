import React from 'react'
import Simplepricing from './simplepricing'
import Companies from '../about/companies'
import PricingFAQ from './pricingFAQ'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'



const Pricing = () => {
  return (
    <div>
        <Navbar style='bg-[#23856D]'/>
        <Simplepricing/>
        <Companies/>
        <PricingFAQ/>
        <Footer/>
        

    </div>
  )
}

export default Pricing