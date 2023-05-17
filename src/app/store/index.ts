import LinksStore from "./links.store";
import NewsStore from "./news.store";


export default class AppStore {
    news = new NewsStore();
    links = new LinksStore();
}