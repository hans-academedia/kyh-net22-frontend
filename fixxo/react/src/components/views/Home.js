import React, { useEffect } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionGrid from '../partials/CollectionGrid'
import Header from '../partials/Header'
import Showcase from '../partials/Showcase'

const Home = () => {
  const { featured, latest, popular, getFeaturedAsync, getLatestAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
    getFeaturedAsync()
    getLatestAsync()
    getPopularAsync()
  }, [])

  return (
    <>
        <Header />
        <Showcase />
        <CollectionGrid title="Featured Products" items={featured} />
        <CollectionGrid title="New Products" items={latest} />
        <CollectionGrid title="Popular Products" items={popular} />
    </>
  )
}

export default Home