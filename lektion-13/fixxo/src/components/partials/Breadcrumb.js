import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul>
                <li><NavLink className="menu-link" to="/">Home</NavLink></li>
                <li className="active">Contacts</li>
            </ul>
        </div>
    </section>
  )
}

export default Breadcrumb