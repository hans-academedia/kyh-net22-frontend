import React from 'react'
import CollectionGrid from '../partials/CollectionGrid'
import Header from '../partials/Header'
import Showcase from '../partials/Showcase'

const Home = () => {
  return (
    <div>
        <Header />
        <Showcase />
        <CollectionGrid />
    </div>
  )
}

export default Home