import React, { useState, useEffect } from 'react'
import CollectionCard from './CollectionCard'

const CollectionGrid = ({title, url}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(url)
      const data = await result.json()
      setItems(data)
    }
    fetchData();
  }, [])
  
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