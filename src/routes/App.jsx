import React from 'react';
import {HashRouter,Routes,Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { BookStore } from '../pages/BookStore';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookstore' element={<BookStore/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
