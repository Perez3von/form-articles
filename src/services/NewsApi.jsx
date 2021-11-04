export const fetchArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`)
    const articles = await res.json();
    return articles
}