import React from 'react'
import ProductNav from './productNav'
import Shop from './shop'
import Companies from '../about/companies'
import Footer from '../components/footer'
import BestSeller from '../home/bestSeller'
import List from './list'

const ProductList = () => {
  return (
    <div>
        <ProductNav/>
        <Shop/>
        <div className=' hidden md:block'>
        <Companies/>
        </div>
        <div className=' hidden md:block'>
        <Footer/>
        </div>
        <List/>
        <div className=' block md:hidden'>
        <Companies/>
        </div>
        <div className=' block md:hidden'>
        <Footer/>
        </div>
    </div>
  )
}

export default ProductList