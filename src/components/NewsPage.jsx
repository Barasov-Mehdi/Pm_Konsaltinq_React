import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../scss/NewsPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../slices/newsSlice';
import { Link, useNavigate } from 'react-router-dom';

function NewsPage() {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.allNews.news);

    const [newsPaper, setNewsPaper] = useState([]);

    useEffect(() => {
        dispatch(getAllNews());
    }, [dispatch]);

    useEffect(() => {
        setNewsPaper(news);
    }, [news]);

    const lastTwoNews = newsPaper.slice(-2);

    return (
        <div className='news-container'>
            <h2>Ən son yeniliklər</h2>
            <Link to="/newslist" className='news_content_box'>
                {
                    lastTwoNews.map((e) => (
                        <div key={e._id} className='news-article'>
                            <div className='news-header'>
                                <h4>{e.title}</h4>
                            </div>
                            <div className='news-content'>
                                <h4>{e.content}</h4>
                            </div>
                            <div className='news-author'>
                                <h4>Müəllif: {e.author}</h4>
                            </div>
                            <div className='news-date'>
                                <h4>
                                    Tarix: {new Date(e.date).toLocaleDateString()}
                                </h4>
                            </div>
                            <div className='news-icon-container'>
                                <FaArrowRight className='news-icon' />
                            </div>
                        </div>
                    ))
                }
            </Link>
        </div>
    );
}

export default NewsPage;
