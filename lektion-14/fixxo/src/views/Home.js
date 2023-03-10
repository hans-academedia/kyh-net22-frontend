import React, { useState } from 'react'
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  const [user, setUser] = useState({})
  
  const handleUserChange = (e) => {
    const { id, value, type, required } = e.target;
    setUser(current => ({...current, [id]: value}))

    if(required) {
      switch(type) {
        case 'text':
          console.log(`validating text for ${id}`)
          break
        
        case 'email':
          console.log(`validating email for ${id}`)
          break
  
        case 'password':
          console.log(`validating password for ${id}`)
          break
      }
    }
  }


  return (
    <div className="container mt-4">
      <FeaturedProducts />

      <input type="text" id="firstName" required onChange={handleUserChange} className="form-control mb-3" />
      <input type="text" id="lastName" onChange={handleUserChange} className="form-control mb-3" />
      <input type="email" id="email" onChange={handleUserChange} className="form-control mb-4" />
      <input type="password" id="password" onChange={handleUserChange} className="form-control mb-4" />
      
      <div>First Name: {user.firstName}</div> 
      <div>Last Name: {user.lastName}</div>
      <div>Email: {user.email}</div>
      <div>Password: {user.password}</div>
    </div>
  )
}

export default Home