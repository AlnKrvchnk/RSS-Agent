import { Articles } from '../types/articles';
import { Link } from '../types/link';
import { news } from './endpoints';
import Api from './index';

export default class NewsApi {
    constructor(private readonly api: Api) {}

    public getNews(): Promise<Array<Articles>> {
        return this.api.get(news.getAll());
    }
    public getFilterNews(
        linkList: Array<Link> | undefined,
        findBy: Array<string> | undefined
    ): Promise<Array<Articles>> {
        return this.api.get(news.getByFilter(linkList, findBy));
    }
}
