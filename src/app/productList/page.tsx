import React from 'react'
import Shop from './shop'
import Companies from '../about/companies'
import Footer from '../components/footer'
import List from './list'
import Navbar from '../components/Navbar'

const ProductList = () => {
  return (
    <div>
        <Navbar style='bg-[#23856D]'/>
        <Shop/>
        <div className=' hidden md:block'>
        <Companies/>
        </div>
        <List/>
        <div className=' block md:hidden'>
        <Companies/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default ProductList