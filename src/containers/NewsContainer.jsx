import React, { Component} from 'react';
import ArticleList from '../components/newsArticles/ArticleList';
import { fetchArticles } from '../services/NewsAPI';



export default class NewsContainer extends Component {
    state= {
        loading: true,
        articles:[]
    }

    async componentDidMount(){
        const news_articles = await fetchArticles();
        this.setState({articles: news_articles});
        this.setState({loading: false});
    }

    render(){
        const {loading} = this.state;
        console.log('I am here', this.state.articles);
        if(loading){
            return <h1>Loading...</h1>
        }
        return (<ArticleList newsArticles={this.state.articles}/>)
    }
}