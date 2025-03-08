import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../scss/NewsPage.scss';

function NewsPage() {
    const articles = [
        {
            title: 'Xəbər başlığı 1',
            content: 'Nostrum similique itaque natus eligendi eaque, iste magni tempora molestiae laudantium quam! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius nisl at metus efficitur, non dapibus lectus tristique.'
        },
        {
            title: 'Xəbər başlığı 2',
            content: 'Nostrum similique itaque natus eligendi eaque, iste magni tempora molestiae laudantium quam! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius nisl at metus efficitur, non dapibus lectus tristique.'
        }
    ];

    return (
        <div className='news-container'>
            <h2>Ən son yeniliklər</h2>
            <div className='news-content'>
                {articles.map((article, index) => (
                    (article.title && article.content) ? ( // Check if title and content are provided
                        <div className='news-article' key={index}>
                            <div className='news-header'>
                                <h4>{article.title}</h4>
                            </div>
                            <p>{article.content}</p>
                            <div className='news-icon-container'>
                                <FaArrowRight className='news-icon' />
                            </div>
                        </div>
                    ) : (
                        <p key={index}>BuArticle yoxdur</p> // Message for missing articles
                    )
                ))}
            </div>
        </div>
    );
}

export default NewsPage;