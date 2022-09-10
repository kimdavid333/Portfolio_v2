import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Landing } from './container';
import Navbar from './components/Navbar/Navbar';
import Item from './container/Item/Item';
import Item2 from './container/Item/Item2';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Landing />} />
            <Route path='projects'>
              <Route path='iotmonitoring' element={<Item />} />
              <Route path='integrateddaq' element={<Item2 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
