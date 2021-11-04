import React from 'react';
import PropTypes from 'prop-types';
export default function ArticleList({
    newsArticles
}){
console.log('I am articles', newsArticles);
console.log(newsArticles.articles[0]);
    return (
        newsArticles['articles'].map((article,index) => 
        <div id = {index}>
             <p><b>Author: </b>{article.author} </p>
             <p><b>Title:</b> {article.title} </p>
             <p><b>Description:</b> {article.description}</p>
             <p><i>{article.content}</i></p>
             <br></br>
        </div>)
        
    )
}

