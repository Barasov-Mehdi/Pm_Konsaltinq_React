import React, { useState } from 'react';  // Buraya ekleyin
import '../scss/Main.scss';
import LOGO_MB from '../assets/LOGO_MB.png';
import { IoSearchSharp } from "react-icons/io5";
import Content from './Content';
import Footer from './Footer';
import { IoIosMenu } from "react-icons/io";
import NewsPage from './NewsPage';
import { HiMiniXMark } from "react-icons/hi2";


function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const showSearchBox = () => {
    setShowSearch(true)
  }

  return (
    <div className='container' style={{
      overflowY: showMenu ? 'hidden' : 'auto',
      height: showMenu ? '100vh' : 'auto' // Yükseklik ayarı
    }}>
      <header className='header_box'>
        <img src={LOGO_MB} alt="Logo" />

        <nav className='links_box'>
          <a href="#">Əsas səhifə</a>
          <a href="#">Haqqımızda</a>
          <a href="#">Yeniliklər</a>
          <a href="#">Xidmətlər</a>
          <a href="#">Ünvan</a>
        </nav>

        <div className='icons_box'>
          <IoSearchSharp className='search_icon' onClick={showSearchBox} />
          {
            showMenu ? (
              <HiMiniXMark className='menuIcon' onClick={toggleMenu} />

            ) : (
              <IoIosMenu className='menuIcon' onClick={toggleMenu} />
            )
          }
        </div>

      </header>

      <main className='main'>
        <Content showMenu={showMenu} showSearch={showSearch} setShowSearch={setShowSearch} />
      </main>

      <section className='newsBox'>
        <NewsPage />
      </section>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;