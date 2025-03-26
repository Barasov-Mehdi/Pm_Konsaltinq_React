import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import NewsPage from './components/NewsPage';
import About from './components/About';
// import ProductDetails from './components/ProductDetails';
import { Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import ServiceDetails from './components/ServiceDetails';
import ContactUs from './components/ContactUs';
import NewsList from './components/NewsList';
import Location from './components/Locations';

import VergiPage from './components/CategoryPages/Vergi'
import MuhasibatPage from './components/CategoryPages/MuhasibatPage';
import MetbeePage from './components/CategoryPages/MetbeePage';
import PoligrafiyaPage from './components/CategoryPages/PoligrafiyaPage';

// import InfoPages from './components/InfoCards/InfoPages';
function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        {/* <Route path="/ProductDetails" element={<ProductDetails />} /> */}
        <Route path='/About' element={<About />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path='/newslist' element={<NewsList />} />
        <Route path='/locations' element={<Location />} />

        <Route path='/vergi' element={<VergiPage />} />
        <Route path='/muhasibat' element={<MuhasibatPage />} />
        <Route path='/metbee' element={<MetbeePage />} />
        <Route path='/poligrafiya' element={<PoligrafiyaPage />} />
      </Routes>
      {/* <NewsPage /> */}
      {/* <WhyUs /> */}
      {/* <InfoPages /> */}
      <ContactUs />
      <Footer />
    </HashRouter>
  );
}

export default App;