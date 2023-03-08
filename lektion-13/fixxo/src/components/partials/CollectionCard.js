import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImage from '../../assets/images/products/black-dress.png'

const CollectionCard = () => {
  return (
    <div className="collection-card">
        <div className="image-section">
            <img src={TempImage} alt="" />
            <nav className="icons">
                <a className="link" href="#"><i className="fa-regular fa-heart"></i></a>
                <a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a>
            </nav>
            <NavLink className="btn-theme" to="/products/">QUICK VIEW</NavLink>
        </div>
        <div className="body-section">
            <p className="category"></p>
            <p className="title"></p>
            <div className="ranking">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-regular fa-sharp fa-star"></i>
            </div>
            <p className="price"></p>
        </div>
    </div>
  )
}

export default CollectionCard