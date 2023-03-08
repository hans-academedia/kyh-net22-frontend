import React from 'react'
import { NavLink } from 'react-router-dom'

const CollectionCard = ({item}) => {
  return (
    <div className="collection-card">
        <div className="image-section">
            <img src={item.imageUrl} alt={item.name} />
            <nav className="icons">
                <a className="link" href="#"><i className="fa-regular fa-heart"></i></a>
                <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a>
            </nav>
            <NavLink className="btn-theme" to="/products/">QUICK VIEW</NavLink>
        </div>
        <div className="body-section">
            <p className="category">{item.category}</p>
            <p className="title">{item.name}</p>
            <div className="ranking">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-regular fa-sharp fa-star"></i>
            </div>
            <p className="price">{item.originalPrice} {item.currency}</p>
        </div>
    </div>
  )
}

export default CollectionCard