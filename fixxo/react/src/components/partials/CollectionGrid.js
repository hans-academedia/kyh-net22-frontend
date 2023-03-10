import React, { useState, useEffect } from 'react'
import CollectionCard from './CollectionCard'

const CollectionGrid = ({title, items}) => {
  return (
    <section className="collection-grid">
      <div className="container">
        <div className="title">{title}</div>
        <div className="collection"> 
          { items.map(item => (<CollectionCard key={item.articleNumber} item={item} />)) }
        </div>
      </div>
    </section>
  )
}

export default CollectionGrid