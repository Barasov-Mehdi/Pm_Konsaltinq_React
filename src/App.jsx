import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import NewsPage from './components/NewsPage';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ServiceDetails from './components/ServiceDetails';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path='/About' element={<About />} />
        <Route path='/product/:id' element={<ServiceDetails />} />
      </Routes>
      <NewsPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;