import React from 'react'
import CollectionCard from './CollectionCard'

const CollectionGrid = () => {
  return (
    <section className="collection-grid">
      <div className="container">
        <div className="title">Featured Products</div>
        <div className="collection">
          
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />

        </div>
      </div>
    </section>
  )
}

export default CollectionGrid