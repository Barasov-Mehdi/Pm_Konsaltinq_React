import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import NewsPage from './components/NewsPage';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ServiceDetails from './components/ServiceDetails';
import ContactUs from './components/ContactUs';
import NewsList from './components/NewsList';
import Location from './components/Locations';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path='/About' element={<About />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path='/newslist' element={<NewsList />} />
        <Route path='/locations' element={<Location />} />
      </Routes>
      {/* <NewsPage /> */}
      {/* <WhyUs /> */}
      <ContactUs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;