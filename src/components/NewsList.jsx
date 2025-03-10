import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Vergi from '../assets/vergi.PNG';
import Muhasibat from '../assets/Muhasibat.PNG';
import Mətbəə from '../assets/Mətbəə.PNG';
import Poliqrafiya from '../assets/Poliqrafiya.PNG';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../slices/newsSlice';
import '../scss/NewsList.scss';
import { TailSpin } from 'react-loader-spinner';

function NewsList() {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.allNews.news);
    const isLoading = useSelector((state) => state.allNews.isLoading); // Haberler yükleniyor mu?

    const services = [
        { title: 'Vergi', imgSrc: Vergi },
        { title: 'Mühasibat', imgSrc: Muhasibat },
        { title: 'Mətbəə', imgSrc: Mətbəə },
        { title: 'Poliqrafiya', imgSrc: Poliqrafiya },
    ];

    const [filteredNews, setFilteredNews] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); // Seçilen filtreleme tarihi

    useEffect(() => {
        dispatch(getAllNews());
    }, [dispatch]);

    useEffect(() => {
        setFilteredNews(news); // İlk yüklemede tüm haberleri göster
    }, [news]);

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        const currentDate = new Date();
        setSelectedDate(currentDate); // Tıklanma tarihini kaydet

        let filtered = news;

        switch (selectedFilter) {
            case 'weekly': {
                const oneWeekAgo = new Date(currentDate);
                oneWeekAgo.setDate(currentDate.getDate() - 7);
                filtered = news.filter(e => new Date(e.date) >= oneWeekAgo);
                break;
            }
            case 'monthly': {
                const oneMonthAgo = new Date(currentDate);
                oneMonthAgo.setMonth(currentDate.getMonth() - 1);
                filtered = news.filter(e => new Date(e.date) >= oneMonthAgo);
                break;
            }
            case 'yearly': {
                const oneYearAgo = new Date(currentDate);
                oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
                filtered = news.filter(e => new Date(e.date) >= oneYearAgo);
                break;
            }
            case 'latest':
            default:
                filtered = news;
                break;
        }

        setFilteredNews(filtered);
    };

    return (
        <div className="news-list">
            <select className="select_option" onChange={handleFilterChange}>
                <option value="latest">Sonuncu</option>
                <option value="weekly">Həftəlik</option>
                <option value="monthly">Aylıq</option>
                <option value="yearly">İllik</option>
            </select>

            <div>
                {isLoading ? (
                    <div className="loading-container">
                        <TailSpin className="loading" color="#3498db" />
                    </div>
                ) : (
                    filteredNews.length > 0 ? (
                        filteredNews.map((e) => (
                            <div key={e._id} className="news-article">
                                <div className="news-header">
                                    <h4>{e.title}</h4>
                                </div>
                                <div className="news-content">
                                    <h4>{e.content}</h4>
                                </div>
                                <div className="news-author">
                                    <h4>{e.author}</h4>
                                </div>
                                <div className="news-date">
                                    <h4>
                                        {new Date(e.date).toLocaleDateString()} -{' '}
                                        {new Date(e.date).toLocaleTimeString().split(":").slice(0, 2).join(":")}
                                    </h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <TailSpin className="loading" color="#3498db" />
                    )
                )}
            </div>

            <div className="card_box">
                <h2>Xidmətlərimiz</h2>
                <div className="cardsContainer">
                    {services.map((service, index) => (
                        <div key={index}>
                            <Link to="/ProductDetails">
                                <Card title={service.title} imgSrc={service.imgSrc} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsList;
