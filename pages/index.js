import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/Header'
import ProductDetails from '../components/ProductDetails'

export default function Home({ response }) {
  const [cartCount, setCartCount] = React.useState(0)

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }
  return (
    <>
      <Header cartValue={cartCount} />
      <ProductDetails products={response} addToCart={addToCart} />
    </>
  )
}



export async function getServerSideProps() {
  const response = await fetch('https://api.unsplash.com/photos?page=1&client_id=fIv9i1dEOurkFrlwG0TTX6GzOIy1Czkpeun2la8yAEQ')
    .then(res => res.json())
  return {
    props: {
      response
    }
  }
}