import React from 'react';
import '../scss/NewsPage.scss';

function NewsPage() {
    const articles = [
        {
            title: 'Xəbər adı',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos nisi nam possimus itaque quaerat magni mollitia, omnis blanditiis fugiat eligendi consequuntur eum soluta tenetur deleniti saepe harum ea dolorem.',
        },
       
    ];

    return (
        <div className='newsContainer'>
            <h2>Ən son yeniliklər</h2>
            <div className='newsContent'>
                {articles.map((article, index) => (
                    <div className='newsArticle' key={index}>
                        <h4>{article.title}</h4>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsPage;