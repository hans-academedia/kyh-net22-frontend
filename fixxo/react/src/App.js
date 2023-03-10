import './css/style.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Contacts from './components/views/Contacts';
import Products from './components/views/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
