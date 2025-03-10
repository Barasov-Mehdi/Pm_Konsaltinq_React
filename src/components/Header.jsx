// Header.js
import React, { useEffect, useState } from 'react';
import LOGO_MB from '../assets/LOGO_MB.png';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import '../scss/Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../slices/productSlice';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchInp, setSearchInp] = useState('');
    const [serviceArray, setServiceArray] = useState([]);

    const dispatch = useDispatch();
    const services = useSelector((state) => state.products.services)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch])

    const searchBtn = () => {
        if (!searchInp.trim()) return;
        const searchFilter = services.filter((e) => e.name.toLowerCase().includes(searchInp.toLowerCase()))
        searchFilter
        setServiceArray(searchFilter);
    }

    const goProductDetails = (serviceId) => {
        navigate(`/product/${serviceId}`);
        setShowSearch(false);
        setSearchInp('');
        setServiceArray([])
    };

    const toggleSearchBox = () => {
        setShowSearch(prev => !prev);
    };

    const toggleMenuBox = () => {
        setShowMenu(prev => !prev);
    };


    return (
        <section className='containerHeader'>
            <header className='header_box'>
                <img src={LOGO_MB} alt="Logo" />
                <nav className='links_box'>
                    <Link to='/'>Əsas səhifə</Link>
                    <Link to='/About'>Haqqımızda</Link>
                    <a href="#">Yeniliklər</a>
                    <a href="#">Xidmətlər</a>
                    <a href="#">Ünvan</a>
                </nav>
                <div className='icons_box'>

                    {
                        showSearch ? (
                            <HiMiniXMark onClick={toggleSearchBox} className='search_icon' />
                        ) : (
                            <IoSearchSharp onClick={toggleSearchBox} className='search_icon' />
                        )
                    }

                    {showMenu ? (
                        <HiMiniXMark onClick={toggleMenuBox} className='menuIcon' />
                    ) : (
                        <IoIosMenu onClick={toggleMenuBox} className='menuIcon' />
                    )}
                </div>
            </header>

            {showSearch && (
                <section className='searchContainer'>
                    <div className='searchTagsBox'>
                        <input
                            value={searchInp}
                            onChange={(e) => setSearchInp(e.target.value)}
                            type="text"
                            placeholder="Xidmət Axtar..."
                            className='searchInput'
                        />
                        <button onClick={searchBtn} className='searchButton'>Axtar</button>
                    </div>
                    {serviceArray.length > 0 && (
                        <section className='searchResults'>
                            {serviceArray.map((e) => (
                                <div key={e._id} className='searchResultItem' onClick={() => goProductDetails(e._id)}>
                                    <p>{e.name}</p>
                                </div>
                            ))}
                        </section>
                    )}
                </section>
            )}

            {showMenu && (
                <section className='barMenu'>
                    <div className='barNavBox'>
                        <Link to='/'>Əsas səhifə</Link>
                        <Link to='/About'>Haqqımızda</Link>
                        <a href="#">Yeniliklər</a>
                        <a href="#">Xidmətlər</a>
                        <a href="#">Ünvan</a>
                    </div>
                    <div className='barasBox'>
                        <p>BarasSoftWare</p>
                    </div>
                </section>
            )}
        </section>
    );
}

export default Header;