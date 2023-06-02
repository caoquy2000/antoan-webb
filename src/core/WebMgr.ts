export default class WebMgr {
    static instance = null;
    static getInstance() {
        if (!WebMgr.instance) WebMgr.instance = new WebMgr();
        return WebMgr.instance;
    }

    //Variable
    static news = [];

    setNewsList = (newsList) => {
        WebMgr.news = newsList;
    };

    getNewsList = () => {
        console.log('list', WebMgr.news);
        return WebMgr.news;
    };

    getAnNews = (newsId) => {
        return WebMgr.news.filter((news) => news.idPath === newsId);
    };
}