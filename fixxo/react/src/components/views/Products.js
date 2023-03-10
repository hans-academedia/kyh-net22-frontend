import React, {useEffect} from 'react'
import Header from '../partials/Header'
import Breadcrumb from '../partials/Breadcrumb'
import CollectionGrid from '../partials/CollectionGrid'
import { useProductContext } from '../../contexts/ProductContext'

const Products = () => {
  const { all, getAllAsync} = useProductContext()

  useEffect(() => {
    getAllAsync()
  }, []) 

  return (
    <>
      <Header />
      <Breadcrumb currentPage="Products" />
      <CollectionGrid title="Products" items={all} />
    </>
  )
}

export default Products