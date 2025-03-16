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
    const isLoading = useSelector((state) => state.allNews.isLoading);

    const services = [
        { title: 'Vergi', imgSrc: Vergi },
        { title: 'Mühasibat', imgSrc: Muhasibat },
        { title: 'Mətbəə', imgSrc: Mətbəə },
        { title: 'Poliqrafiya', imgSrc: Poliqrafiya },
    ];

    const [filteredNews, setFilteredNews] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        dispatch(getAllNews());
    }, [dispatch]);

    useEffect(() => {
        setFilteredNews(news);
    }, [news]);

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        const currentDate = new Date();
        setSelectedDate(currentDate);

        let filtered = news;

        switch (selectedFilter) {
            case 'weekly':
                const oneWeekAgo = new Date(currentDate);
                oneWeekAgo.setDate(currentDate.getDate() - 7);
                filtered = news.filter(e => new Date(e.date) >= oneWeekAgo);
                break;
            case 'monthly':
                const oneMonthAgo = new Date(currentDate);
                oneMonthAgo.setMonth(currentDate.getMonth() - 1);
                filtered = news.filter(e => new Date(e.date) >= oneMonthAgo);
                break;
            case 'yearly':
                const oneYearAgo = new Date(currentDate);
                oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
                filtered = news.filter(e => new Date(e.date) >= oneYearAgo);
                break;
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
                <option value="latest">Ən son</option>
                <option value="weekly">Həftəlik</option>
                <option value="monthly">Aylıq</option>
                <option value="yearly">İllik</option>
            </select>

            {isLoading ? (
                <div className="loading-container">
                    <TailSpin className="loading" color="#3498db" />
                </div>
            ) : (
                <table className="news-table">
                    <thead>
                        <tr>
                            <th>Başlıq</th>
                            <th>Məzmun</th>
                            <th>Müəllif</th>
                            <th>Tarix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredNews.length > 0 ? (
                            filteredNews.map((e) => (
                                <tr key={e._id} className="news-row">
                                    <td>{e.title}</td>
                                    <td>{e.content}</td>
                                    <td>{e.author}</td>
                                    <td>{new Date(e.date).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">Yüklənir...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}

            <div className="card_box">
                <h2>Xidmətlərimiz</h2>
                <div className="cardsContainer">
                    {services.map((service, index) => (
                        <div key={index}>
                            <Link to="/">
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