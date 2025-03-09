import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../scss/NewsPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../slices/newsSlice';

function NewsPage() {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.allNews.news);

    const [newsPaper, setNewsPaper] = useState([]);

    useEffect(() => {
        dispatch(getAllNews());
    }, [dispatch]);

    useEffect(() => {
        setNewsPaper(news);
        console.log(news.title)
    }, [news]);

    return (
        <div className='news-container'>
            <h2>Ən son yeniliklər</h2>
            <div className='news-content'>
                {
                    newsPaper.length > 0 ? (
                        newsPaper.map((e) => (
                            <div key={e._id} className='news-article' >
                                <div className='news-header'>
                                    <h4>{e.title}</h4>
                                </div>
                                <div className='news-icon-container'>
                                    <FaArrowRight className='news-icon' />
                                </div>
                            </div>
                        ))
                    ) : <p>Yeniliklər yüklənir...</p>
                }
            </div>
        </div>
    );
}

export default NewsPage;
