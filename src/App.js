import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home';
import { PropertyDetails } from './Pages/PropertyDetails';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
  );
}

export default App;
