import React from 'react'
import { NavLink } from 'react-router-dom'
import StarRating from './StarRating'


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
            <p className="body-category">{item.category}</p>
            <p className="body-title">{item.name}</p>
            <div className="body-rating">
                <StarRating rating={item.starRating} />
            </div>
            <p className="body-price">{item.originalPrice} {item.currency}</p>
        </div>
    </div>
  )
}

export default CollectionCard