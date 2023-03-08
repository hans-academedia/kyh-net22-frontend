import './css/style.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Contacts from './components/views/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
