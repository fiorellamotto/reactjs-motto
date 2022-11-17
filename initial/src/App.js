import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Home from "./components/Home/Home"


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/products/:detalleId' element={<ItemDetailContainer/>}/>
        <Route path='/all' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;