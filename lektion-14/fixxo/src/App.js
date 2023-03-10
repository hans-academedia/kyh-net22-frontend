import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Contact from './views/Contact';
import Navigation from './components/Navigation';
import { useProductContext } from './contexts/ProductContext';

function App() {
  const { getFeaturedAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
      getFeaturedAsync()
      getPopularAsync()
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
