import WebMgr from "core/WebMgr";

const WebInstance = WebMgr.getInstance();

export const getNewsList = () => WebInstance.getNewsList();
export const getAnNews = (newsId) => WebInstance.getAnNews(newsId);
export const setNewsList = (newsList) => WebInstance.setNewsList(newsList);