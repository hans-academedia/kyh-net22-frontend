import React from 'react'
import CollectionGrid from '../partials/CollectionGrid'
import Header from '../partials/Header'
import Showcase from '../partials/Showcase'

const Home = () => {
  return (
    <>
        <Header />
        <Showcase />
        <CollectionGrid title="Featured Products" url="https://kyh-net22.azurewebsites.net/api/products/featured" />
    </>
  )
}

export default Home