import React from 'react'
import {client} from '../lib/client'
import { HeroBanner, Product, FooterBanner } from '../components'

const Home = ({products, bannerData}) => {
  const banner = bannerData.length && bannerData[0]
  return (
    <>
      <HeroBanner herobanner={banner}/>
      <div className='products-heading'>
        <h2 >Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {
          products?.map(product => <Product key={product._id} product={product}/>)
        }
      </div>


      <FooterBanner  footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

// aqui hacemos el fetch con SSR
export const getServerSideProps = async () => {
  //fetching de productos
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  //fetching de banner
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  // retornamos los props que vienen del servidor
  return {
    props : {products, bannerData}
  }

}

export default Home