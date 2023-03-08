import React from 'react'
import Header from '../partials/Header'
import Breadcrumb from '../partials/Breadcrumb'
import CollectionGrid from '../partials/CollectionGrid'

const Products = () => {
  return (
    <>
      <Header />
      <Breadcrumb currentPage="Products" />
      <CollectionGrid title="Products" url="https://kyh-net22.azurewebsites.net/api/products" />
    </>
  )
}

export default Products